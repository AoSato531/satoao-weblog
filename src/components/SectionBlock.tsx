import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Component({ sectionText }: Props) {
  return (
    <main>
      <div className="lg:w-blog-box w-blog-box-sp bg-blue-500 font-medium lg:h-12 h-9 text-white lg:px-8 px-4 lg:mb-6 mb-4 lg:text-lg text-sm relative lg:right-[2rem] right-[1rem] items-center flex flex-wrap relative">
        {sectionText}
        <div className="items-end w-8 lg:h-12 h-9 bg-red-200 absolute right-0" />
      </div>
    </main>
  );
}

type Props = {
  sectionText: string,
}
