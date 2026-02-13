import { Inter } from "next/font/google";
// import "./globals.css";
import Header from "@/components/header";
// import { ClerkProvider } from "@clerk/nextjs";
// import { light } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EasyMaid - Cleaning Services",
  description: "Maid Services Wbsite",
};

export default function RootLayout({ children }) {
  return (
    
      <>{/*header*/}
      <Header />


      <main className="min-h-screen">{children}</main>

      {/*footer*/}

      <footer className="bg-black/7 py-12">
        <div className="container mx-auto px-4 text-center text-slate-900">
          <p>Made with ❤️ by Kaushal Sikriwal</p>
        </div>
      </footer></>
          

        
    
  );
}
