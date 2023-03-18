import Head from "next/head";
import { useState } from "react";
import ContentComponent from "../components/ContentComponent";
import ThemeChanger from "../components/DarkSwitch";
import Form from "../components/form";
import Navbar from "../components/navbar";




export type GPTResponse = {
  socialMediaContent?: string[],
  advertismentContent?: string[],
  improvedDescription?: string[]
}




export default function Create() {
  const [hasResult, setHasResult] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false)
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const [options, setOptions] = useState<{socialMedia: boolean,  improveDescription: boolean, advertise: boolean }>();
  const [socialMediaResponse, setSocialMediaResponse] = useState<string[]>()
  const [advertismentResponse, setAdvertismentResponse] = useState<string[]>()
  const [improvedDescriptionResponse, setImprovedDescriptionResponse] = useState<string[]>()
  const [hasError, setHasError] = useState<boolean>(false);
  const [regenerating, setRegenerating] = useState<boolean>(false);

  const config = {headers: {"Content-Type": "application/json; charset=utf8"},  method: "POST", }


  const generateContent = async (
    productName: string,
    productDescription: string,
    keywords: string,
    options: {
        socialMedia: boolean, 
        improveDescription: boolean,
        advertise: boolean
    } | undefined
  ) => {
    setHasError(false);
    setProductName(productName)
    setProductDescription(productDescription)
    setKeywords(keywords)
    setOptions(options);
    setLoading(true);
    if (!options)
      return;
    if (options.socialMedia){
      await generateSocialMedia(productName, productDescription, keywords);
    }

    if (options.advertise){
      await generateAdvertisment(productName, productDescription, keywords);
    }

    if (options.improveDescription){
      await generateImprovedDescription(productName, productDescription, keywords);
    }
    setLoading(false);
  };


  const generateSocialMedia = async(
    productName: string, productDescription: string, keywords: string) => {
    const req = fetch("/api/generateSocialMedia", {body: JSON.stringify({productName, productDescription, keywords }), ...config});
    await req
    .then((res) => res.json())
    .then((data) => {
      setSocialMediaResponse(data);
      setHasResult(true);
    })
    .catch((error) => {
      setLoading(false);
      setHasError(true);
    })
  }

  const generateAdvertisment = async(productName: string, productDescription: string, keywords: string) => {
    const req = fetch("/api/generateAdvertisment", {body: JSON.stringify({productName, productDescription, keywords }), ...config});
    await req.then((res) => res.json()).then((data) => {
      setAdvertismentResponse(data);
      setHasResult(true);
    }).catch((error) => {
      setHasError(true);
    })
  }

  const generateImprovedDescription = async(productName: string, productDescription: string, keywords: string) => {
    const req = fetch("/api/generateImproveDescription", {body: JSON.stringify({productName, productDescription, keywords }), ...config});
    await req.then((res) => res.json()).then((data) => {
      setImprovedDescriptionResponse(data);
      setHasResult(true);
    }).catch((error) => {
      setHasError(true);
    })
  }

  const regenerate = async() => {
    setRegenerating(true);
    setHasResult(false);
    generateContent(productName, productDescription, keywords, options);
    setLoading(true);
  }


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
        <div>
        <div className="w-full">
          <nav className="container float left flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
            <ThemeChanger />
          </nav>

        </div>
        <div dir="rtl" className="body-font m-auto flex flex-col justify-center items-center light:bg-lightbackground font-sfpro">
          
          <div className="m-auto">
          {!hasResult && !regenerating && <Form  hasError={hasError} onGenerate={generateContent} isLoading={isLoading}/> }
          {hasResult && 
          <ContentComponent
          socialMediaContent={socialMediaResponse}
          advertismentContent={advertismentResponse}
          improvedDescription={improvedDescriptionResponse} />}
          </div>

          {
            isLoading && (hasResult || regenerating)
            && 
            <div className="text-center">
            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 
            inline-block align-middle
            animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            </div>  
          }

          {
              !isLoading && hasResult &&
              <div className="bottom-0 mb-24 flex flex-col mt-24 mx-auto items-center justify-center">
              <span className="text-2xl text-center ">النتائج غير مناسبة؟</span>
              <button 
              onClick={() => regenerate()}
              className="px-12 py-2 text-lg mt-8 font-medium text-center text-white bg-primary rounded-3xl">
                صيغها مرة أخرى
              </button>
            </div>
  
          }
            
        </div>
        </div>
      </>
    );
  }
  