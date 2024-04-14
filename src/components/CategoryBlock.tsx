import { Inter } from "next/font/google";
import React, { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Component({ categoty_title, children }: Props) {
  return (
    <div>
      <div className="lg:text-3xl text-xl flex-col h-auto lg:p-8 p-4 text-center">
        {categoty_title}
      </div>
      <div className="lg:text-xl text-sm flex-col h-auto lg:p-8 p-4 text-center">
        {children}
      </div>
    </div>
  );
}

type Props = {
  categoty_title? : string,
  children: ReactNode,
}
