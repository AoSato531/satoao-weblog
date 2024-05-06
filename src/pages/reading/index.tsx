import Header from "@/components/Header";
import Linkbox from "@/components/LinkBox";
import BreadCrumb from "@/components/Breadcrumb";
import ContentBlock from "@/components/ContentBlock";
import CategoryBlock from "@/components/CategoryBlock";
import BackPage from "@/components/BackPage";
import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "読書メモ"

export default function Page() {
  return (
    <main>
      <Head>
        <title>さとあおのつぶやきばしょ | {categoty_title}</title>
      </Head>
      <Header />
      <BreadCrumb text1={categoty_title} url1="/other"/>
      <ContentBlock>
        <CategoryBlock categoty_title={categoty_title}>
          読書メモをつづっています。<br/>
          概要の要約も書いていることもあれば、感想だけの場合もあります。
        </CategoryBlock>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Linkbox message="リーダブルコード" url="/reading/1" date="2024/05/06" />
        </div>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
