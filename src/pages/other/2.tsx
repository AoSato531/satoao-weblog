import Image from "next/image";
import Header from "@/components/parts/Header";
import BreadCrumb from "@/components/parts/Breadcrumb";
import SectionBlock from "@/components/parts/SectionBlock";
import ContentBlock from "@/components/parts/ContentBlock";
import BlogTitleBlock from "@/components/parts/BlogTitleBlock";
import BlogTextBlock from "@/components/parts/BlogTextBlock";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const title = "このサイトについて";
const date = "2024/04/07";

export default function Home() {
  return (
    <main>
      <Header />
      <BreadCrumb text1="雑記" url1="./" text2={title} url2="./2"/>
      <ContentBlock>
        <BlogTitleBlock title={title} date={date} />
        <BlogTextBlock>
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
          </BlogTextBlock>
        <div className="flex flex-wrap m-8 underline">
          <Link href={"./"}>もどる</Link>
        </div>
      </ContentBlock>   
    </main>
  );
}
