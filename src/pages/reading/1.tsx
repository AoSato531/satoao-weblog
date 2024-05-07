import SectionBlock from "@/components/SectionBlock";
import SubSectionBlock from "@/components/SubSectionBlock";
import BlogPage from "@/components/BlogPage";
import CodeBlock from "@/components/CodeBlock";
import { Inter } from "next/font/google";
import Image from 'next/image'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <BlogPage
      title="リーダブルコード "
      date="2024/05/06"
      category="読書メモ"
      blogNo="1"
    >
      だいぶ前にリーダブルコードをかみくだいた記事を社内のみで公開したので、ここでも記事にしたいと思います。<br/>
      Amazonリンクは<Link className="underline" target="_blank" href={"https://amzn.asia/d/5myxU9i"}>こちら</Link>です。読みたい方はご購入ください。<br/>
      <br/>
      2012/06/23にオライリー・ジャパン社から発行された本です。<br/>
      技術書にしては比較的古い本ですが、内容は結構普遍的で現代でも通用すると思います。<br/>
      <br/>
      ちなみに正式なタイトルは「<b>リーダブルコード ―より良いコードを書くためのシンプルで実践的なテクニック (Theory in practice)</b>」です。サブタイトルまでいれるとめちゃ長いので記事名では省きました。<br/>
      <br/>
      <SectionBlock sectionText="第Ⅰ部　表面上の改善" />
      <SubSectionBlock sectionText="1.理解しやすいコード" />
      <b>コードは他の人が最短時間で理解できるように書かなければいけない。</b><br/>
      前提としてコードを書く上でいちばん大切な原則である。<br/>
      <br/>
      「理解する」というのは、変更を加えたりバグを見つけたりできるという意味。<br/>
      自分1人のPJだとしても自分のコードを覚えていない半年後の自分がいるかもしれない。<br/>
      そのPJに途中から誰かが参画する可能性もある。<br/>
      使い捨てだと思っていたコードが他PJで再利用される可能性もある。<br/>
      <br/>
      1行に処理を詰め込むのは、見た目的に短いコード（簡潔なコード）になるけど、2行に分けたり<br/>
      コメントをつけたり長いコードにしたほうが、理解しやすいコードになる可能性もある。<br/>
      <br/>
      コードは短くしたほうがいいけど、「理解するまでにかかる時間」を短くするほうが大切である。<br/>
      短いからって良いコードとは限らない。<br/>
      <br/>
      <SubSectionBlock sectionText="2.名前に情報を詰め込む" />
      <b>名前を見ただけで情報を読み取れるようにする。</b><br/>
      変数名でも関数名でもクラス名でも、命名規則は大事。<br/>
      名前は短いコメントだと思うと良い。<br/>
      短くても良い名前をつければ、それだけ多くの情報を伝えられる。<br/>
      <br/>
      明確でない抽象的な単語は避けるべき。<br/>
      getやsizeは単語として曖昧であり、あまり明確とは言えない。<br/>
      <br/>
      tmpなど汎用的な命名は避けるべき。<br/>
      イテレータや制御変数に使われるi,j,kなども簡易説明的な命名をつけると良い。<br/>
      例えばclub_i,member_iなど。なんならもっと短くci,miとかでも良い。<br/>
      複数のイテレータや制御変数が生存する箇所がある場合は意識したほうが良いかも。<br/>
      汎用的な命名をする場合はそれ相応の明確な理由を用意しよう。<br/>
      <br/>
      スコープが小さい変数は多くの情報を詰め込む必要がないので、名前は短く簡潔なものでも良い。<br/>
      スコープが大きい変数は長くても十分な情報を詰め込んで明確にする必要がある。<br/>
      頭文字や省略形を使って短く命名することがあるが、PJ固有の用語を省略するのは良くない。<br/>
      単語を削除しても必要な情報量が変わらない場合は削除してより簡潔にする。<br/>
      <br/>
      <SubSectionBlock sectionText="3.誤解されない名前" />
      <b>名前が「他の意味を間違えられることはないだろうか？」と何度も自問自答する。</b><br/>
      命名するときには五回されない名称にすることが大事。積極的に「誤解」を探す。<br/>
      <br/>
      限界値を含めるときはminとmaxを使う。<br/>
      limitという名称だと以下と未満の区別で誤解を生むことになる可能性がある。<br/>
      範囲を指定するときにはfirstやlastを使うと良い。<br/>
      包含/排他的範囲にはbeginとendを使うと良い。<br/>
      <br/>
      ブール値（true/false）の変数や関数を命名するときには、<br/>
      falseとtrueの意味を明確にしなければいけない。<br/>
      頭にis,has,canなどをつけることでブール型とわかりやすくするのも良い。<br/>
      また、disable_sslなどの否定系の名称じゃなくてuse_sslなどの肯定形の命名の方が良い。<br/>
      <br/>
      <SubSectionBlock sectionText="4.美しさ" />
      <b>見た目が美しいコードのほうが使いやすい。</b><br/>
      プログラミングの時間はほとんど読む時間なので、流し読みができれば<br/>
      理解しやすい（誰にとっても使いやすい）コードだと言える。<br/>
      美しいコードを書くには一貫性のあるスタイルで書くことが大切。<br/>
      <br/>
      複数のコードブロックで同じようなことをしていたらシルエットも同じようにする。<br/>
      NG例（長いし面倒なので本の内容ではなく書き換えてる）<br/>
      <CodeBlock>
        public class CocLabo&#123;<br/>
        &nbsp;&nbsp;public static final CompanyMember hogehoge = new CompanyMember(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;hoge1, hoge2, hoge3);<br/>
        <br/>
        &nbsp;&nbsp;public static final  CompanyMember piyopiyo_piyopiyo = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;new CompanyMember(hoge1, hoge2, hoge3);<br/>
        <br/>
        &nbsp;&nbsp;public static final  CompanyMember sato = new CompanyMember(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;hoge1, hoge2, hoge3);<br/>
        &#125;<br/>
        </CodeBlock>
        1行あたりの文字数が定義されているコーディング規約（があると仮定して）の関係で、<br/>
        `piyopiyo_piyopiyo`だけ余計な改行が入っている。その結果、見た目がバラバラになっている。<br/>
        <br/>
        OK例<br/>
        <CodeBlock>
        public class CocLabo&#123;<br/>
        &nbsp;&nbsp;public static final CompanyMember hogehoge = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;new CompanyMember(hoge1, hoge2, hoge3);<br/>
        <br/>
        &nbsp;&nbsp;public static final  CompanyMember piyopiyo_piyopiyo = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;new CompanyMember(hoge1, hoge2, hoge3);<br/>
        <br/>
        &nbsp;&nbsp;public static final  CompanyMember sato = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;new CompanyMember(hoge1, hoge2, hoge3);<br/>
        &#125;<br/>
      </CodeBlock>
      コードの見た目（シルエット）を一貫性のあるものにするために、適切な改行をそれぞれ入れている。<br/>
      <br/>
      コードの列を揃えれば、概要がわかりやすくなる。<br/>
      <CodeBlock>
        detail   = request.POST.get(&apos;detail&apos;)<br/>
        location = request.POST.get(&apos;location&apos;)<br/>
        phone    = equest.POST.get(&apos;phone&apos;)<br/>
        email    = request.POST.get(&apos;email&apos;)<br/>
        url      = request.POST.get(&apos;url&apos;)<br/>
      </CodeBlock>
      コードを整列していると、3つ目の定義でtypoしていることが見た目でパッと分かる。<br/>
      ただし、以下の理由からこれが好きではないというプログラマがいることにも注意。<br/>
      <ul className="list-disc list-inside">
        <li>整列や維持に手間がかかる</li>
        <li>1行だけ変更したいのに他行に空白を入れないといけなくて差分が増える</li>
      </ul>
      <br/>
      意味のある順番を選択して、常にその順番を守る。<br/>
      ある場所ではA,B,Cという並びで記述しているのに、別の場所ではA,C,Bのような並びにしてはいけない。<br/>
      <br/>
      空行を使って、大きなブロックを段落に分ける。<br/>
      NG例<br/>
      <CodeBlock>
        # ユーザのメール帳をインポートして、システムのユーザと照合する。<br/>
        # そして、まだ友達になっていないユーザの一覧を表示する。<br/>
        def suggest_new_friends(user, email_password): <br/>
        &nbsp;&nbsp;friends = user.friends() <br/>
        &nbsp;&nbsp;friend_emails = set(f.email for f in friends) <br/>
        &nbsp;&nbsp;contacts = import_contacts(user.email, email_password) <br/>
        &nbsp;&nbsp;contact_emails = set(c.email for c in contacts) <br/>
        &nbsp;&nbsp;non_friend_emails = contact_emails - friend_emails <br/>
        &nbsp;&nbsp;suggested_friends = User.objects.select(email__in=non_friend_emails)<br/>
        &nbsp;&nbsp;display[&apos;user&apos;] = user <br/>
        &nbsp;&nbsp;display[&apos;friends&apos;] = friends <br/>
        &nbsp;&nbsp;display[&apos;suggested_friends&apos;] = suggested_friends <br/>
        &nbsp;&nbsp;return render(&quot;suggested_friends.html&quot;, display)<br/>
      </CodeBlock>
      段落化されていなくて非常に読みにくい。<br/>
      <br/>
      OK例<br/>
      <CodeBlock>
        def suggest_new_friends(user, email_password): <br/>
        &nbsp;&nbsp;# ユーザの友達のメールアドレスを取得する。<br/>
        &nbsp;&nbsp;friends = user.friends() <br/>
        &nbsp;&nbsp;friend_emails = set(f.email for f in friends) <br/>
        <br/>
        &nbsp;&nbsp;# ユーザのメールアカウントからすべてのメールアドレスをインポートする。<br/>
        &nbsp;&nbsp;contacts = import_contacts(user.email, email_password) <br/>
        &nbsp;&nbsp;contact_emails = set(c.email for c in contacts) <br/>
        <br/>
        &nbsp;&nbsp;# まだ友達になっていないユーザを探す。<br/>
        &nbsp;&nbsp;non_friend_emails = contact_emails - friend_emails <br/>
        &nbsp;&nbsp;suggested_friends = User.objects.select(email__in=non_friend_emails)<br/>
        <br/>
        &nbsp;&nbsp;# それをページに表示する。<br/>
        &nbsp;&nbsp;display[&apos;user&apos;] = user <br/>
        &nbsp;&nbsp;display[&apos;friends&apos;] = friends <br/>
        &nbsp;&nbsp;display[&apos;suggested_friends&apos;] = suggested_friends <br/>
        &nbsp;&nbsp;return render(&quot;suggested_friends.html&quot;, display)<br/>
      </CodeBlock>
      段落化に加えて、段落ごとに要約コメントを追加することで読みやすくなった。<br/>
      <br/>
      上記以外にも個人的な好みでスタイルが分かれることもある。<br/>
      例（クラス定義の開き括弧の位置）<br/>
      <CodeBlock>
        class logger&#123;<br/>
        &nbsp;&nbsp;...<br/>
        &#125;;<br/>
        <br/>
        class logger<br/>
        &#123;<br/>
        &nbsp;&nbsp;...<br/>
        &#125;;<br/>
      </CodeBlock>
      どちらもコードの読みやすさに大きな差はないが、<br/>
      この2つのスタイルを混合させると読みにくいものになってしまう。<br/>
      <br/>
      <SubSectionBlock sectionText="5.コメントすべきことを知る" />
      <b>コメントの目的は、書き手の意図を読み手に知らせることである。</b><br/>
      コメントは「コードの動作の説明」に使うものではない。<br/>
      <br/>
      コードからすぐに分かることはコメントに書くべきではない。<br/>
      コメントを読むとその分だけコードを読む時間がなくなる。<br/>
      コメントには読むだけの価値をもたせるべきである。<br/>
      <br/>
      コメントはひどい名前の埋め合わせに使うものではない。<br/>
      コメントで補足するよりは明確な名前に変えるべきである。<br/>
      <br/>
      コメントは自分の考えを記録する。<br/>
      なぜこのコードを書いたのかという大切な考えを記録しなければならない。<br/>
      <br/>
      コードは常にアップデートし続けているので、その過程で欠陥を生む可能性はある。<br/>
      欠陥を文書化することに躊躇してはいけない。<br/>
      改善が必要なときはアノテーションコメントなどを利用して記録しておく。<br/>
      <br/>
      読み手の立場になって考える。<br/>
      読み手が疑問に思いそう、読み手が質問しそう（書き手に質問しそう）、ハマりそうな罠になりそうな内容には積極的にコメントをする。<br/>
      <br/>
      ファイルやクラスには全体像のコメントを書く。<br/>
      新規参画者に「このファイルは○○のためので〜、このクラスは○○を処理してて〜」などの会話が行われることが多いが、それは高レベルのコメントに書くべき情報である。<br/>
      （「高レベル」は、処理内容が難解、文章力が高いという意味ではなく、階層が上にあるという意味と思われる）<br/>
      大量の正式文書をかけということではなく、短い適切な文章でも良い。何もないよりはマシ。<br/>
      <br/>
      ライターズブロックになったときは、自分の考えをとりあえず書いてみる。<br/>
      （ライターズブロック：あれ？何を書けばいいんだ？みたいなスランプ状態）<br/>
      「ヤバい、これは重複したら面倒になる」って思ったら左記のようにそのまま書いてみる。<br/>
      そのままでも何もないよりはマシだけど、書き終わったあとに曖昧な表現を書き換えてみる。<br/>
      例えば上記のコメントを以下のように置き換える。<br/>
      <ul className="list-disc list-inside">
        <li>「ヤバい」→「注意」</li>
        <li>「これ」→「このコード」</li>
        <li>「面倒」→「実装が難しい」</li>
      </ul>
      「注意：このコードは重複を処理できません（実装が難しいため）」に改善できる。<br/>
      <br/>
      <SubSectionBlock sectionText="6.コメントは正確で簡潔に" />
      <b>コメントは領域に対する情報の比率が高くなければいけない。</b><br/>
      コメントを書くのであれば、正確に（できるだけ明確で詳細に）書くべき。<br/>
      また、コメントは画面の領域と取られるし、読むのに時間がかかるので、簡潔にまとめる。<br/>
      <br/>
      コメントを簡潔に書く。<br/>
      NG例<br/>
      <CodeBlock>
        &frasl;&frasl; int は CategoryType。<br/>
        &frasl;&frasl; pair の最初の float は &apos;score&apos;。 <br/>
        &frasl;&frasl; 2つめは &apos;weight&apos;。<br/>
        typedef hash_map&lt;int, pair&lt;float, float&gt; &gt; ScoreMap; <br/>
      </CodeBlock>
      <br/>
      OK例<br/>
      <CodeBlock>
        &frasl;&frasl; CategoryType -&gt; (score, weight)<br/>
        typedef hash_map&lt;int, pair&lt;float, float&gt; &gt; ScoreMap; <br/>
      </CodeBlock>
      3行も使って説明しなくとも、1行で説明することができる。<br/>
      <br/>
      曖昧な代名詞の使用を避ける。（「これ」とか「それ」とか）<br/>
      読み手は代名詞を正確に変換しなければならない。<br/>
      場合によっては代名詞が何を指しているのかわからなくなることもある。<br/>
      コードを読み勧めていれば代名詞が指しているものがわかるが、それだとコメントの意味がない。<br/>
      <br/>
      歯切れの悪い曖昧な表現も避ける。<br/>
      「これまでにクロールしたURLかどうかによって優先度を変える」は曖昧。<br/>
      「これまでにクロールしていないURLの優先度を高くする」は短いし直接的で明確。<br/>
      <br/>
      関数の動作を正確に記述する。<br/>
      NG例<br/>
      <CodeBlock>
        &frasl;&frasl; このファイルに含まれる行数を返す<br/>
        int CountLines(string filename)&#123; ... &#125; <br/>
      </CodeBlock>
      行といってもいろいろ捉えることができる。<br/>
      以下の場合どうなるだろう。<br/>
      <ul className="list-disc list-inside">
        <li>“”（空のファイル）は0行なのか1行なのか</li>
        <li>“hello”は0行なのか1行なのか</li>
        <li>“hello\n”は1行なのか2行なのか</li>
        <li>“hello\n world”は1行なのか2行なのか</li>
        <li>“hello\r\n crue\n world\r”は2行なのか3行なのか</li>
      </ul>
      <br/>
      OK例<br/>
      <CodeBlock>
        &frasl;&frasl; このファイルに含まれる改行文字(\n)を数える<br/>
        int CountLines(string filename)&#123; ... &#125; <br/>
      </CodeBlock>
      NG例と比較しても、それほど長くなってはいないが、伝わる情報は格段に増えている。<br/>
      改行文字（ラインフィード）がない場合は0を返すことがわかる。<br/>
      また、キャリッジリターンが無視されていることもわかる。<br/>
      <br/>
      入出力のコーナーケースに実例を使う。<br/>
      （コーナーケース：ミスの発生しそうなケース、めったに発生しないケース）<br/>
      仕様がややこしかったりする関数のコメントには実例を書いておけば何よりもわかりやすくなる。<br/>
      例<br/>
      <CodeBlock>
        &frasl;&frasl; ...<br/>
        &frasl;&frasl; 実例 strip(&quot;abba/a/ba&quot;,&quot;ab&quot;)は&quot;/a/&quot;を返す<br/>
        String strip(String src, String chars)&#123; ... &#125; <br/>
      </CodeBlock>
      簡単な実例では役に立たないので注意が必要。<br/>
      <br/>
      よくわからない引数には名前つき引数を使う。<br/>
      名前を付けられない言語の場合はインラインコメントを使えば同じことができる<br/>
      NG例<br/>
      <CodeBlock>
        connect(10,false)<br/>
      </CodeBlock>
      ただ数値とブール値を渡しているけど、何のことだかよくわからない。<br/>
      <br/>
      OK例
      <CodeBlock>
        connect(timeout_ms = 10, use_encryption = false)<br/>
        <br/>
        connect(/* timeout_ms = */ 10, /* use_encryption = */ false);<br/>
      </CodeBlock>
      名前付き引数もしくはインラインコメントのおかげで渡してる値が明確になる。<br/>
      <br/>
      多くの意味が詰め込まれた言葉や表現を使って、コメントを簡潔に保つ。<br/>
      冗長なコメントの場合は、情報密度が高い単語や表現に変えられないか考えてみる。<br/>
      <br/>
      <SectionBlock sectionText="第Ⅱ部　ループとロジックの単純化" />
      <SubSectionBlock sectionText="7.制御フローを読みやすくする" />
      <b>条件やループなどの制御フローはできるだけ自然にする。</b><br/>
      <b>コードの読み手が立ち止まったり読み返したりしないようにする。</b><br/>
      <br/>
      条件式の引数の並び順は気にする。<br/>
      以下の式ではほとんど場合が前者のようが読みやすい。<br/>
      <CodeBlock>
        if( age &gt;= 18 )
        <br/>
        if( 18 &lt;= age )<br/>
      </CodeBlock>
      式の順番による読みやすさに指針としては以下が挙げられる。<br/>
      <ul className="list-disc list-inside">
        <li>左辺：「調査対象」の式。変化する。</li>
        <li>右辺：「比較対象」の式。変化しない。</li>
      </ul>
      例えば言葉にしても、「君の年齢が18歳以上ならば」は自然だが、「18歳が君の年齢以下ならば」は不自然だ。<br/>
      <br/>
      if/else文の条件の順番には優劣がある。条件は否定形よりも肯定形をなるべく利用する。<br/>
      単純な条件を先に書く。目立つ（関心を引く）条件を先に書く。<br/>
      ただし、上記は衝突することもある。その時は順番は自分で考えて判断する。<br/>
      優劣は衝突しても、優先度は明確に決まることが多い。<br/>
      <br/>
      三項演算子やdo/whileループの使用は避ける。<br/>
      三項演算子は使うとコードは短く簡潔になるが、多くの場合可読性が下がる。<br/>
      do/whileループはループ条件がコードの下にあり、読み勧めていく上で不自然である。<br/>
      <br/>
      ネストを浅くする。ネストが深いコードは読み手の集中力が必要となり、理解しにくい。<br/>
      ネストを削除するには「失敗ケース」で早めに返す（returnする）と良い。<br/>
      <br/>
      <SubSectionBlock sectionText="8.巨大な式を分割する" />
      <b>巨大な式は飲み込みやすい大きさに分割する。</b><br/>
      人間は1度に3〜4のものしか考えることができないらしい。<br/>
      つまり、コードの式（塊）が大きくなれば、それだけ理解が難しくなる。<br/>
      <br/>
      式を簡単に分割するには、式を表す変数を使えば良い。この変数を「説明変数」という。<br/>
      式を説明する必要がない場合でも式を変数に代入しておくと便利。<br/>
      大きなコードの塊を小さな名前に置き換えて、管理や把握を簡単にすることができる。<br/>
      同じコードの再利用を避けてひとつにする（DRYにする）べき。<br/>
      （DRY:Don&apos;t Repert Yourselfの略、同じもん書くなという意味）<br/>
      <br/>
      条件文を書くときはド・モルガンの法則を使ってロジックを操作する方法がある。<br/>
      この法則を使うことで論理式を読みやすくすることができる。<br/>
      ド・モルガンの法則の理解が難しい場合は「notを分配して（notをくくりだして）and/orを反転する」と覚えれば良い。<br/>
      例<br/>
      <CodeBlock>
        if(!(file_exists && !is_protected)) Error(&quot;ファイルを読み込めません&quot;);
        <br/>
        if(!file_exists || is_protected)) Error(&quot;ファイルを読み込めません&quot;);<br/>
      </CodeBlock>
      前者の論理式「「ファイルがある <b>かつ</b> 保護されていない 」<b>ではない</b>場合」は<br/>
      後者の論理式「ファイルがない <b>または</b> 保護されている 場合」に書き換えられる。<br/>
      <br/>
      式の分割だけでなく、巨大なコードブロックを分割する上でも同じ技法が使える。<br/>
      NG例<br/>
      <CodeBlock>
        var update_highlight = function (message_num) &#123;<br/>
        &nbsp;&nbsp;if ($(&quot;#vote_value&quot; + message_num).html() === &quot;Up&quot;) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;$(&quot;#thumbs_up&quot; + message_num).addClass(&quot;highlighted&quot;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;$(&quot;#thumbs_down&quot; + message_num).removeClass(&quot;highlighted&quot;);<br/>
        &nbsp;&nbsp;&#125; else if ($(&quot;#vote_value&quot; + message_num).html() === &quot;Down&quot;) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;$(&quot;#thumbs_up&quot; + message_num).removeClass(&quot;highlighted&quot;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;$(&quot;#thumbs_down&quot; + message_num).addClass(&quot;highlighted&quot;);<br/>
        &nbsp;&nbsp;&#125; else &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;$(&quot;#thumbs_up&quot; + message_num).removeClass(&quot;highighted&quot;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;$(&quot;#thumbs_down&quot; + message_num).removeClass(&quot;highlighted&quot;);<br/>
        &nbsp;&nbsp;&#125;<br/> 
        &#125;;
      </CodeBlock>
      上記のコードは同じコードが再利用されていて読みにくく、すぐに理解できない。<br/>
      実は5つ目の文字列”highlighted”だけtypoしているが、それも気が付きにくい。<br/>
      <br/>
      OK例<br/>
      <CodeBlock>
        var update_highlight = function (message_num) &#123;<br/>
        &nbsp;&nbsp;var thumbs_up = $(&quot;#thumbs_up&quot; + message_num);<br/>
        &nbsp;&nbsp;var thumbs_down = $(&quot;#thumbs_down&quot; + message_num);<br/>
        &nbsp;&nbsp;var vote_value = $(&quot;#vote_value&quot; + message_num).html();<br/>
        &nbsp;&nbsp;var hi = &quot;highlighted&quot;;<br/>
        <br/>
        &nbsp;&nbsp;if (vote_value === &quot;Up&quot;) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;thumbs_up.addClass(hi);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;thumbs_down.removeClass(hi);<br/>
        &nbsp;&nbsp;&#125; else if (vote_value === &quot;Down&quot;) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;thumbs_up.removeClass(hi);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;thumbs_down.addClass(hi);<br/>
        &nbsp;&nbsp;&#125; else &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;thumbs_up.removeClass(hi);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;thumbs_down.removeClass(hi);<br/>
        &nbsp;&nbsp;&#125;<br/>
        &#125;;
      </CodeBlock>
      同じ式を説明変数として関数の最上位に抽出することで、理解しやすいコードになる。<br/>
      <br/>
      <SubSectionBlock sectionText="9.変数と読みやすさ" />
      <b>変数を適当に使うとプログラムが理解しにくくなる。</b><br/>
      変数が多いと変数を追跡するのが難しくなる。<br/>
      変数のスコープが大きいとスコープを把握する時間が長くなる。<br/>
      変数が頻繁に変更されると現在の値を把握するのが難しくなる。<br/>
      <br/>
      邪魔な変数を削除する。意味がない変数を積極的に削除する。<br/>
      役に立たないような一時変数は積極的に削除すべき。<br/>
      例<br/>
      <CodeBlock>
        now = datetime.datetime.now()<br/>
        root_message.last_view_time = now<br/>
      </CodeBlock>
      上記の 変数nowは以下の理由から意味がないといえるのでわざわざ定義する必要がない。<br/>
      <ul className="list-disc list-inside">
        <li>複雑な式を分割していない。</li>
        <li>より明確になっていない。datetime.datetime.now()のままでも十分に明確。</li>
        <li>1度しか使っていないので、重複コードの削除になっていない。</li>
      </ul>
      また、中間結果を保持するためだけに使っている変数や、ループ制御を制限するためだけに使っているような変数も邪魔な変数と言えるので積極的に削除すべき。<br/>
      <br/>
      変数のスコープが小さい方が理解しやすいコードになる。<br/>
      グローバル変数を避けるというアドバイスは聞きがちである。<br/>
      グローバル変数は追跡が難しく、既存の名前空間を汚染するなどの不具合に繋がる。<br/>
      グローバル変数に限らず、すべての変数のスコープを縮めるのは良い考えである。<br/>
      <br/>
      一度だけ書き込む変数を使う。言い換えると、変数は一度だけ書き込む。<br/>
      変数の値が頻繁に変更されると現在値の判断が難しくなり、コードの理解が難しくなる。<br/>
      永続的に変更されない変数は扱いやすい。イミュータブルな型宣言も方法のひとつ。<br/>
      <br/>
      <SectionBlock sectionText="第Ⅲ部　コードの再構成" />
      <SubSectionBlock sectionText="10.無関係の下位問題を抽出する" />
      <b>PJ固有のコードから汎用コードを分離する。</b><br/>
      関数で達成したい目標を明確にすることが大事である。<br/>
      その目標とは直接は無関係の下位問題を積極的に見つけて抽出する。<br/>
      <ul className="list-disc list-inside">
        <li>その関数やコードブロックで達成したい一番の目標はなにか？と自問する。</li>
        <li>コードの各行に対して、上記の目標に直接的に効果があるのか？あるいは無関係の下位問題を解決しているのか？と自問する。</li>
        <li>無関係の下位問題を解決しているコードが相当量あれば、それを抽出して別の関数にする。</li>
      </ul>
      ユーティリティコードや汎用コードは「無関係の下位問題」の良い例と言える。<br/>
      そのような汎用的なコードは他PJでも再利用もできる。<br/>
      ただし、やりすぎには注意。度を超えて小さい関数を作りすぎると、コードが散らばりすぎて逆に読みにくくなってしまう。<br/>
      <br/>
      <SubSectionBlock sectionText="11.一度に1つのことを" />
      <b>コードはひとつずつタスクを行うようにしなければいけない。</b><br/>
      一度に複数のことをするコードは理解しにくい。<br/>
      大きな関数は小さな複数の関数に分割したほうがいい。もちろん、関数に限った話ではない。<br/>
      分解するための手順は以下。<br/>
      <ul className="list-disc list-inside">
        <li>コードが行っているタスクをすべて列挙する。</li>
        <li>タスクをできるだけ異なる関数に分割する。少なくとも異なる領域に分割する。</li>
      </ul>
      <br/>
      <SubSectionBlock sectionText="12.コードに思いを込める" />
      <b>プログラムのことを簡単な言葉で説明する。</b><br/>
      ソースコードはプログラムの動作を説明する最も大切な手段である。<br/>
      自分より知識がない人が理解できるようにコードを書くべき。<br/>
      ロジックを明確に説明することが大事。<br/>
      <br/>
      ユーザに権限があるかどうかを確認して、権限がなければユーザに知らせるコードを例にする。<br/>
      NG例<br/>
      <CodeBlock>
        $is_admin = is_admin_request();<br/>
        if ($document) &#123;<br/>
        &nbsp;&nbsp;if (!$is_admin && ($document[&apos;username&apos;] != $_SESSION[&apos;username&apos;])) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;return not_authorized();<br/>
        &nbsp;&nbsp;&#125;<br/>
        &#125; else &#123;<br/>
        &nbsp;&nbsp;if (!$is_admin) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;return not_authorized();<br/>
        &nbsp;&nbsp;&#125;<br/>
        &#125;<br/>
      </CodeBlock>
      上記はロジックがたくさんある。もっとロジックを単純化できるはず。<br/>
      単純化したロジックは以下のように説明できる<br/>
      <ul className="list-disc list-inside">
        <li>権限あり
        <ul className="list-[circle] list-inside ps-5">
          <li>管理者</li>
          <li>文書の所有者</li>
        </ul>
        </li>
        <li>権限なし
        <ul className="list-[circle] list-inside ps-5">
          <li>その他</li>
        </ul>
        </li>
      </ul>
      上記の説明どおりにコードを書いてみると良い。<br/>
      <br/>
      OK例<br/>
      <CodeBlock>
      if (is_admin_request()) &#123;<br/>
      &nbsp;&nbsp;&frasl;&frasl; 権限あり<br/>
      &#125; elseif ($document && ($document[&apos;username&apos;] == $_SESSION[&apos;username&apos;])) &#123;<br/>
      &nbsp;&nbsp;&frasl;&frasl; 権限あり<br/>
      &#125; else &#123;<br/>
      &nbsp;&nbsp;return not_authorized();<br/>
      &#125;<br/>
      </CodeBlock>
      一見、if文の中身が空になっていて変なコードに思える。<br/>
      でもコードは短くなり、否定形がなくなりロジックも単純になった。<br/>
      つまりこちらのほうが理解しやすい。<br/>
      <br/>
      プログラム（あるいは自分の考え）は言葉にすることで明確な形になる。<br/>
      <br/>
      <SubSectionBlock sectionText="13.コードを短くする" />
      <b>もっとも読みやすいコードは、何も書かれていないコードだ。</b><br/>
      コードは少ないほうがテストや保守などの労力はもちろんかからなくなる。<br/>
      要件を詳しく調べれば、コードレスで実現できることもある。<br/>
      プログラムで100％あらゆる入力を処理する必要はない。<br/>
      新しいコードをむやみに書かないようにすることが大事。<br/>
      <br/>
      コードを小さく保つことは重要。<br/>
      コードをできるだけ小さく維持し続けるために以下をしなければいけない。<br/>
      <ul className="list-disc list-inside">
        <li>汎用コードを作って重複コードを削除する。（DRYにする）</li>
        <li>未使用のコードや無用の機能を削除する。</li>
        <li>PJをサブPJに分割する</li>
        <li>コードの「重量」を意識する。軽量にしておく。</li>
      </ul>
      <br/>
      自前で汎用コードを作成しなくとも、既存のライブラリで解決できることも多々ある。<br/>
      たまには使用している言語やフレームワークの標準ライブラリを読んでみても良い。<br/>
      ライブラリのすべてを覚える必要があるわけではなくて、何ができそうか感じ取る程度でも良い。<br/>
      <br/>
      <SectionBlock sectionText="第Ⅳ部　選抜テーマ" />
      これまでの内容を使って実際にやってみよう！的な内容だったので割愛。<br/>
      <br/>
      <SectionBlock sectionText="所感" />
      全体を通して、コーディングする人材であり続ける限り非常に役立つ書籍だと思いました。<br/>
      言語を問わない内容なので読んで損はないと思います。プログラマ・コーダーにはおすすめです。<br/>
      <br/>
      （殆ど割愛してるが）リファクタの実例も多く、文章ではわかりにくい部分もイメージしやすかったです。<br/>
      ただ、全てが全て同意か？と言われたら微妙な内容もあったので、鵜呑みにはしないほうが良いですね。<br/>
      翻訳書だから訳が微妙だ（よくわかんない）と感じる部分もちょっとはありました。<br/>
      <br/>
      かみくだいたにしてはちょっと冗長だったかもしれないと反省。<br/>
      <br/>
      というわけで「リーダブルコード」のかみくだきはおしまいです。<br/>
    </BlogPage>
  );
}
