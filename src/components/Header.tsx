import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Component() {
  return (
    <main>
      <div className="bg-orange w-screen lg:h-32 h-16 flex items-center justify-center ">
        <div className="lg:text-5xl text-yellow-800 font-bold text-2xl">
          <Link href="/">さとあおのつぶやきばしょ</Link>
        </div>
      </div>
    </main>
  );
}
