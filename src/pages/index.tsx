import Image from "next/image";
import Header from "../components/parts/Header";
import Linkbox from "@/components/parts/LinkBox";
import BreadCrumb from "@/components/parts/Breadcrumb";
import ContentBlock from "@/components/parts/ContentBlock";
import CategoryBlock from "@/components/parts/CategoryBlock";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <BreadCrumb/>
      <ContentBlock>
        <CategoryBlock>
        さとあお が すきに つぶやく ばしょ です
        </CategoryBlock>
        <div className="grid grid-cols-2">
          <Linkbox message="技術メモ" url="/tech" date="Last Update:2024/04/09"/>
          <Linkbox message="音楽" url="/music"/>
          <Linkbox message="ゲーム" url="/game"/>
          <Linkbox message="雑記" url="/other" date="Last Update:2024/04/07"/>
          <Linkbox message="つくったもの" url="/software"/>
        </div>
      </ContentBlock>
    </main>
  );
}
