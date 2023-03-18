import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

export default function FirstStep({onContinue} : {
  onContinue: (productName: string, productDescription: string, keywords: string) => void}) {
  const [productUrl, setProductUrl] = useState<string>("");
  const [productName, setProductName] = useState<string>();
  const [productDescription, setProductDescription] = useState<string>();
  const [keywords, setKeywords] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const urlPatternValidation = (URL: string) => {
    const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
    return regex.test(URL);
  };

  const updateMeta = async(productUrl:string) => {
    if (!isLoading && 
      productUrl &&
      productUrl.length > 0){
      if (!urlPatternValidation(productUrl)){
        alert("رابط غير صحيح")
        return;
      }
      getMetadata(productUrl);
      
    }
  }

  const getMetadata = async (productUrl: string) => {
    setLoading(true);
    setHasError(false);
    const config = {headers: {"Content-Type": "application/json; charset=utf8"},  method: "POST", }
    const req = fetch("/api/extractMetadata", {body: JSON.stringify({productUrl}), ...config});
    req.then((res) => res.json())
    .then((meta) => {
      setLoading(false)
      if (meta == null){
        setHasError(true);
        return;
      }
      setProductName(meta.name);
      setProductDescription(meta.description);
      setLoading(false)
    })
    .catch((error) => {
      setHasError(true);
      setLoading(false);
    });
}


  return (
    <div className="min-w-full ">  
      <span className="text-2xl">
        مرحبًا 👋
      </span>
      <br/>
      <span className="text-gray-400 text-xl">
      زودنا بالبيانات التالية حتى نقدر نساعدك بشكل أفضل
      </span>

    <div className="mt-8">
      <label  className="block text-xl leading-6 
      text-gray-600 dark:text-white">
      رابط المنتج *
      </label>
      <input
          type="text"
          placeholder="ألصق رابط المنتج هنا"
          required
          onChange={(e) => {
            setProductUrl(e.target.value)
            updateMeta(e.target.value);
          }}
          disabled={isLoading}
          className="mt-4 block w-full min-w-0 flex-1 rounded-xl
          dark:bg-gray-900
          dark:placeholder:text-gray-600
          dark:border-gray-600
          dark:text-white
          caret-primary
          p-4
          focus:ring-primary
          border border-gray-200
           py-1.5 text-gray-900  
           placeholder:text-gray-300
             sm:text-sm sm:leading-6"
        />

    </div>

    <div>
      <span className="text-gray-400">
        {productName}
      </span>
    </div>

    <div className="mt-6">
      <label className="block text-xl font-medium leading-6 text-gray-600 dark:text-white">
      شيء ودك نركز عليه؟ (اختياري)
      </label>
      <div className="mt-4">
        <textarea
          id="keywords"
          name="keywords"
          placeholder="كلمات مفتاحية، مزايا، إلخ"
          rows={3}
          
          onChange={e => setKeywords(e.target.value)}
          className="
          dark:bg-gray-900
          dark:text-white
          caret-primary
          focus:ring-primary
          dark:placeholder:text-gray-600
          dark:border-gray-600
          block w-full min-w-0 flex-1 rounded-xl
          p-4
          resize-none
          border border-gray-200
           py-1.5 text-gray-900  
           placeholder:text-gray-300
             sm:text-sm sm:leading-6"
          defaultValue={''}
        />
      </div>
    </div>


    <div className="mt-6">
      {
        !isLoading
        &&
        <button
        onClick={() => {
          if (productName && productDescription){
            onContinue(productName, productDescription, keywords);  
          }
          
        }}
        disabled={!(productName && productDescription)}
        className="px-12 py-2 text-lg font-medium text-center
        w-full
        disabled:bg-gray-300
        dark:disabled:bg-gray-800
        dark:disabled:text-gray-600
        text-white bg-primary rounded-3xl ">
        المتابعة
      </button>
      }
      {
        isLoading 
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
        hasError 
        && <div className="text-center text-red-600">
            <span>حدث خطأ، تأكد من نسخك لرابط صحيح</span>

        </div>
      }
    </div>



  </div>

  );
}
