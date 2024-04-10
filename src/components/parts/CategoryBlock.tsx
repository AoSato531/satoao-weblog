import Link from "next/link";

import { Inter } from "next/font/google";
import React, { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Header({ categoty_title, children }: Props) {
  return (
    <div>
      <div className="text-3xl flex-col h-auto p-8 text-center">
        {categoty_title}
      </div>
      <div className="text-xl flex-col h-auto p-8 text-center">
        {children}
      </div>
    </div>
  );
}

type Props = {
  categoty_title? : string,
  children: ReactNode,
}
