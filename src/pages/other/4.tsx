import BlogPage from "@/components/BlogPage";
import SectionBlock from "@/components/SectionBlock";
import SubSectionBlock from "@/components/SubSectionBlock";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <BlogPage
      title="新型コロナに2回罹患してわかったこと"
      date="2024/06/21"
      category="雑記"
      blogNo="4"
    >
      <div className="text-center font-black text-5xl lg:text-7xl ">
        しんどい！  
      </div>
      
    </BlogPage>
  );
}
