import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Component({ message , url, date }: Props) {
  return (
    <main>
      <Link href={url} className="bg-white w-linkbox h-24 group hover:bg-blue-500 items-center flex justify-content m-linkbox-margin">
        <div className="items-start w-linkbox-accent bg-blue-500 group-hover:bg-white h-24" />
        <div className="items-start w-linkbox h-24 group-hover:bg-blue-500 flex items-center justify-center relative">
          <div className="text-xl text-blue-500 group-hover:text-white">
            {message}
          </div>
          <div className="text-sm text-blue-500 group-hover:text-white absolute bottom-0 right-0">
            {date}
          </div>
        </div>
        <div className="items-end w-linkbox-accent bg-red-200 h-24" />
      </Link>
    </main>
  );
}

type Props = {
  message: string,
  url: string,
  date?: string,
}
