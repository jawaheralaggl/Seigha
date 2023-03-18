import Head from "next/head";
import Form from "../components/form";
import GeneratedContent from "../components/contentGrid";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import ServicesStep from "../components/services";
import Steps from "../components/Steps";
import Brands from "../components/brands";

export default function Home() {
  return (
    <>
      <Head>
        <title>صيغها - ابدأ بصياغة محتواك بكل سرعة وسهولة</title>
        <meta
          name="description"
          content="صيغها أداة تساعدك في صياغة المحتوى الإعلاني والتسويقي للمنتجات الخاصة بمتجرك الإلكتروني بشكل فوري"
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <div dir="rtl" className="body-font font-sfpro">
        <Navbar />
        
        <Hero />
        <Brands />
      </div>
      
    </>
  );
}
