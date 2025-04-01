// This is the Home page
// The Navbar component is imported from the components folder
// The Hero component is imported from the components folder
// The Footer component is imported from the components folder
// The Link component is imported from the next/link module
// The Hero component is rendered
// The Footer component is rendered
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
