import Blog from "@/components/blogs";
import Career from "@/components/career";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Mean from "@/components/mean";
import Sector from "@/components/sector";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-[250%] flex flex-col home">
      <Header />
      <Hero />
      <Sector />
      <Blog />
      <Mean />
      <Career />
      <Footer />
    </div>
  );
}
