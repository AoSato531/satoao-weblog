import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header({ sectionText }: Props) {
  return (
    <main>
      <div className="w-blog-box border-b border-t border-b border-blue-500 font-medium h-8 text-blue-500 px-8 text-base mb-6 relative right-[2rem] items-center flex flex-wrap relative">
        {sectionText}
        <div className="items-end w-8 h-8 border-t border-b border-red-200 absolute right-0" />
      </div>
    </main>
  );
}

type Props = {
  sectionText: string,
}
