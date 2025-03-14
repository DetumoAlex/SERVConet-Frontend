import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/"}></Link>
      <Hero/>
      <Footer/>
    </>
  );
}
