import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <main>
      <div className="bg-orange-content w-screen h-full flex items-center justify-center ">
        <div className="text-xl h-auto p-8">
          さとあお が すきに つぶやく ばしょ です<br/>
          
        </div>
      </div>
    </main>
  );
}
