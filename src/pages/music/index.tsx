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

const categoty_title = "音楽"

export default function Home() {
  return (
    <main>
      <Header />
      <BreadCrumb text1={categoty_title} url1="/other"/>
      <ContentBlock>
        <CategoryBlock categoty_title={categoty_title}>
          音楽に関することをつづっています。
        </CategoryBlock>
        <div className="grid grid-cols-2">
          <Linkbox message="好きな電子音楽" url="/music/1" date="2024/04/11" />
        </div>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
