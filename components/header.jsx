import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { checkUser } from "@/lib/checkUser";
import { Badge, Briefcase, Calendar, CreditCard, ShieldCheck, User } from "lucide-react";
import { checkAndAllocateCredits } from "@/actions/credits";


const Header = async () => {
    //we are getting user data from checkUser function
    //this function is present in checkUser.js
    const user = await checkUser();
    if (user?.role == "USER") {
        await checkAndAllocateCredits(user);
    }
    return (
        <header className="fixed top-0 w-full  
      bg-background/80  z-10 
      supports-[backdrop-filter]:bg-background/60">

            <nav className="container mx-auto h-16 px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">

                    <Image
                        src="/logo2.png"
                        alt="EasyMaid Logo"
                        width={200}
                        height={60}
                        className="h-10 w-auto object-contain"
                        priority
                    />

                    <span className="text-xl font-semibold text-blue-600">
                        EasyMaid
                    </span>

                </Link>

                {/* CENTER: Navigation */}
                <div className="hidden md:flex items-center 
                 bg-white rounded-full 
                 px-8 py-1.5 
                 shadow-md 
                 gap-10 
                 text-base font-semibold text-gray-700
                 mr-auto ml-95">

                    <Link href="#" className="relative group">
                        <span className="hover:text-blue-600 transition">About</span>
                        <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>

                    <Link href="#" className="relative group">
                        <span className="hover:text-blue-600 transition">Services</span>
                        <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>

                    <Link href="#" className="relative group">
                        <span className="hover:text-blue-600 transition">Gallery</span>
                        <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>

                    <Link href="#" className="relative group">
                        <span className="hover:text-blue-600 transition">Pricing</span>
                        <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>

                </div>



                <div className="flex items-center space-x-2">

                    <SignedIn>
                        {user?.role === "ADMIN" && (
                            <Link href="/admin">

                                {/* Desktop Button */}
                                <Button
                                    variant="outline"
                                    className="hidden md:inline-flex items-center gap-2 
                                    rounded-full px-5 py-2 
                                    shadow-md 
                                    border-gray-300 
                                    bg-white hover:bg-gray-50 
                                    text-gray-700 font-semibold
                                    cursor-pointer"
                                >
                                    <ShieldCheck className="h-4 w-4" />
                                    Admin Dashboard
                                </Button>

                                {/* Mobile Button */}
                                <Button
                                    variant="ghost"
                                    className="md:hidden w-10 h-10 p-0 rounded-full shadow-md bg-white"
                                >
                                    <ShieldCheck className="h-4 w-4" />
                                </Button>

                            </Link>
                        )}
                    </SignedIn>

                    <SignedIn>
                        {user?.role === "MAID" && (
                            <Link href="/maid">

                                {/* Desktop Button */}
                                <Button
                                    variant="outline"
                                    className="hidden md:inline-flex items-center gap-2 
                                    rounded-full px-5 py-2 
                                    shadow-md 
                                    border-gray-300 
                                    bg-white hover:bg-gray-50 
                                    text-gray-700 font-semibold
                                    cursor-pointer"
                                >
                                    <Briefcase className="h-4 w-4" />
                                    Maid Dashboard
                                </Button>

                                {/* Mobile Button */}
                                <Button
                                    variant="ghost"
                                    className="md:hidden w-10 h-10 p-0 rounded-full shadow-md bg-white"
                                >
                                    <Briefcase className="h-4 w-4" />
                                </Button>

                            </Link>
                        )}
                    </SignedIn>

                    <SignedIn>
                        {user?.role === "USER" && (
                            <Link href="/bookings">

                                {/* Desktop Button */}
                                <Button
                                    variant="outline"
                                    className="hidden md:inline-flex items-center gap-2 
                                    rounded-full px-5 py-2 
                                    shadow-md 
                                    border-gray-300 
                                    bg-white hover:bg-gray-50 
                                    text-gray-700 font-semibold
                                    cursor-pointer"
                                >
                                    <Calendar className="h-4 w-4" />
                                    My Bookings
                                </Button>

                                {/* Mobile Button */}
                                <Button
                                    variant="ghost"
                                    className="md:hidden w-10 h-10 p-0 rounded-full shadow-md bg-white"
                                >
                                    <Calendar className="h-4 w-4" />
                                </Button>

                            </Link>
                        )}
                    </SignedIn>

                    <SignedIn>
                        {user?.role === "UNASSIGNED" && (
                            <Link href="/onboarding">

                                {/* Desktop Button */}
                                <Button
                                    variant="outline"
                                    className="hidden md:inline-flex items-center gap-2 
                                    rounded-full px-5 py-2 
                                    shadow-md 
                                    border-gray-300 
                                    bg-white hover:bg-gray-50 
                                    text-gray-700 font-semibold
                                    cursor-pointer"
                                >
                                    <User className="h-4 w-4" />
                                    Complete Profile
                                </Button>

                                {/* Mobile Button */}
                                <Button
                                    variant="ghost"
                                    className="md:hidden w-10 h-10 p-0 rounded-full shadow-md bg-white"
                                >
                                    <User className="h-4 w-4" />
                                </Button>

                            </Link>
                        )}
                    </SignedIn>



                    {(!user || user?.role === "USER") && (
                        <Link href="/pricing">
                            <div
                                className="hidden md:inline-flex items-center gap-2 
                                rounded-full px-3 py-1.5 
                                shadow-md 
                                border border-gray-300 
                                bg-white hover:bg-gray-50 
                                text-gray-700 font-semibold
                                text-sm"
                            >
                                <CreditCard className="h-3.5 w-3.5 text-emerald-600" />

                                <span>
                                    {!user ? "Pricing" : `${user.credits} Credits`}
                                </span>
                            </div>                          
                        </Link>
                    )}


                    {/* if user is signed out then sign in will get show  */}
                    <SignedOut>
                        <SignInButton>
                            <Button className="bg-white rounded-full shadow-md cursor-pointer">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    {/* Show the user button when the user is signed in */}
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMainIdentifier: "font-semibold",
                                },
                            }} />
                    </SignedIn>
                </div>
            </nav>

        </header>
    );
};

export default Header;
