import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header({ text1 , url1 , text2 , url2 , text3 , url3 }: Props) {
  return (
    <main>
      <div className="bg-white h-12 group flex items-center m-breadcrumb-margin text-blue-700">
      <div className="underline"><Link href={"/"}>TOP</Link></div>
        {url1 && <div className="text-black">　＞　</div>}
        {url1 && <div className="underline"><Link href={url1}>{text1}</Link></div>}
        {url2 && <div className="text-black">　＞　</div>}
        {url2 && <div className="underline"><Link href={url2}>{text2}</Link></div>}
        {url3 && <div className="text-black">　＞　</div>}
        {url3 && <div className="underline"><Link href={url3}>{text3}</Link></div>}
      </div>
    </main>
  );
}

type Props = {
  text1?: string,
  url1?: string,
  text2?: string,
  url2?: string,
  text3?: string,
  url3?: string,
}
