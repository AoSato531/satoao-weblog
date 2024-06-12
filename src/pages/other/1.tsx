import BlogPage from "@/components/BlogPage";
import SectionBlock from "@/components/SectionBlock";
import SubSectionBlock from "@/components/SubSectionBlock";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <BlogPage
      title="自己紹介"
      date="2024/04/07"
      category="雑記"
      blogNo="1"
    >
      <SectionBlock sectionText="基本情報" />
      さとうあお<br/>
      1990年生まれ<br/>
      埼玉県出身<br/>
      <br/>
      <SectionBlock sectionText="経歴" />
      工学院大学工学部を5年かけて（笑）2014年卒業。<br/>
      卒業後はシステムエンジニアとして2社のSIer企業に勤める。 <br/>
      2社目を退職後、半年間のニート生活。 <br/>
      2社目でお世話になった先輩と大学の同期の誘いで2021年に<Link className="underline" target="_blank" href={"https://www.coc-labo.co.jp/"}>コクラボ株式会社</Link>に入社。 <br/>
      <br/>
      <SectionBlock sectionText="実務経験" />
      主にバックエンドエンジニアとして業務をしてきました。<br/>
      フロントエンドも少しだけできます。<br/>
      <br/>
      <SubSectionBlock sectionText="言語" />
      C++, Java, PHP, JavaScript, TypeScript, Python, HTML+CSS <br/>
      <br/>
      <SubSectionBlock sectionText="フレームワーク" />
      Nablarch, Intra-mart, vue.js, Next.js<br/>
      <br/>
      <SubSectionBlock sectionText="データベース" />
      PostgreSQL, Oracle Database, MySQL<br/>
      <br/>
      <SubSectionBlock sectionText="その他" />
      AWS(lambda, RDS, EC2, S3, DynamoDB, SQS), スクラム（アジャイル）開発<br/>
      <br/>
      <SectionBlock sectionText="趣味" />
      <SubSectionBlock sectionText="音楽" />
      中1でL&apos;Arc～en～Cielを知ったのをきっかけに音楽を聴き始める。<br/>
      中学では流行りの音楽も聴きつつ、90年代J-POPにハマる。<br/>
      ドラム歴は通算5年（15歳〜20歳まで）。高校の軽音楽部で活動し、卒業後は埼玉でバンド活動。<br/>
      大学以降は電子音楽にもハマり、20代半ばごろにDJをかじる。<br/>
      <br/>
      好きなアーティスト：<br/>
      L&apos;Arc～en～Ciel, moumoon, Cymbals, JUDY AND MARY, YUKI, LINDBERG, Scandal, BUMP OF CHICKEN, <br/>
      DIR EN GREY, LOVE PSYCHEDELICO, 小室哲哉, Squarepusher, slipknot, Dream Theater, 神保彰　...etc<br/>
      <br/>
      <SubSectionBlock sectionText="ゲーム" />
      ポケモンと音楽ゲーム（beatmania IIDX, DrumMania, Dance Dance Revolution）とぷよぷよを好む。<br/>
      ガチ寄りだけどめちゃくちゃ上手いわけではない、けど結構上手いくらいの腕前。<br/>
      <br/>
      <SubSectionBlock sectionText="雑学" />
      雑学を覚えるのが好き。とくに数学や日本語や漢字の雑学が好き。<br/>
      クイズをやるわけではないが、機会があればクイズをやってみたい。<br/>
      クイズ系のYouTubeを観るのはかなり好き。<br/>
      <br/>
      <SectionBlock sectionText="SNSなどリンク" />
      <SubSectionBlock sectionText="X（旧Twitter）" />
      <Link className="underline" href={"https://twitter.com/ogc3_nyh"}>@ogc3_nyh</Link> <br/>
    </BlogPage>
  );
}
