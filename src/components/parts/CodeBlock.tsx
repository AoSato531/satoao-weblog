import Link from "next/link";

import { Inter } from "next/font/google";
import React, { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Header({ children }: Props) {
  return (
    <pre className="bg-gray-100 whitespace-pre-wrap w-blog-box-text p-4">
      <code>
        {children}
      </code>
    </pre>
  );
}

type Props = {
  children : ReactNode,
}
