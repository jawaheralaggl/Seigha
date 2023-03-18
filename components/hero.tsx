import Image from "next/image";
import Container from "./container";
import Form from "./FirstStep";
export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold 
            leading-snug tracking-tight text-primary
            lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              ابدأ بصياغة محتواك بكل سرعة وسهولة!
            </h1>
            <p className="py-5 text-xl font-weight-400
             text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            أداة تساعدك في صياغة المحتوى الإعلاني والتسويقي للمنتجات الخاصة بمتجرك الإلكتروني بشكل فوري، لأن نجاحك لا يحتاج إلى تعقيد!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/create"
                className="px-12 py-2 text-lg font-medium text-center
                text-white bg-primary rounded-3xl ">
                صيغها الآن
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={"/img/myhero.png"}
              width="616"
              height="617"
              alt="Hero Illustration"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
