import Header from "@/components/Header";
import Link from "next/link";
import BreadCrumb from "@/components/Breadcrumb";
import ContentBlock from "@/components/ContentBlock";
import BackPage from "@/components/BackPage";
import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "つくったもの"
const software_title = "DDR BPM Calculator"

// ボタンクリックイベント
const handleClick = (e:any) => {
  // 要素を取得
  let bpmElement = document.getElementById("bpm") as HTMLInputElement;

  // 曲のBPMを変更
  let bpm = parseInt(bpmElement.value);
  bpm = bpm + parseInt(e.target.value);

  // 0~999の範囲を超えたら補正
  if(bpm > 999){
    bpm = 999;
  }else if(bpm < 0){
    bpm = 0;
  }
  bpmElement.value = String(bpm);

  // ハイスピ計算
  hiSpeedCulc(bpm, 0.25, "025");
  hiSpeedCulc(bpm, 0.50, "050");
  hiSpeedCulc(bpm, 0.75, "075");
  hiSpeedCulc(bpm, 1.00, "100");
  hiSpeedCulc(bpm, 1.25, "125");
  hiSpeedCulc(bpm, 1.50, "150");
  hiSpeedCulc(bpm, 1.75, "175");
  hiSpeedCulc(bpm, 2.00, "200");
  hiSpeedCulc(bpm, 2.25, "225");
  hiSpeedCulc(bpm, 2.50, "250");
  hiSpeedCulc(bpm, 2.75, "275");
  hiSpeedCulc(bpm, 3.00, "300");
  hiSpeedCulc(bpm, 3.25, "325");
  hiSpeedCulc(bpm, 3.50, "350");
  hiSpeedCulc(bpm, 3.75, "375");
  hiSpeedCulc(bpm, 4.00, "400");
  hiSpeedCulc(bpm, 4.50, "450");
  hiSpeedCulc(bpm, 5.00, "500");
  hiSpeedCulc(bpm, 5.50, "550");
  hiSpeedCulc(bpm, 6.00, "600");
  hiSpeedCulc(bpm, 6.50, "650");
  hiSpeedCulc(bpm, 7.00, "700");
  hiSpeedCulc(bpm, 7.50, "750");
  hiSpeedCulc(bpm, 8.00, "800");
}

function hiSpeedCulc (bpm : number ,hiSpeed : number, elementSuffix : String) {
  let hiSpeedBpm = Math.trunc(bpm * hiSpeed);
  let Element = document.getElementById("hi" + elementSuffix) as HTMLInputElement;
  Element.innerHTML = String(hiSpeedBpm);
}

export default function Page() {
  return (
    <main>
      <Head>
        <title>さとあおのつぶやきばしょ | {categoty_title}</title>
      </Head>
      <Header />
      <BreadCrumb
        text1={categoty_title} url1="/software"
        text2={software_title} url2="/software/dbc"
      />
      <ContentBlock>
        <div className="lg:text-3xl text-xl flex-col h-auto lg:p-8 p-4 text-center">
          {software_title}
        </div>
        <div className="flex flex-wrap pb-4 underline lg:text-base text-xs">
          <Link href={"/software/dbc/readme"}>Read Me</Link>
        </div>
        <div className="text-xs text-center pb-2 font-mono">
          曲のBPM<br/>
        </div>
        <div className="text-xs flex-col h-auto pb-4 text-center font-mono">
          <input type="text" value="150" id="bpm" disabled className="w-32 text-xl text-center bg-yellow-50"/>
        </div>
        <div className="text-xs text-center pb-2 font-mono">
          BPM操作<br/>
        </div>
        <div className="grid grid-cols-4 gap-1 place-items-center font-mono">
          <button onClick={handleClick} className="text-center w-16 text-xl bg-yellow-400" value="+10">+10</button>
          <button onClick={handleClick} className="text-center w-16 text-xl bg-yellow-400" value="+1">+1</button>
          <button onClick={handleClick} className="text-center w-16 text-xl bg-yellow-400" value="-1">-1</button>
          <button onClick={handleClick} className="text-center w-16 text-xl bg-yellow-400" value="-10">-10</button>
        </div>
        <div className="text-xs text-center pt-4 pb-2 font-mono">
          ハイスピ結果<br/>
        </div>
        <div className="grid grid-cols-4 gap-2 font-mono">
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">0.25:</div><div className="block ml-auto font-bold w-10 text-right" id="hi025">37</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">0.50:</div><div className="block ml-auto font-bold w-10 text-right" id="hi050">75</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">0.75:</div><div className="block ml-auto font-bold w-10 text-right" id="hi075">112</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">1.00:</div><div className="block ml-auto font-bold w-10 text-right" id="hi100">150</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">1.25:</div><div className="block ml-auto font-bold w-10 text-right" id="hi125">187</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">1.50:</div><div className="block ml-auto font-bold w-10 text-right" id="hi150">225</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">1.75:</div><div className="block ml-auto font-bold w-10 text-right" id="hi175">262</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">2.00:</div><div className="block ml-auto font-bold w-10 text-right" id="hi200">300</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">2.25:</div><div className="block ml-auto font-bold w-10 text-right" id="hi225">337</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">2.50:</div><div className="block ml-auto font-bold w-10 text-right" id="hi250">375</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">2.75:</div><div className="block ml-auto font-bold w-10 text-right" id="hi275">412</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">3.00:</div><div className="block ml-auto font-bold w-10 text-right" id="hi300">450</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">3.25:</div><div className="block ml-auto font-bold w-10 text-right" id="hi325">487</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">3.50:</div><div className="block ml-auto font-bold w-10 text-right" id="hi350">525</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">3.75:</div><div className="block ml-auto font-bold w-10 text-right" id="hi375">562</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">4.00:</div><div className="block ml-auto font-bold w-10 text-right" id="hi400">600</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">4.50:</div><div className="block ml-auto font-bold w-10 text-right" id="hi450">675</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">5.00:</div><div className="block ml-auto font-bold w-10 text-right" id="hi500">750</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">5.50:</div><div className="block ml-auto font-bold w-10 text-right" id="hi550">825</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">6.00:</div><div className="block ml-auto font-bold w-10 text-right" id="hi600">900</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">6.50:</div><div className="block ml-auto font-bold w-10 text-right" id="hi650">975</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">7.00:</div><div className="block ml-auto font-bold w-10 text-right" id="hi700">1050</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">7.50:</div><div className="block ml-auto font-bold w-10 text-right" id="hi750">1125</div></div>
          <div className="flex items-center bg-yellow-50"><div className="left text-xs">8.00:</div><div className="block ml-auto font-bold w-10 text-right" id="hi800">1200</div></div>
        </div>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
