import { Inter } from "next/font/google";
import React, { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Component({ title, date }: Props) {
  return (
    <div>
      <div className="text-3xl flex-col font-bold h-auto p-8">
        {title}
      </div>
      <div className="text-xm flex-col h-auto text-center">
        {date}
      </div>
    </div>
  );
}

type Props = {
  title : string,
  date: string,
}
