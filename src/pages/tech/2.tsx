import BlogPage from "@/components/BlogPage";
import SectionBlock from "@/components/SectionBlock";
import SubSectionBlock from "@/components/SubSectionBlock";
import CodeBlock from "@/components/CodeBlock";
import { Inter } from "next/font/google";
import Link from "next/link";
import { YouTubeEmbed } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <BlogPage
      title="[Next.js]YouTube動画の埋め込み"
      date="2024/04/12"
      category="技術メモ"
      blogNo="2"
    >
      Next.jsでYouTube動画の埋め込みをする方法のメモです。<br/>
      <Link className="underline" href={"/music/1"}>こちらの記事</Link>内で実際にYouTube動画の埋め込みを実装しました。<br/>
      <br/>
      <SectionBlock sectionText="やり方" />
      ターミナルで以下のコマンドを実行して、@next/third-partiesをインストール。<br/>
      @next/third-partiesはサードパーティの提供する機能を利用するためのNext.js用ライブラリです。<br/>
      <br/>
      <CodeBlock>
        npm install @next/third-parties@latest next@latest
      </CodeBlock>
      <br/>
      <code className="bg-gray-100">YouTube Embed</code>コンポーネントに埋め込みたい動画のVideo IDを渡す。<br/>
      Video IDは該当動画のURLのクエリパラメータ<code className="bg-gray-100">v=</code>以降の値から取得できます。<br/>
      PCブラウザの場合は、動画プレイヤー上で右クリック→詳細統計情報からも取得可能です。<br/>
      <br/>
      <CodeBlock>
        import &#123; YouTubeEmbed &#125; from &apos;@next/third-parties/google&apos;<br/>
        <br/>
        export default function Page() &#123;<br/>
        &nbsp;&nbsp;return (<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;YouTubeEmbed videoid=&quot;hnGYJVsZlJo&quot;/&gt;<br/>
        &nbsp;&nbsp;);<br/>
        &#125;
      </CodeBlock>
      <br/>
      実装すると下のようにYouTubeの動画が埋め込まれました。あらお手軽。<br/>
      <br/>
      <YouTubeEmbed videoid="hnGYJVsZlJo"/><br/>
      <br/>
      <SectionBlock sectionText="ちなみに" />
      最初は@next/third-partiesを導入せず、<code className="bg-gray-100">&lt;iframe&gt;</code>タグで埋め込みの実装を試みましたが、CORSエラーが発生しました。<br/>
      軽く調べてみると、どうやらCORSエラーを解消するのは難しそうだったので@next/third-partiesを導入しました。<br/>
      <br/>
      結果的にこちらのほうが実装もラクだったので、良かったのかもしれません。<br/>
      <br/>
      <SectionBlock sectionText="参考サイト" />
      <Link className="underline" target="_blank" href={"https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries"}>https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries</Link><br/>
      <Link className="underline" target="_blank" href={"https://qiita.com/g0zarre/items/14b3c8d01f8b63914b4e"}>https://qiita.com/g0zarre/items/14b3c8d01f8b63914b4e</Link><br/>
    </BlogPage>
  );
}
