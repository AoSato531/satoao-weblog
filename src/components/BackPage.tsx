import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Component() {
  return (
    <div className="flex flex-wrap m-8 underline">
      <Link href={"./"}>もどる</Link>
    </div>
  );
}

