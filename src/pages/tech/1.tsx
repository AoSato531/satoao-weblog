import Image from "next/image";
import Header from "@/components/parts/Header";
import BreadCrumb from "@/components/parts/Breadcrumb";
import SectionBlock from "@/components/parts/SectionBlock";
import SubSectionBlock from "@/components/parts/SubSectionBlock";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const title = "[MySQL]UUIDをバイナリ変換する";

export default function Home() {
  return (
    <main>
      <Header />
      <BreadCrumb text1="技術メモ" url1="./" text2={title} url2="./2"/>
      <div className="bg-orange-content w-screen h-full flex flex-col items-center justify-center ">
        <div className="text-3xl flex-col font-bold h-auto p-8">
        {title}
        </div>
        <div className="text-xm flex-col h-auto text-center">
          2024/04/09<br />
        </div>
        <div className="bg-white w-blog-box flex flex-row m-8 p-8 ">
          <div className="break-words w-blog-box-text">
            MySQLでUUID文字列をバイナリ変換してレコードに格納する方法と、<br />
            逆にレコード取得する際にバイナリをUUID文字列に変換する方法のメモです。<br />
            <br />
            <SectionBlock sectionText="やり方" />
            対象のカラムの型を<code className="bg-gray-100">varbinary(16)</code>で定義。<br />
            INSERTする際に、生成したUUID文字列を<code className="bg-gray-100">UUID_TO_BIN</code>関数を利用してバイナリに変換。<br />
            <br />
            <pre className="bg-gray-100 whitespace-pre-wrap w-blog-box-text p-4">
              <code>
                mysql&gt; CREATE TABLE test (bin varbinary(16) NOT NULL, PRIMARY KEY(bin));<br />
                Query OK, 0 rows affected (0.07 sec)<br />
                mysql&gt; <br />
                mysql&gt; INSERT INTO test VALUES (UUID_TO_BIN(&apos;222F8975-14F8-4D0A-BA2E-86C054BE493C&apos;));<br />
                Query OK, 1 row affected (0.04 sec)<br />
              </code>
            </pre>
            <br />
            SELECTする際に、とくに何も指定していなければバイナリ文字列が取得されるので、<br />
            <code className="bg-gray-100">BIN_TO_UUID</code>関数で該当のカラムをUUID文字列に変換して取得。<br />
            <br />
            <pre className="bg-gray-100 whitespace-pre-wrap w-blog-box-text p-4">
              <code>
                mysql&gt; SELECT * FROM test;<br />
                +------------------------------------+<br />
                | bin                                |<br />
                +------------------------------------+<br />
                | 0x222F897514F84D0ABA2E86C054BE493C |<br />
                +------------------------------------+<br />
                1 row in set (0.02 sec)<br />
                <br />
                mysql&gt; SELECT BIN_TO_UUID(bin) FROM test;<br />
                +--------------------------------------+<br />
                | BIN_TO_UUID(bin)                     |<br />
                +--------------------------------------+<br />
                | 222f8975-14f8-4d0a-ba2e-86c054be493c |<br />
                +--------------------------------------+<br />
                1 row in set (0.01 sec)<br />
              </code>
            </pre>
            <br />
            <SectionBlock sectionText="注意点" />
            <code className="bg-gray-100">UUID_TO_BIN</code>関数と<code className="bg-gray-100">BIN_TO_UUID</code>関数はmysql8からの機能です。<br />
            <br />
            <SectionBlock sectionText="UUIDをバイナリ変換するメリット" />
            <SubSectionBlock sectionText="まずなぜUUIDを使うのか" />
            UUIDをPRIMARY KEYに利用した場合は、連番を使わずともランダムな文字列でほぼ一意なIDを生成できます。<br />
            ※厳密には、2<sup>128</sup>通り（UUIDv4なら2<sup>122</sup>通り）の範囲で生成するので天文学的な確率で衝突はあり得ます<br />
            <br />
            連番IDをURLに表出するケースがある場合は、非公開リソースURLを推測されたり、<br />
            それがユーザIDとなっている場合はおおよその数が推測される可能性があります。<br />
            これはセキュリティ的な観点で避けるべきです。<br />
            <br />
            ランダム文字列であるUUIDを利用することでそのような推測を回避し、セキュリティ性を向上できます。<br />
            <br />
            <SubSectionBlock sectionText="UUIDを利用するデメリット" />
            正直、曖昧な理解ですがざっくりいうと、<br />
            インデックスを連番にするとインデックス検索の効率が良くなり、<br />
            キャッシュの恩恵を受けにくく、ディスクへのI/Oが減ります。<br />
            <br />
            インデックスをUUIDにする場合はその逆で、インデックス検索の効率が落ちるため、ディスクへのI/Oが増えます。<br />
            その結果、パフォーマンスが落ちてしまいます。<br />
            <br />
            <SubSectionBlock sectionText="UUIDをバイナリ変換するメリット" />
            UUIDはそのまま文字列にすると32文字（32byte）ですが、バイナリ変換することで16byteまで容量を削減できます。<br />
            これによりインデックスの保持に必要な容量が減り、パフォーマンスが改善されます。<br />
            <br />
            そのため、UUIDをそのまま利用するのではなく、バイナリ変換して利用するのがベストプラクティスとなります。<br />
            ※たぶんパフォーマンス面以外にもメリットはあると思うけど、調査しきれないので割愛<br />
            <br />
            <SectionBlock sectionText="参考サイト" />
            <Link className="underline" target="_blank" href={"https://dev.mysql.com/doc/refman/8.0/ja/miscellaneous-functions.html#function_uuid-to-bin"}>https://dev.mysql.com/doc/refman/8.0/ja/miscellaneous-functions.html#function_uuid-to-bin</Link><br />
            <Link className="underline" target="_blank" href={"https://dev.mysql.com/doc/refman/8.0/ja/binary-varbinary.html"}>https://dev.mysql.com/doc/refman/8.0/ja/binary-varbinary.html</Link><br />
            <Link className="underline" target="_blank" href={"https://zenn.dev/reiwatravel/articles/9ce1050bf8509b"}>https://zenn.dev/reiwatravel/articles/9ce1050bf8509b</Link><br />
            <Link className="underline" target="_blank" href={"https://hiramekun.hatenablog.com/entry/2022/12/11/205710"}>https://hiramekun.hatenablog.com/entry/2022/12/11/205710</Link><br />
            </div>
        </div>
        <div className="flex flex-wrap m-8 underline">
          <Link href={"./"}>もどる</Link>
        </div>
      </div>
    </main>
  );
}
