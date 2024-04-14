import Header from "@/components/Header";
import Linkbox from "@/components/LinkBox";
import BreadCrumb from "@/components/Breadcrumb";
import ContentBlock from "@/components/ContentBlock";
import CategoryBlock from "@/components/CategoryBlock";
import BackPage from "@/components/BackPage";
import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "雑記"

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
          どのカテゴリにも属さない雑記をつづっています。<br/>
          自己紹介やこのウェブサイトの説明もここにカテゴライズされます。
        </CategoryBlock>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Linkbox message="自己紹介" url="/other/1" date="2024/04/07" />
          <Linkbox message="このサイトについて" url="/other/2" date="2024/04/07" />
        </div>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
