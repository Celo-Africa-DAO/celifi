import Image from "next/image";
import { Inter,Noto_Sans } from "next/font/google";
import { CommandDemo } from "@/components/pages/LandingPage";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main
      className="h-full w-full"
    >
      <CommandDemo/>
      {/* <div className="flex justify-center items-center text-Celifi-Yellow"><h1>HELLO THERE WELCOME TO CELIFI</h1></div>
      */}
    </main>
  );
}
