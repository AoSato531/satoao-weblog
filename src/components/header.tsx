import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <main>
      <div className="bg-orange w-screen h-32 flex items-center justify-center ">
        <div className="text-5xl text-yellow-800">
          <Link href="/">さとあおのつぶやきばしょ</Link>
        </div>
      </div>
    </main>
  );
}
