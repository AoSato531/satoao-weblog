import BlogPage from "@/components/BlogPage";
import SectionBlock from "@/components/SectionBlock";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <BlogPage
      title="このサイトについて"
      date="2024/04/07"
      category="雑記"
      blogNo="2"
    >
      <SectionBlock sectionText="このサイトってなに？" />
      さとうがNext.js+tailwindのお勉強をするために制作したサイトです。 <br />
      ブログ的になにかてきとうに文章をつらつらと貯めていきます。 <br />
      <br />
      内容としては主に趣味のことや技術のことがメインになります。 <br />
      <br />
      <SectionBlock sectionText="ドメインについて" />
      昔推していた某アイドルグループの頭文字とメンバーの頭文字で構成されています。 <br />
      <br />
      <SectionBlock sectionText="カラーリングについて" />
      オレンジと青とピンクを基調に制作しています。 <br />
      前述した某アイドルグループのそれぞれのメンバーカラーから着想を得ています。 <br />
      <br />
      オレンジのメンバーをとくに推していたため、オレンジをメインカラーとして、 <br />
      他メンバーのカラーである青とピンクをアクセントにしています。 <br />
    </BlogPage>
  );
}
