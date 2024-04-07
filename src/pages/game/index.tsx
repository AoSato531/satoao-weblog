import Image from "next/image";
import Header from "../../components/Header";
import Linkbox from "@/components/LinkBox";
import BreadCrumb from "@/components/Breadcrumb";
import { Inter } from "next/font/google";
import Link from "next/link";
import { addHookAliases } from "next/dist/server/require-hook";

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "ゲーム"

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
          ゲームに関することをつづっています。
        </div>
        <div className="grid grid-cols-2">
        </div>
        <div className="flex flex-wrap m-8 underline">
          <Link href={"./"}>もどる</Link>
        </div>
      </div>
    </main>
  );
}
