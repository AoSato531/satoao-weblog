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
      title="[MySQL]数字文字列を正しくソートする"
      date="2024/05/21"
      category="技術メモ"
      blogNo="3"
    >
      MySQLで数字文字列を数値順に正しくソートする方法のメモです。<br/>
      <br/>
      <SectionBlock sectionText="やり方" />
      例として、連番IDとアルファベット文字を格納するようなテーブルを作成します。<br/>
      id列に連番を、value列に各アルファベット文字が順番になるようにレコードを追加します。<br/>
      <br/>
      <CodeBlock>
        mysql&gt; CREATE TABLE alphabet (id varchar(2) NOT NULL, value char(1) NOT NULL, PRIMARY KEY(id));<br/>
        Query OK, 0 rows affected (0.10 sec)<br/>
        mysql&gt; <br/>
        mysql&gt; insert into alphabet values<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;1&apos;,&apos;A&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;2&apos;,&apos;B&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;3&apos;,&apos;C&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;4&apos;,&apos;D&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;5&apos;,&apos;E&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;6&apos;,&apos;F&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;7&apos;,&apos;G&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;8&apos;,&apos;H&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;9&apos;,&apos;I&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;10&apos;,&apos;J&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;11&apos;,&apos;K&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;12&apos;,&apos;L&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;13&apos;,&apos;M&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;14&apos;,&apos;N&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;15&apos;,&apos;O&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;16&apos;,&apos;P&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;17&apos;,&apos;Q&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;18&apos;,&apos;R&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;19&apos;,&apos;S&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;20&apos;,&apos;T&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;21&apos;,&apos;U&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;22&apos;,&apos;V&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;23&apos;,&apos;W&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;24&apos;,&apos;X&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;25&apos;,&apos;Y&apos;),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-&gt; (&apos;26&apos;,&apos;Z&apos;);<br/>
        Query OK, 26 rows affected (0.04 sec)<br/>
        Records: 26  Duplicates: 0  Warnings: 0<br/>
      </CodeBlock>
      <br/>
      1〜26までの連番とアルファベットの各文字が順番に紐づいたレコードが作成されました。<br/>
      これを<code className="bg-gray-100">ORDER BY</code>句でソートして全件取得します。<br/>
      <br/>
      <CodeBlock>
        mysql&gt; SELECT * FROM alphabet OEDER BY id;<br/>
        +----+-------+<br/>
        | id | value |<br/>
        +----+-------+<br/>
        | 1  | A     |<br/>
        | 10 | J     |<br/>
        | 11 | K     |<br/>
        | 12 | L     |<br/>
        | 13 | M     |<br/>
        | 14 | N     |<br/>
        | 15 | O     |<br/>
        | 16 | P     |<br/>
        | 17 | Q     |<br/>
        | 18 | R     |<br/>
        | 19 | S     |<br/>
        | 2  | B     |<br/>
        | 20 | T     |<br/>
        | 21 | U     |<br/>
        | 22 | V     |<br/>
        | 23 | W     |<br/>
        | 24 | X     |<br/>
        | 25 | Y     |<br/>
        | 26 | Z     |<br/>
        | 3  | C     |<br/>
        | 4  | D     |<br/>
        | 5  | E     |<br/>
        | 6  | F     |<br/>
        | 7  | G     |<br/>
        | 8  | H     |<br/>
        | 9  | I     |<br/>
        +----+-------+<br/>
        26 rows in set (0.00 sec)<br/>
      </CodeBlock>
      <br/>
      なんか思ったとおりの順番にソートされませんでした。<br/>
      <br/>
      id列のデータ型を文字列で定義してしまったので、文字コードに則ってソートされてしまいました。<br/>
      なので、数値に変換した上でソートしなければいけません。<br/>
      <br/>
      <code className="bg-gray-100">CAST</code>関数を利用して、文字列で定義したid列を整数値に変換して、再び<code className="bg-gray-100">ORDER BY</code>句でソートします。<br/>
      <br/>
      <CodeBlock>
        mysql&gt; SELECT * FROM alphabet OEDER BY CAST(id as signed);<br/>
        +----+-------+<br/>
        | id | value |<br/>
        +----+-------+<br/>
        | 1  | A     |<br/>
        | 2  | B     |<br/>
        | 3  | C     |<br/>
        | 4  | D     |<br/>
        | 5  | E     |<br/>
        | 6  | F     |<br/>
        | 7  | G     |<br/>
        | 8  | H     |<br/>
        | 9  | I     |<br/>
        | 10 | J     |<br/>
        | 11 | K     |<br/>
        | 12 | L     |<br/>
        | 13 | M     |<br/>
        | 14 | N     |<br/>
        | 15 | O     |<br/>
        | 16 | P     |<br/>
        | 17 | Q     |<br/>
        | 18 | R     |<br/>
        | 19 | S     |<br/>
        | 20 | T     |<br/>
        | 21 | U     |<br/>
        | 22 | V     |<br/>
        | 23 | W     |<br/>
        | 24 | X     |<br/>
        | 25 | Y     |<br/>
        | 26 | Z     |<br/>
        +----+-------+<br/>
        26 rows in set (0.04 sec)<br/>
      </CodeBlock>
      <br/>
      順番通りにソートできました。<br/>
      <br/>
      <SectionBlock sectionText="さいごに" />
      文字列から数値に変換できるから問題ないと思うかもしれないけど、そもそも連番で採番するような列は数値型で定義しましょう。<br/>
      本来であれば、設計段階でしっかりと運用値に合わせた型定義をして、こんなことが起きないようにするべきです。<br/>
      数値型であれば<code className="bg-gray-100">AUTO_INCREMENT</code>属性を付与することで連番を自動で採番もできます。<br/>
      <br/>
      DB設計はしっかりやりましょう。<br/>
      <br/>
      <SectionBlock sectionText="参考サイト" />
      <Link className="underline" target="_blank" href={"https://dev.mysql.com/doc/refman/8.0/ja/cast-functions.html"}>https://dev.mysql.com/doc/refman/8.0/ja/cast-functions.html</Link><br/>
    </BlogPage>
  );
}
