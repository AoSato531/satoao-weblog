import Image from "next/image";
import Header from "../components/header";
import Content from "../components/content";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Content />
      
    </main>
  );
}
