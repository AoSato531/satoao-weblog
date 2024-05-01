import BlogPage from "@/components/BlogPage";
import SectionBlock from "@/components/SectionBlock";
import SubSectionBlock from "@/components/SubSectionBlock";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <BlogPage
      title="コミュニケーションで意識していること"
      date="2024/05/01"
      category="雑記"
      blogNo="3"
    >
      だいぶ前に社内のLTでさとうが仕事におけるコミュニケーションで気をつけていることを発表しました。<br/>
      せっかくなので記事にしてみようかと思います。割とポエムな内容です。<br/>
      <br/>
      <SectionBlock sectionText="前提" />
      基本的に会話などの同期コニュニケーションを前提としています。<br/>
      チャットなどの非同期コミュニケーションには当てはまらないことが多いと思います。<br/>
      <br/>
      <SectionBlock sectionText="仕事で一番大事にしていること" />
      さとうは仕事において「<b>心理的安全性</b>」を一番大事にしています。<br/>
      「心理的安全性」とは組織の中で自分の意見や気持ちを誰に対しても安心して発言できる状態のことです。 <br/>
      <br/>
      これが保たれていないと、萎縮して発言できないメンバーが出てコミュニケーションロスに繋がります。 <br/>
      コミュニケーションロスは仕事に大きな影響があります。<br/>
      コミュニケーションを工夫して改善できるならしたいですよね。<br/>
      <br/>
      <SectionBlock sectionText="意識していること" />
      <SubSectionBlock sectionText="頭に「結論」をつけてから話す" />
      結論を先に話すときに役に立ちます。「結論」って口に出しちゃいます。<br/>
      「進捗どう？」「結論、半日分遅れています。このような問題が発覚して〜〜〜」みたいな感じ。<br/>
      <br/>
      以前は、結論から先に言わずにダラダラ補足や経緯から先に説明してしまい、<br/>
      叱責される経験が多々ありました。<br/>
      これを意識することでだいぶそのような叱責はなくなってきたと実感しています。<br/>
      <br/>
      <SubSectionBlock sectionText="褒めと感謝" />
      どんなに小さいことでも、褒めたり感謝をします。<br/>
      「あざす」「いいっすね」「すばらしい」の精神を常に持つように心がけます。<br/>
      <br/>
      褒められたり感謝されたりして嬉しくない人はいないですよね。<br/>
      <br/>
      <SubSectionBlock sectionText="軽い（フランク）なトーンで話す" />
      軽いトーンで話すことでフレンドリーな印象を与えられると思います。<br/>
      話しやすいフランクな雰囲気づくりを心がけています。<br/>
      <br/>
      さとうだったら気兼ねなく話しかけられるなと思われるようにしています。<br/>
      <br/>
      もちろん仕事では、堅くキッチリしなければいけない場面もあるので、TPOはわきまえます。<br/>
      <br/>
      <SubSectionBlock sectionText="同じことを聞かれても嫌な顔をしない" />
      1回教わったのに忘れてしまったけど聞きづらい、みたいな経験誰もがあると思います。<br/>
      でも考えてみてください。なんでも1度で覚えられるなんて天才です。そんな天才そうそういません。<br/>
      <br/>
      同じ質問をして嫌な顔をされたら、もう聞きにいけなくなってしまいます。<br/>
      聞きにいけたとしても、多少は萎縮してしまうでしょう。<br/>
      <br/>
      わかってないのに聞きにこれなくなって、そのままになっちゃう状態は最悪です。<br/>
      <br/>
      <SubSectionBlock sectionText="無難な言葉（単語）に言い換える" />
      ネガティブに捉えられる可能性があったり、多様性を尊重していない単語は、言い換えられないか考えます。<br/>
      文面で配慮するのはちょっと難しいので、あえて具体例はここには書かないです。<br/>
      <br/>
      気になる方は（知り合いであれば）直接聞いてください。<br/>
      <br/>
      <SectionBlock sectionText="さいごに" />
      雰囲気が悪くて萎縮してしまうような職場環境は最悪です。<br/>
      序盤にも書きましたがコミュケーションロスは仕事への影響も大きいです。<br/>
      <br/>
      円滑なコミュケーションができるチームを作るためにメンバー各々が意識できたらベターだと思います。<br/>
    </BlogPage>
  );
}