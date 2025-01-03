import Header from "@/components/Header";
import Linkbox from "@/components/LinkBox";
import BreadCrumb from "@/components/Breadcrumb";
import ContentBlock from "@/components/ContentBlock";
import CategoryBlock from "@/components/CategoryBlock";
import BackPage from "@/components/BackPage";
import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "音楽"

export default function Page() {
  return (
    <main>
      <Head>
        <title>さとあおのつぶやきばしょ</title>
      </Head>
      <Header />
      <BreadCrumb text1={categoty_title} url1="/other"/>
      <ContentBlock>
        <CategoryBlock categoty_title={categoty_title}>
          音楽に関することをつづっています。
        </CategoryBlock>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Linkbox message="2024年にはじめて行ったアーティストのライブ" url="/music/4" date="2024/12/29" />
          <Linkbox message="1998年J-POPがわたしのルーツ" url="/music/3" date="2024/06/23" />
          <Linkbox message="日本人アーティストの好きなインスト楽曲" url="/music/2" date="2024/05/12" />
          <Linkbox message="好きな電子音楽" url="/music/1" date="2024/04/11" />
        </div>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
