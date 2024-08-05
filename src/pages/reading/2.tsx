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
      title="死にカタログ"
      date="2024/08/05"
      category="読書メモ"
      blogNo="2"
    >
      読了したので感想を残しとこうと思います。<br/>
      めちゃくちゃ稚拙かつ薄い感想ですが、それはしょうがないということで。<br/>
      <br/>
      Amazonリンクは<Link className="underline" target="_blank" href={"https://www.amazon.co.jp/死にカタログ-だいわ文庫-339-1-寄藤-文平/dp/4479306277/ref=sr_1_1?__mk_ja_JP=カタカナ&crid=2NSCGY3K6C7EA&dib=eyJ2IjoiMSJ9.O_bwrPP65TQxwwcNAzXrtku9wGdVwXgFUR52vaYYViQP78ydzmmhk5HPbjxRUXVMppptT-k612b8s4-oPN1JooLCuIVEDulEe2ZcUdVjIs1h8uq3yMDCIp1q-LGnjmxFuknrQrbztjI7Q5z_Qlh0qMBuPvRSnEPSasrGh9FfEdSW3p8gs0ACXNKdiRmiWdxEcpG2TwV4K7m56-RjS02dqIQIlHDyRZAcc9OwRioPy-tYZPFD4QKoMfajfG7G1Vk2HRNESprzcvVIkE2gkm9AYR1fy1lPp0xZJh_k2l17GXs.jvdNtls7dxYuGVoGw48KWtRiTulWhRnKf15bA4OaNUk&dib_tag=se&keywords=死にカタログ&qid=1722863954&sprefix=死にカタログ%2Caps%2C137&sr=8-1"}>こちら</Link>です。<br/>
      <br/>
      <SectionBlock sectionText="どんな本？" />
      死後の世界観や死因や死に場所など、いろいろな「死」についてがポップにかかれている本です。<br/>
      どちらかというと死の概念についての記載が多いかもしれません。<br/>
      暗い描写はほとんどありません。<br/>
      <br/>
      <SectionBlock sectionText="感想" />
      結論、そうとう面白かったです。文庫本で値段も安く、数百円の本としては相当楽しめました。
      <br/>
      私自身、死というものに対してもともとあまりネガティブに考えてはいませんでしたが、<br/>
      世界的に見ても死をネガティブに捉えない国や民族も多々あり、むしろポジティブさすら感じられました。<br/>
      <br/>
      死に対する価値観が変わったというか、より強固になったというか、そんな感覚を覚えました。<br/>
      <br/>
      挿絵に添えてある手書き文字が少々読みづらかったのが数少ないイマイチだと思ったポイントです。<br/>
    </BlogPage>
  );
}
