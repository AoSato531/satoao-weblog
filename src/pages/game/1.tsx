import SectionBlock from "@/components/SectionBlock";
import SubSectionBlock from "@/components/SubSectionBlock";
import BlogPage from "@/components/BlogPage";
import { Inter } from "next/font/google";
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <BlogPage
      title="[ぷよぷよ]GTRはむずかしい"
      date="2024/04/14"
      category="ゲーム"
      blogNo="1"
    >
      昨今のぷよぷよ（通ルール）ではGTRという連鎖の組み方が主流です。<br/>
      初心者からプロまで、ほとんどのプレイヤーが使っています。<br/>
      ぷよらー（ぷよぷよプレイヤーの呼称）の8割はこのGTRを使っていると言っても過言ではないでしょう。<br/>
      <br/>
      ぷよぷよの連鎖の形はたくさんたくさんありますが、<br/>
      8割以上のぷよらーが使っているならそりゃ強い形なんだろうし、<br/>
      GTRから覚えれば、なんならGTRだけ覚えればいいんじゃない？とも思うかもしれません。<br/>
      <br/>
      ただ、ぷよぷよをやったことない人が最初に学ぶ連鎖の形としては<br/>
      かなり難しいんじゃないか、ということを最近思ったので、その理由を書いていきます。<br/>
      <br/>
      さとうの推測や主観が多大に含まれます。<br/>
      あくまでさとう個人の考えだということを念頭に置いてください。<br/>
      <br/>
      <SectionBlock sectionText="結論" />
      まず結論から先に言うと、GTRがなぜ難しいかというと、<br/>
      <div className="font-bold">GTRは自由度が高すぎて視覚的に複雑な連鎖の形だから。</div>
      <br/>
      これに尽きると思います。<br/>
      どういうことやねんってことで理由をこれから書いていきます。<br/>
      <br/>
      <SectionBlock sectionText="GTRとは" />
      そもそもGTRとは下の図でいうフィールド左下の形をいいます。<br/>
      他にも派生形や左右反転した形などはありますが、一旦この形がGTRだと思っておけば良いです。<br/>
      <br/>
      <Image
        className="lg:w-[15vw] w-[30vw]"
        src="/images/game-1.png"
        width={256}
        height={448}
        alt="GTRの形"
      />
      <br/>
      諸説ありますが、GTRは「グレート田中連鎖」または「岐阜田中連鎖」の略だそうです。<br/>
      「田中」は考案者の名前からとられています。いわゆるエポニムですね。<br/>
      <br/>
      <SectionBlock sectionText="GTR以外の連鎖の形" />
      ここでGTR以外の他の連鎖の形も見てみます。<br/>
      初心者がまず覚える形として定番の2つの形を見てみます。<br/>
      <br/>
      <SubSectionBlock sectionText="階段積み" />
      下の形を階段積みといいます。ぷよぷよ初心者がまず覚える形の定番です。<br/>
      <br/>
      <Image
        className="lg:w-[15vw] w-[30vw]"
        src="/images/game-2.png"
        width={256}
        height={448}
        alt="階段積みの形"
      />
      <br/>
      左から3個繋がったぷよを消すと、上の1個だけ残ったぷよが降ってきて、右の列3つのぷよにくっついて連鎖になります。<br/>
      視覚的に連鎖の順序がわかりやすく、形もわかりやすいので、まず覚えるならこの形です。<br/>
      <br/>
      <SubSectionBlock sectionText="挟み込み" />
      下の形を挟み込みといいます。階段積みに慣れた人が次に覚えるのに定番の形です。<br/>
      階段積みに比べて、格段に組む難易度は高くなります。<br/>
      <br/>
      <Image
        className="lg:w-[15vw] w-[30vw]"
        src="/images/game-3.png"
        width={256}
        height={448}
        alt="挟み込みの形"
      />
      <br/>
      左からぷよを消すと、上の1個のぷよが降ってきて、同じ列で下にある2つのぷよと右の1つのぷよとくっついて連鎖になります。<br/>
      階段積みと同じく連鎖の順序はわかりやすいですが、実際に組んでみるとかなり難しいです。<br/>
      <br/>
      <SubSectionBlock sectionText="階段積みと挟み込みの共通点" />
      上記2つの形の共通点は、最初から最後まで形が決まりきっていること。<br/>
      厳密にはどちらの形も、もう少し自由度は高いですが、ほぼこの形で組まれることが多いです<br/>
      そして、（組みやすさはおいといて）視覚的に連鎖の流れがわかりやすいこと。<br/>
      どちらの形も左から右へ流れるように連鎖が続いていくのがわかるのではないかと思います。<br/>
      <br/>
      共通点としてこの2点が挙げられます。<br/>
      <br/>
      <SectionBlock sectionText="GTRのむずかしさ" />
      ではGTRはどうなのかもう1度見てみます。<br/>
      <br/>
      <Image
        className="lg:w-[15vw] w-[30vw]"
        src="/images/game-1.png"
        width={256}
        height={448}
        alt="GTRの形"
      />
      <br/>
      上記2つの形と比べると、2連鎖分しか定義されていません。<br/>
      つまりこの2連鎖分以外の部分は自由に組んでいいということです。<br/>
      ある程度定石はありますが、ここ以外の部分をどんな形を組んでもGTRと呼ばれます。<br/>
      <br/>
      <SubSectionBlock sectionText="GTRの自由度の高さ" />
      GTRの右側には正解はありません。<br/>
      ざっと上記2つの形のように5〜6連鎖になるように例を挙げていきます。<br/>
      <br/>
      <div className="font-bold">例その1</div>
      <Image
        className="lg:w-[15vw] w-[30vw]"
        src="/images/game-4.png"
        width={256}
        height={448}
        alt="GTRの右側の例1"
      />
      <br/>
      GTRの2連鎖の後は、黄→緑→赤の順番で消えます。<br/>
      挟み込みっぽい形から上に続いていくようなイメージです。<br/>
      <br/>
      <div className="font-bold">例その2</div>
      <Image
        className="lg:w-[15vw] w-[30vw]"
        src="/images/game-5.png"
        width={256}
        height={448}
        alt="GTRの右側の例2"
      />
      <br/>
      同じく、黄→緑→赤の順番で消えます。<br/>
      連鎖の順序は左から右へ流れていくだけなので、<br/>
      その1よりは視覚的にわかりやすいかもですが、階段積みや挟み込みよりは複雑です。<br/>
      <br/>
      <div className="font-bold">例その3</div>
      <Image
        className="lg:w-[15vw] w-[30vw]"
        src="/images/game-6.png"
        width={256}
        height={448}
        alt="GTRの右側の例3"
      />
      <br/>
      上記2つの例は5連鎖でしたが、こちらは6連鎖にしてみました。<br/>
      GTRの2連鎖の後は黄が消えた後に、階段積みの要領で緑→青と続き、最後に残った赤が消えます。<br/>
      ここまでくると初心者は連鎖の順序を追うのに精一杯だと思います。<br/>
      <br/>
      もちろんこの3つの例以外にも無限に形は存在します。<br/>
      7連鎖、8連鎖と連鎖数を伸ばそうとしすると、そのパターンは数え切れません。<br/>
      <br/>
      自由度が高いということは、ある程度のパターンを頭に入れておく必要があります。<br/>
      そしてどのパターンで連鎖構築をしていくかをツモから判断して短い時間で決定する柔軟性が必要となります。<br/>
      <br/>
      <SubSectionBlock sectionText="GTRの視覚的な複雑さ" />
      上記3つの例ですが、連鎖の順序がそれぞれ少し異なります。<br/>
      例その2以外は階段積みや挟み込みのように1方向に順序が流れていく感じでもありません。<br/>
      <br/>
      階段積みや挟み込みももっと連鎖数を伸ばすとなれば、<br/>
      折り返しというテクニックが必要になって、もう少し複雑になりますが、<br/>
      GTRよりはまだマシなのではないかと思います。<br/>
      <br/>
      <SectionBlock sectionText="もう一度結論" />
      GTRがなぜ難しいかというと、<br/>
      <div className="font-bold">GTRは自由度が高すぎて視覚的に複雑な連鎖の形だから。</div>
      <br/>
      上記の理由を読んだあとなら、ある程度わかってもらえたかと思います。<br/>
      <br/>
      <SectionBlock sectionText="さいごに" />
      とはいえGTRは強いです。習得するのは結構時間がかかりますが、間違いなく強いです。<br/>
      そして、組めるようになると楽しいです。（どんな形でも新しく組めるようになったら楽しいけど）<br/>
      ただ、ぷよぷよ初心者の方はGTRより先に階段積みや挟み込みを覚えるのをオススメだという話です。<br/>
      <br/>
      ただし最初にも申したようにさとうの推測が主観が多大に含まれているので、<br/>
      もしかしたら、これらの理由以外にもGTRの難しさはあるのかもしれません。<br/>
      <br/>
      という予防線を最後に張っておわりです。<br/>
    </BlogPage>
  );
}
