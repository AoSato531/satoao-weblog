import BlogPage from "@/components/BlogPage";
import SectionBlock from "@/components/SectionBlock";
import SubSectionBlock from "@/components/SubSectionBlock";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <BlogPage
      title="RESTful APIにおける冪等性について"
      date="2024/06/12"
      category="技術メモ"
      blogNo="4"
    >
      社内LT会で。RESTful APIにおける冪等性というテーマで発表をしたので、記事にも残そうと思います。<br/>
      <br/>
      <SectionBlock sectionText="RESTful APIとは" />
      ざっくりいうと異なるシステム間をインターネット（HTTP通信）を介して情報のやりとりを行うインタフェースのことです。<br/>
      <br/>
      下図ではシステムがもう片方のシステムに「特定の情報をくれ」というリスクストを渡しています。<br/>
      リクエストを受け取ったシステムはその内容に応じて、適切な情報をレスポンスとして返しています。<br/>
      この情報をやりとりする矢印の部分がRESTful APIになります。<br/>
      <Image
        className="lg:w-[30vw] w-[15vw]"
        src="/images/tech-1.png"
        width={800}
        height={570}
        alt="RESTful APIの説明"
      />
      <br/>
      また、RESTful APIには以下の5つのメソッドがあります。<br/>
      <ul className="list-disc list-inside">
        <li>GET：データの取得</li>
        <li>POST：データの作成</li>
        <li>PUT：データの更新</li>
        <li>PATCH：データの部分更新</li>
        <li>DELETE：データの削除</li>
      </ul>
      <br/>
      <SectionBlock sectionText="冪等性（べきとうせい）とは" />
      冪等性とは、ある操作を1回行っても、複数行っても、<b>結果が同じ</b>になる性質のことです。<br/>
      <br/>
      エンジニア以外の方にはあまり聴き馴染みのない言葉かもしれません。<br/>
      エンジニアをやっていてもああまり聴かない言葉でもあります。<br/>
      <br/>
      ちなみにRESTful APIにおいては「GET」「PUT」「DELETE」の3つのメソッドが冪等性が保証されるべきメソッドになります。<br/>
      つまり、この3つのメソッドは何回操作実行しても結果が同じにならなければいけません。<br/>
      <br/>
      ではここでいう「<b>結果が同じ</b>」とはなんでしょうか。<br/>
      何をもって結果が同じとみなすのでしょうか。<br/>
      <br/>
      <SectionBlock sectionText="結論" />
      先に結論を書いておきます。<br/>
      <br/>
      <div className="underline decoration-[red]">RESTful APIにおける冪等性で指す「<b>結果が同じ</b>」というのは「<b>レスポンス</b>」ではなく「<b>リソース（データ）</b>」のことである。</div>
      <br/>
      ただ、これだけでは意味がわからないというか腑に落ちない方もいるかもしれません。<br/>
      以下で解説したいと思います。<br/>
      <br/>
      <SectionBlock sectionText="具体例で解説" />
      たとえば、ユーザ管理システムがあったとして、外部システムからRESTful API経由で情報の操作ができるとします。<br/>
      図示するとこんな感じです。ちなみ以降に例として出てくるシステムやRESTful APIは架空なので存在しません。<br/>
      <br/>
      <Image
        className="lg:w-[30vw] w-[15vw]"
        src="/images/tech-2.png"
        width={800}
        height={570}
        alt="例"
      />
      ユーザ管理システムにユーザが4人登録されていて、それとは別に外部システムがあるという状態です。<br/>
      これを前提として、GETメソッドとDELETEメソッドを例に解説していきます。<br/>
      <br/>
      <SubSectionBlock sectionText="GETメソッドの場合" />
      <Image
        className="lg:w-[30vw] w-[15vw]"
        src="/images/tech-3.png"
        width={800}
        height={570}
        alt="GET例"
      />
      外部システムくんがユーザ管理システムくんにIDが3番のユーザ情報をくれとリクエストしています。<br/>
      それに対してIDが3番である「さとう　あお」の情報を正常というステータスといっしょに、外部システムくんにレスポンスとして返しています。<br/>
      <br/>
      直感的にわかるかもしれませんが、この操作は1回やっても5回やっても1000回やっても同じ結果になります。<br/>
      レスポンスは常に同じなのはもちろん、データの取得しかしていないのでデータ情報も同じです。<br/>
      <br/>
      これは冪等性が保証されているといえます。<br/>
      <br/>
      <SubSectionBlock sectionText="DELETEメソッドの場合" />
      <Image
        className="lg:w-[30vw] w-[15vw]"
        src="/images/tech-4.png"
        width={800}
        height={570}
        alt="DELETE例1"
      />
      外部システムくんがユーザ管理システムくんにIDが4番のユーザ情報を削除してくれとリクエストしています。<br/>
      それに対してIDが4番である「おしお　おれんじ」の情報を削除した上で、正常に削除した旨のレスポンスを外部システムくんに返しています。<br/>
      <br/>
      ではこの操作をもう1回行ったらどうなるでしょうか。<br/>
      <br/>
      <Image
        className="lg:w-[30vw] w-[15vw]"
        src="/images/tech-5.png"
        width={800}
        height={570}
        alt="DELETE例2"
      />
      1回目と同様に、外部システムくんがユーザ管理システムくんにIDが4番のユーザ情報を削除してくれとリクエストしています。<br/>
      1回目で削除したので、IDが4番のユーザがいないので、HTTP404(Not Found)というエラーがレスポンスとして返されます。<br/>
      <br/>
      ではこれは冪等性が保証されているといえるでしょうか。結果が同じといえるでしょうか。<br/>
      <br/>
      結論をいうと、これは冪等性が保証されています。<br/>
      なぜかというと、データの情報を1回目も2回目も同じ状態だからです。<br/>
      <br/>
      どちらもDELETEメソッドが実行されたあとはユーザが3人になっています。<br/>
      4人だったのが削除されたから3人になったのか、もともと3人だったのかの違いはあれど、ユーザが3人になったという状態は同じです。<br/>
      <br/>
      つまりレスポンスは関係ないのです。冪等性を保証する上で考えるべきは実行後のデータ状態です。<br/>
      これがRESTful APIにおける冪等性の肝となります。<br/>
      <br/>
      <SectionBlock sectionText="まとめ" />
      <div className="underline decoration-[red]">RESTful APIにおける冪等性で指す「<b>結果が同じ</b>」というのは「<b>レスポンス</b>」ではなく「<b>リソース（データ）</b>」のことである。</div>
      <br/>
      ここまで読んでくださっていれば、なんとなくは理解いただけたかと思います。<br/>
      <br/>
      <SectionBlock sectionText="さいごに" />
      肝である部分やそれに付随する部分以外は前提となる知識というか説明をかなり省いています。<br/>
      メソッドってなに？とか、HTTPステータス（200,204,404）ってなに？とか気になった方は別途調べてみてください。<br/>
      <br/>
      というわけで不足分を読者にぶん投げたところでおわりです。<br/>
      <br/>
      <SectionBlock sectionText="参考サイト" />
      <Link className="underline" target="_blank" href={"https://aws.amazon.com/jp/what-is/restful-api/"}>https://aws.amazon.com/jp/what-is/restful-api/</Link><br/>
      <Link className="underline" target="_blank" href={"https://qiita.com/sfp_waterwalker/items/765abc2b53cc11d5e367"}>https://qiita.com/sfp_waterwalker/items/765abc2b53cc11d5e367</Link><br/>
    </BlogPage>
  );
}
