import { Inter } from "next/font/google";
import React, { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Component({ title, date }: Props) {
  return (
    <div>
      <div className="lg:text-3xl text-base flex-col font-bold h-auto lg:p-8 p-4">
        {title}
      </div>
      <div className="lg:text-base text-xs flex-col h-auto text-center">
        {date}
      </div>
    </div>
  );
}

type Props = {
  title : string,
  date: string,
}
