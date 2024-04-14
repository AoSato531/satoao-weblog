import Header from "@/components/Header";
import Linkbox from "@/components/LinkBox";
import BreadCrumb from "@/components/Breadcrumb";
import ContentBlock from "@/components/ContentBlock";
import CategoryBlock from "@/components/CategoryBlock";
import BackPage from "@/components/BackPage";
import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "ゲーム"

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
          ゲームに関することをつづっています。
        </CategoryBlock>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Linkbox message="[ぷよぷよ]GTRはむずかしい" url="/game/1" date="2024/04/14" />
        </div>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
