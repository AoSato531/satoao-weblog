import { Inter } from "next/font/google";
import React, { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Component({ children }: Props) {
  return (
    <div className="bg-white lg:w-blog-box w-blog-box-sp flex flex-row lg:m-8 lg:p-8 m-4 p-4 lg:text-base text-xs ">
      <div className="break-words w-blog-box-text">
        {children}
      </div>
    </div>
  );
}

type Props = {
  children : ReactNode,
}
