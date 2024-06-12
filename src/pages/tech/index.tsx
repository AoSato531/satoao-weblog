import Header from "@/components/Header";
import Linkbox from "@/components/LinkBox";
import BreadCrumb from "@/components/Breadcrumb";
import ContentBlock from "@/components/ContentBlock";
import CategoryBlock from "@/components/CategoryBlock";
import BackPage from "@/components/BackPage";
import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "技術メモ"

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
          システムエンジニアリングにおける技術のメモをつづっています。<br/>
          浅い理解で記載しているので、信憑性は担保できません。ご注意を。
        </CategoryBlock>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Linkbox message="RESTful APIにおける冪等性について" url="/tech/4" date="2024/06/12" />
          <Linkbox message="[MySQL]数字文字列を正しくソートする" url="/tech/3" date="2024/05/21" />
          <Linkbox message="[Next.js]YouTube動画の埋め込み" url="/tech/2" date="2024/04/12" />
          <Linkbox message="[MySQL]UUIDをバイナリ変換する" url="/tech/1" date="2024/04/09" />
        </div>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
