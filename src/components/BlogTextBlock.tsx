import { Inter } from "next/font/google";
import React, { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Component({ children }: Props) {
  return (
    <div className="bg-white w-blog-box flex flex-row m-8 p-8 ">
      <div className="break-words w-blog-box-text">
        {children}
      </div>
    </div>
  );
}

type Props = {
  children : ReactNode,
}
