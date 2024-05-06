import { Inter } from "next/font/google";
import React, { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Component({ children }: Props) {
  return (
    <pre className="bg-gray-100 w-blog-box-text p-4 lg:text-base text:xs overflow-x-auto">
      <code>
        {children}
      </code>
    </pre>
  );
}

type Props = {
  children : ReactNode,
}
