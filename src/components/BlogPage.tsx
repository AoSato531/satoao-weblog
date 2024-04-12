import Link from "next/link";
import React, { ReactNode } from 'react'

import Header from "@/components/Header";
import ContentBlock from "@/components/ContentBlock";
import BlogTitleBlock from "@/components/BlogTitleBlock";
import BlogTextBlock from "@/components/BlogTextBlock";
import BackPage from "@/components/BackPage";
import BreadCrumb from "@/components/Breadcrumb";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Component({ title, date, category, blogNo, children }: Props) {
  return (
    <main>
      <Header />
      <BreadCrumb text1={category} url1="./" text2={title} url2={"./"+blogNo}/>
      <ContentBlock>
        <BlogTitleBlock title={title} date={date} />
        <BlogTextBlock>
          {children}
        </BlogTextBlock>
        <BackPage/>
      </ContentBlock>  
    </main>
  );
}

type Props = {
  title : string,
  date: string,
  category: string,
  blogNo: string,
  children: ReactNode,
}