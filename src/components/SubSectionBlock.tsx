import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Component({ sectionText }: Props) {
  return (
    <main>
      <div className="lg:w-blog-box w-blog-box-sp border-b border-t border-b border-blue-500 font-medium h-8 text-blue-500 lg:px-8 px-4 lg:text-base text-sm lg:mb-6 mb-4 relative lg:right-[2rem] right-[1rem] items-center flex flex-wrap relative">
        {sectionText}
        <div className="items-end w-8 h-8 border-t border-b border-red-200 absolute right-0" />
      </div>
    </main>
  );
}

type Props = {
  sectionText: string,
}
