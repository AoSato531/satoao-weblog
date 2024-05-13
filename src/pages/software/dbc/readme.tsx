import Header from "@/components/Header";
import BreadCrumb from "@/components/Breadcrumb";
import ContentBlock from "@/components/ContentBlock";
import BlogTextBlock from "@/components/BlogTextBlock";
import BackPage from "@/components/BackPage";
import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

const categoty_title = "つくったもの"
const software_title = "DDR BPM Calculator"

export default function Page() {
  return (
    <main>
      <Head>
        <title>さとあおのつぶやきばしょ | {software_title}</title>
      </Head>
      <Header />
      <BreadCrumb
        text1={categoty_title} url1="/software"
        text2={software_title} url2="/software/dbc"
        text3="Read Me" url3="/software/dbc/readme"
      />
      <ContentBlock>
        <div className="lg:text-3xl text-xl flex-col h-auto lg:p-8 p-4 text-center">
          {software_title}
        </div>
        <div className="lg:text-base text-xs flex-col h-auto text-center">
        Read Me
        </div>
        <BlogTextBlock>
          DDR（Dance Dance Revolution）でハイスピ計算を一括でしてくれるウェブアプリです。<br/>
          ボタン操作で曲のBPMを変更することで、自動でハイスピ後のBPMを計算します。<br/>
          <br/>
          曲のBPMは0〜999の範囲で変更できます。直接入力はできません。<br/>
          BPM操作ボタンは、曲のBPMに対してそれぞれ対応した数値の加算減算を行います。<br/>
          ハイスピ結果は整数になるように切り捨てています。<br/>
          <br/>
          ソフランには対応していません。<br/>
          どのBPMに合わせるかは曲ごとに覚えて自力で対応してください。<br/>
          <br/>
          曲のBPMは記憶されません。<br/>
          リロードしたらデフォルト（150）に戻ります。<br/>
          <br/>
          ゲーセンで開くことが前提なので、スマホ（iPhoneSE）のレイアウトにあわせています。<br/>
          PCで開くことは基本的に想定していません。<br/>
        </BlogTextBlock>
        <BackPage/>
      </ContentBlock>
    </main>
  );
}
