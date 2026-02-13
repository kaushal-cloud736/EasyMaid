import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";


const Header = () => {
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
