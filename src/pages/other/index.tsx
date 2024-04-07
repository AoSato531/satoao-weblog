import Image from "next/image";
import Header from "@/components/parts/Header";
import Linkbox from "@/components/parts/LinkBox";
import BreadCrumb from "@/components/parts/Breadcrumb";
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

      <div className="bg-orange-content w-screen h-full flex flex-col items-center justify-center ">
        <div className="text-3xl flex-col h-auto p-8">
          {categoty_title}
        </div>
        <div className="text-xl flex-col h-auto p-8 text-center">
          どのカテゴリにも属さない雑記をつづっています。<br />
          自己紹介やこのウェブサイトの説明もここにカテゴライズされます。
        </div>
        <div className="grid grid-cols-2">
          <Linkbox message="自己紹介" url="/other/1" date="2024/04/07" />
          <Linkbox message="このサイトについて" url="/other/2" date="2024/04/07" />
        </div>
        <div className="flex flex-wrap m-8 underline">
          <Link href={"./"}>もどる</Link>
        </div>
      </div>
    </main>
  );
}
