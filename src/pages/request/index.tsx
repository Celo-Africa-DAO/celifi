import RequestFeature from "@/components/token/RequestFeature";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`h-full w-full ${inter.className} p-8`}>
      <RequestFeature/>
    </main>
  );
}
