import SectionBlock from "@/components/SectionBlock";
import BlogPage from "@/components/BlogPage";
import { Inter } from "next/font/google";
import { YouTubeEmbed } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <BlogPage
      title="2024年にはじめて行ったアーティストのライブ"
      date="2024/12/29"
      category="音楽"
      blogNo="4"
    >
      今年2024年ももうすぐ終わってしまいます。<br/>
      そんな2024年、さとうは「好きだけど行ったことのないアーティストのライブに行く」をテーマに過ごしました。<br/>
      この1年間で初めてライブに行ったアーティストを紹介していきます。<br/>
      <br/>
      <SectionBlock sectionText="L'Arc〜en〜Ciel" />
      <YouTubeEmbed videoid="ZUaPim9C2cc"/><br/>
      さとうが音楽好きになったきっかけのバンド。<br/>
      ファン歴20年以上ですが、漸くライブに行くことができました。<br/>
      <br/>
      普段ライブではあまりやらない曲をメインにやるというコンセプトのライブらしく、<br/>
      昔のアルバム曲とかが流れたときは「え！？この曲聴けるの！？」となりました。<br/>
      <br/>
      Vivid Colorsのサビを観客で合唱するところでは、<br/>
      色々な感情が湧き上がって泣きそうになりました。<br/>
      <br/>
      <SectionBlock sectionText="LEONAIR" />
      <YouTubeEmbed videoid="tBRuJqWBEiQ"/><br/>
      DJ Mass MAD Izm*さんというコンポーザーがプロデュースしているミクスチャーバンドです。<br/>
      初のワンマンライブということで行ってきました。<br/>
      <br/>
      前座ではプロデューサーであるDJ MassさんのDJプレイを見ることができました。<br/>
      ライブハウスだったため、メンバーとの距離も近くて、かなり盛り上がれました<br/>
      <br/>
      ボーカルのH14さんが最近脱退したのが惜しいです。<br/>
      <br/>
      <SectionBlock sectionText="LINDBERG" />
      <YouTubeEmbed videoid="H7WiPWNrMWE"/><br/>
      デビュー35周年記念ライブツアーということで、行ってきました。<br/>
      さとうがファンになったときにはすでに解散していて、10年ほど前に再結成。<br/>
      <br/>
      ファンが選んだ曲のランキングがそのままセットリストになっているため、<br/>
      有名な曲ばかりで新参のさとうでも楽しめました。<br/>
      <br/>
      正直今年行ったライブの中でもかなり満足度が高かったです。<br/>
      <br/>
      <SectionBlock sectionText="SCANDAL" />
      <YouTubeEmbed videoid="t-qVp94jB1o"/><br/>
      ポケモン映画主題歌きっかけで知り、好きになったバンドです。<br/>
      昔はキュートな感じの楽曲が多かった印象ですが、最近はめちゃくちゃカッコイイ曲ばかり。<br/>
      <br/>
      メンバーのひとりがさとうと生年月日が全く一緒で親近感がわきます。<br/>
      <br/>
      ライブ自体は真夏で身動きが取れないくらい満員だったので、体調の問題で途中で会場の外に出てしまいました。<br/>
      そのため、個人的に不完全燃焼感が強いです。また全力で楽しむために行きたいと思います。<br/>
      <br/>
      <SectionBlock sectionText="神保彰" />
      <YouTubeEmbed videoid="akOeX7zAvjI"/><br/>
      さとうが最も尊敬するドラマーのライブです。<br/>
      シグネイチャーモデルのスティックも使っていたので、感激でした。<br/>
      <br/>
      正確無比だけど、めちゃくちゃ楽しそうに叩く姿は最高でした。<br/>
      休憩時間では実際に機材の近くにいけて機材を見ることもできました。<br/>
      ライブ後は握手してお話もしてツーショットで写真も撮っていただきました。<br/>
      <br/>
      高校のころからの憧れだったので、夢が叶ってうれしかったです。<br/>
      <br/>
      <SectionBlock sectionText="LOVE PSYCHEDELICO" />
      <YouTubeEmbed videoid="bKn_lz6NoBA"/><br/>
      大学生くらいにハマったバンドです。<br/>
      帰国子女のボーカルKUMIさんの発音がとても心地よかったです。<br/>
      <br/>
      音源だと独特なダウナーな雰囲気がたまらなく癖になるのですが、<br/>
      ライブではそれプラス力強さが増していました。<br/>
      <br/>
      ライブで聴いて、直接音を感じることで、より好きになったバンドです。<br/>
      <br/>
      <SectionBlock sectionText="YUKI" />
      <YouTubeEmbed videoid="Lnj1SLrcIJA"/><br/>
      こちらもファン歴20年でやっといけたライブです。<br/>
      しかもツアーの千秋楽でした。初ライブでこれはうれしい。<br/>
      <br/>
      YUKIさんはいつでもかわいいですね。<br/>
      JOYで観客席であの振りができたのが最高に良い思い出です。<br/>
      力強くてパワーがすごくみなぎっていました。<br/>
      <br/>
      今年の〆のライブがこれで本当に良かったと思います。<br/>
      <br/>
      <SectionBlock sectionText="さいごに" />
      今年はいろんなライブに行けて良い1年でした。<br/>
      来年はもっといろんなライブに行って、好きな音楽を身体で感じたいと思います。<br/>
      <br/>
    </BlogPage>
  );
}
