import Header from "@/components/Header";
import Linkbox from "@/components/LinkBox";
import BreadCrumb from "@/components/Breadcrumb";
import BackPage from "@/components/BackPage";
import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "つくったもの"

export default function Page() {
  return (
    <main >
      <Head>
        <title>さとあおのつぶやきばしょ</title>
      </Head>
      <Header />
      <BreadCrumb text1={categoty_title} url1="/other"/>
      <div className="bg-orange-content w-screen h-full flex flex-col items-center justify-center ">
        <div className="text-3xl flex-col h-auto p-8">
          {categoty_title}
        </div>
        <div className="text-xl flex-col h-auto p-8 text-center">
          遊びでつくったものを載せていきます。
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
        </div>
        <BackPage/>
      </div>
    </main>
  );
}
