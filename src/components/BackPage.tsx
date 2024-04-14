import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Component() {
  return (
    <div className="flex flex-wrap lg:m-8 m-4 underline lg:text-base text-xs">
      <Link href={"./"}>もどる</Link>
    </div>
  );
}

