import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma"

export const checkUser = async () => {

    //yaha se main curren logged in user ka info nikalunga 
    //jo clerkk mein login hai
    const user = await currentUser();

    //if no user is login right now using clerk then return null
    if (!user) {
        return null;
    }

    try {
        //now ab user model/table mein check karenge aur unique find karenge
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id,
            },
            include: {
                transactions: {
                    where: {
                        type: "CREDIT_PURCHASE",
                        createdAt: {
                            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
                        }
                    },
                    orderBy: {
                        createdAt: "desc"
                    },
                    take: 1
                }
            }
        });

        if (loggedInUser) {
            return loggedInUser;
        }

        //agar user ka info db mein store nhi hai toh abhi ke liye usko create karenge aur uska name, email, image url wagairah store karenge
        const name = `${user.firstName} ${user.lastName}`;

        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
                transactions: {
                    create: {
                        type: "CREDIT_PURCHASE",
                        packageId: "free_user",
                        amount: 2,
                    },
                },
            },
        });

        return newUser;
    } catch (error) {
        console.log(error.message);
    }
};