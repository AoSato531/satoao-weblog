import Image from "next/image";
import Header from "@/components/Header";
import BreadCrumb from "@/components/Breadcrumb";
import SectionBlock from "@/components/SectionBlock";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const title = "このサイトについて";

export default function Home() {
  return (
    <main>
      <Header />
      <BreadCrumb text1="雑記" url1="./" text2={title} url2="./2"/>
      <div className="bg-orange-content w-screen h-full flex flex-col items-center justify-center ">
        <div className="text-3xl flex-col font-bold h-auto p-8">
        {title}
        </div>
        <div className="text-xm flex-col h-auto text-center">
          2024/04/07<br />
        </div>
        <div className="bg-white w-blog-box flex flex-row m-8 p-8 ">
          <div className="break-words w-blog-box-text">
            <SectionBlock sectionText="このサイトってなに？" />
            さとうがNext.js+tailwindのお勉強をするために制作したサイトです。 <br />
            ブログ的になにかてきとうに文章をつらつらと貯めていきます。 <br />
            <br />
            内容としては主に趣味のことや技術のことがメインになります。 <br />
            <br />
            <SectionBlock sectionText="ドメインについて" />
            昔推していた某アイドルグループの頭文字とメンバーの頭文字で構成されています。 <br />
            <br />
            <SectionBlock sectionText="カラーリングについて" />
            オレンジと青とピンクを基調に制作しています。 <br />
            前述した某アイドルグループのそれぞれのメンバーカラーから着想を得ています。 <br />
            <br />
            オレンジのメンバーをとくに推していたため、オレンジをメインカラーとして、 <br />
            他メンバーのカラーである青とピンクをアクセントにしています。 <br />
          </div>
        </div>
        <div className="flex flex-wrap m-8 underline">
          <Link href={"./"}>もどる</Link>
        </div>
      </div>
    </main>
  );
}
