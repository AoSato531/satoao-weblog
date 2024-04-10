import Link from "next/link";

import { Inter } from "next/font/google";
import React, { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Header({ children }: Props) {
  return (
    <div className="bg-orange-content w-screen h-full flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

type Props = {
  children: ReactNode,
}
