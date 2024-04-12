import Header from "@/components/Header";
import Linkbox from "@/components/LinkBox";
import BreadCrumb from "@/components/Breadcrumb";
import ContentBlock from "@/components/ContentBlock";
import CategoryBlock from "@/components/CategoryBlock";
import BackPage from "@/components/BackPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "ゲーム"

export default function Page() {
  return (
    <main>
      <Header />
      <BreadCrumb text1={categoty_title} url1="/other"/>
      <ContentBlock>
        <CategoryBlock categoty_title={categoty_title}>
          ゲームに関することをつづっています。
        </CategoryBlock>
        <div className="grid grid-cols-2">
        </div>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
