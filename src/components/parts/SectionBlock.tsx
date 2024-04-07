import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header({ sectionText }: Props) {
  return (
    <main>
      <div className="w-blog-box bg-blue-500 font-medium h-12 text-white px-8 mb-6 text-lg relative right-[2rem] items-center flex flex-wrap relative">
        {sectionText}
        <div className="items-end w-8 h-12 bg-red-200 absolute right-0" />
      </div>
    </main>
  );
}

type Props = {
  sectionText: string,
}
