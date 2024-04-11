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

const categoty_title = "雑記"

export default function Home() {
  return (
    <main>
      <Header />
      <BreadCrumb text1={categoty_title} url1="/other"/>
      <ContentBlock>
        <CategoryBlock categoty_title={categoty_title}>
          どのカテゴリにも属さない雑記をつづっています。<br />
          自己紹介やこのウェブサイトの説明もここにカテゴライズされます。
        </CategoryBlock>
        <div className="grid grid-cols-2">
          <Linkbox message="自己紹介" url="/other/1" date="2024/04/07" />
          <Linkbox message="このサイトについて" url="/other/2" date="2024/04/07" />
        </div>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
