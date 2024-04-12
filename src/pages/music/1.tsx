import SectionBlock from "@/components/SectionBlock";
import BlogPage from "@/components/BlogPage";
import { Inter } from "next/font/google";
import { YouTubeEmbed } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <BlogPage
      title="好きな電子音楽"
      date="2024/04/11"
      category="音楽"
      blogNo="1"
    >
      さとうは電子音楽が好きでよく聴きます。<br/>
      <br/>
      とくに好きなのがインストゥルメンタルかつブレイクビーツを多用している曲が好きです。<br/>
      ジャンルで言うとDrum&apos;n&apos;Bass, Jungle, Drill&apos;n&apos;Bassあたりをよく聴きます。<br/>
      かつベースが目立っていて、あまりメロディアスでない曲が好きです。<br/>
      <br/>
      YouTube動画の埋め込みのテストも兼ねて、とくに好きな曲の動画を貼っていきます。<br/>
      上記に記載したジャンルや特徴に当てはまらない曲もありますが貼っていきます。<br/>
      <br/>
      <SectionBlock sectionText="The Modern Bass Guiter / Squarepusher" />
      <YouTubeEmbed videoid="hnGYJVsZlJo"/><br/>
      Squarepusheにハマったきっかけの曲。というか電子音楽にハマったきっかけでもあるかも。<br/>
      インストの電子音楽はそれまで音ゲー（beatmania）くらいでしか聴いたことがなかったけど、<br/>
      ゲーム音楽以外で好きになった初めての曲なので、同時にD&apos;n&apos;B沼にもハマってしまいました。<br/>
      Chiptuneっぽさもあるんだけど、音が複雑に混ざりあっていて、さとうのツボをつきまくっています。<br/>
      <br/>
      <SectionBlock sectionText="The Bomb / Electric Universe" />
      <YouTubeEmbed videoid="p2Dl3j23SVM"/><br/>
      Psychedelic Tranceにギターサウンドが加わった曲。<br/>
      前半の爽やかな歪んだギターと後半でサイケ色が強まっていく感じがいいですね。<br/>
      中盤で3連符になったりして、曲の変化というか、いろんな表情が見れて楽しい曲です。<br/>
      <br/>
      <SectionBlock sectionText="Bubble Control / Tipper" />
      <YouTubeEmbed videoid="c_57udtZ2zw"/><br/>
      Glitch Hopを漁っていたときに出会った曲。<br/>
      遅めのBPMでゆったりしているんだけど、1拍の中で色んな音が混じってて面白いです。<br/>
      泡の音とグリッチ音とワブルベースが交差する感じが堪りません。<br/>
      クラブで聴きたいです。頭を振りたいです。<br/>
      <br/>
      <SectionBlock sectionText="(The title is) TOO LONG to write here. / t+pazolite" />
      <YouTubeEmbed videoid="I8Oa82JbJ_I"/><br/>
      いろいろな音ゲーに曲を提供しているt+pazoliteさんの曲。<br/>
      終始HAPPY GABBAを体現しているような曲。HAPPYなGABBA。最高です。<br/>
      これこそクラブで聴いて激しく頭を振りたい曲です。たぶん頭取れちゃう。<br/>
      曲のタイトルの元ネタはたぶん「フェルマーの最終定理」かと思います。<br/>
      <br/>
      <SectionBlock sectionText="sweet heart / globe" />
      <YouTubeEmbed videoid="1_6xsQJQ-UE"/><br/>
      最後はインストでもないけど、大好きな小室哲哉さんの曲。<br/>
      小室哲哉さんが作るJungleはハズレがありません。全部聴いたわけじゃないけど。<br/>
      サビでそれまで控えめだったドラムが全面に出てくる感じがとても好きです。<br/>
      Aメロの存在感はあるけどボーカルを邪魔しないシンセのメロディも堪りません。<br/>
      <br/>
      <SectionBlock sectionText="さいごに" />
      5曲貼ったけど、まだまだ好きな曲はたくさんあります。<br/>
      たぶん無限に動画を貼ることなるので、いったんここでストップです。<br/>
      褒め言葉も同じようなことを繰り返すことになってしまうので、褒め言葉の語彙も鍛えておこうと思います。<br/>
    </BlogPage>
  );
}
