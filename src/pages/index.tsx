import Image from "next/image";
import Header from "../components/Header";
import Linkbox from "@/components/LinkBox";
import BreadCrumb from "@/components/Breadcrumb";
import ContentBlock from "@/components/ContentBlock";
import CategoryBlock from "@/components/CategoryBlock";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main>
      <Header />
      <BreadCrumb/>
      <ContentBlock>
        <div className="text-xl flex-col h-auto p-8 pt-16 text-center">
          さとあお が すきに つぶやく ばしょ です
        </div>
        <div className="grid grid-cols-2">
          <Linkbox message="技術メモ" url="/tech" date="Last Update:2024/04/09"/>
          <Linkbox message="音楽" url="/music" date="Last Update:2024/04/11"/>
          <Linkbox message="ゲーム" url="/game"/>
          <Linkbox message="雑記" url="/other" date="Last Update:2024/04/07"/>
          <Linkbox message="つくったもの" url="/software"/>
        </div>
      </ContentBlock>
    </main>
  );
}
