import Header from "../components/Header";
import Linkbox from "@/components/LinkBox";
import BreadCrumb from "@/components/Breadcrumb";
import ContentBlock from "@/components/ContentBlock";
import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main>
      <Head>
        <title>さとあおのつぶやきばしょ</title>
      </Head>
      <Header />
      <BreadCrumb/>
      <ContentBlock>
        <div className="lg:text-xl text-sm flex-col h-auto lg:p-8 lg:pt-16 p-4 pt-8 text-center">
          さとあお が すきに つぶやく ばしょ です
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Linkbox message="技術メモ" url="/tech" date="最終更新:2024/04/12"/>
          <Linkbox message="音楽" url="/music" date="最終更新:2024/04/11"/>
          <Linkbox message="ゲーム" url="/game" date="最終更新:2024/04/14"/>
          <Linkbox message="雑記" url="/other" date="最終更新:2024/04/07"/>
          <Linkbox message="つくったもの" url="/software" date="まだなにもないよ"/>
        </div>
      </ContentBlock>
    </main>
  );
}
