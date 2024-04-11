import Image from "next/image";
import Header from "@/components/parts/Header";
import Linkbox from "@/components/parts/LinkBox";
import BreadCrumb from "@/components/parts/Breadcrumb";
import ContentBlock from "@/components/parts/ContentBlock";
import CategoryBlock from "@/components/parts/CategoryBlock";
import BackPage from "@/components/parts/BackPage";
import { Inter } from "next/font/google";
import Link from "next/link";
import { addHookAliases } from "next/dist/server/require-hook";

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "技術メモ"

export default function Home() {
  return (
    <main>
      <Header />
      <BreadCrumb text1={categoty_title} url1="/other"/>
      <ContentBlock>
        <CategoryBlock categoty_title={categoty_title}>
          システムエンジニアリングにおける技術のメモをつづっています。<br />
          浅い理解で記載しているので、信憑性は担保できません。ご注意を。
        </CategoryBlock>
        <div className="grid grid-cols-2">
          <Linkbox message="[MySQL]UUIDをバイナリ変換する" url="/tech/1" date="2024/04/09" />
        </div>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
