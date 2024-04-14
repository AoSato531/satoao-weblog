import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Component({ message , url, date }: Props) {
  return (
    <main>
      <Link href={url} className="bg-white lg:w-linkbox lg:h-24 h-20 group hover:bg-blue-500 items-center flex justify-content lg:m-linkbox-margin m-linkbox-margin-sp w-linkbox-sp">
        <div className="items-start lg:w-linkbox-accent bg-blue-500 group-hover:bg-white lg:h-24 h-20 w-linkbox-accent-sp" />
        <div className="items-start lg:w-linkbox w-linkbox-sp lg:h-24 h-20 group-hover:bg-blue-500 flex items-center justify-center relative">
          <div className="lg:text-xl text-sm text-blue-500 group-hover:text-white">
            {message}
          </div>
          <div className="lg:text-sm text-xs text-blue-500 group-hover:text-white absolute bottom-0 right-1">
            {date}
          </div>
        </div>
        <div className="items-end lg:w-linkbox-accent bg-red-200 lg:h-24 h-20 w-linkbox-accent-sp" />
      </Link>
    </main>
  );
}

type Props = {
  message: string,
  url: string,
  date?: string,
}
