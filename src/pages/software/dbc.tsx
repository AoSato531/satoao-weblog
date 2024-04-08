import Image from "next/image";
import Header from "@/components/parts/Header";
import BreadCrumb from "@/components/parts/Breadcrumb";
import SectionBlock from "@/components/parts/SectionBlock";
import SubSectionBlock from "@/components/parts/SubSectionBlock";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const title = "自己紹介";

export default function Home() {
  return (
    <main className="h-screen bg-orange-content">
      <div className="bg-orange w-screen flex flex-col items-center ">
        <div className="text-3xl text-yellow-800 p-2">
          DDR BPM Calculator
        </div>
        <div className="bg-orange-content w-screen h-auto items-center ">
          <div className="text-xs flex-col h-auto p-2 text-center ">
            DDRでハイスピ計算がめんどいときにつかいます<br />
            ゲーセンで開くこと前提なので<br />
            スマホ（iPhoneSE）のレイアウトにあわせています<br />
          </div>
          <div className="text-xs flex-col h-auto p-2 text-center ">
            <input type="text" value="150" disabled className="w-32 m-4 text-xl text-center "/>
          </div>
          <div className="grid grid-cols-4 gap-1 place-items-center">
            <input type="button" value="+10" disabled className="text-center w-16 text-xl border-2"/>
            <input type="button" value="+1" disabled className="text-center w-16 text-xl border-2"/>
            <input type="button" value="-1" disabled className="text-center w-16 text-xl border-2"/>
            <input type="button" value="-10" disabled className="text-center w-16 text-xl border-2"/>
          </div>
          <div className="grid grid-cols-4 gap-5 p-4">
            <div className="flex items-center"><div className="left text-xs">0.25:</div><div className="block ml-auto font-bold">37</div></div>
            <div className="flex items-center"><div className="left text-xs">0.50:</div><div className="block ml-auto font-bold">75</div></div>
            <div className="flex items-center"><div className="left text-xs">0.75:</div><div className="block ml-auto font-bold">112</div></div>
            <div className="flex items-center"><div className="left text-xs">1.00:</div><div className="block ml-auto font-bold">150</div></div>
            <div className="flex items-center"><div className="left text-xs">1.25:</div><div className="block ml-auto font-bold">187</div></div>
            <div className="flex items-center"><div className="left text-xs">1.50:</div><div className="block ml-auto font-bold">225</div></div>
            <div className="flex items-center"><div className="left text-xs">1.75:</div><div className="block ml-auto font-bold">262</div></div>
            <div className="flex items-center"><div className="left text-xs">2.00:</div><div className="block ml-auto font-bold">300</div></div>
            <div className="flex items-center"><div className="left text-xs">2.25:</div><div className="block ml-auto font-bold">337</div></div>
            <div className="flex items-center"><div className="left text-xs">2.50:</div><div className="block ml-auto font-bold">375</div></div>
            <div className="flex items-center"><div className="left text-xs">2.75:</div><div className="block ml-auto font-bold">412</div></div>
            <div className="flex items-center"><div className="left text-xs">3.00:</div><div className="block ml-auto font-bold">450</div></div>
            <div className="flex items-center"><div className="left text-xs">3.25:</div><div className="block ml-auto font-bold">487</div></div>
            <div className="flex items-center"><div className="left text-xs">3.50:</div><div className="block ml-auto font-bold">525</div></div>
            <div className="flex items-center"><div className="left text-xs">3.75:</div><div className="block ml-auto font-bold">567</div></div>
            <div className="flex items-center"><div className="left text-xs">4.00:</div><div className="block ml-auto font-bold">600</div></div>
            <div className="flex items-center"><div className="left text-xs">4.50:</div><div className="block ml-auto font-bold">675</div></div>
            <div className="flex items-center"><div className="left text-xs">5.00:</div><div className="block ml-auto font-bold">750</div></div>
            <div className="flex items-center"><div className="left text-xs">5.50:</div><div className="block ml-auto font-bold">825</div></div>
            <div className="flex items-center"><div className="left text-xs">6.00:</div><div className="block ml-auto font-bold">900</div></div>
            <div className="flex items-center"><div className="left text-xs">6.50:</div><div className="block ml-auto font-bold">975</div></div>
            <div className="flex items-center"><div className="left text-xs">7.00:</div><div className="block ml-auto font-bold">1050</div></div>
            <div className="flex items-center"><div className="left text-xs">7.50:</div><div className="block ml-auto font-bold">1125</div></div>
            <div className="flex items-center"><div className="left text-xs">8.00:</div><div className="block ml-auto font-bold">1200</div></div>
          </div>
        </div>
      </div>
    </main>
  );
}
