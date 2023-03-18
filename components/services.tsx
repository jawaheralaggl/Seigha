import React, { useState } from "react";
import CountdownTimer from "./countDown";


export default function ServicesStep({isLoading, onContinue}:{
  isLoading: boolean,
  onContinue:(socialMedia: boolean, 
  improveDescription: boolean, advertise: boolean) => void}) {
  const [socialMedia, setSocialMedia] = useState<boolean>(false);
  const [improveDescription, setImproveDescription] = useState<boolean>(false);
  const [advertise, setAdvertise] = useState<boolean>(false);


  return (
    <div className="mt-12">
      <span className="text-2xl">
        الخدمات
      </span>
      <br/>
      <br/>
      <span className="mt-8 text-gray-400 text-xl">
      اختر الخدمات المناسبة لمنتجك
      </span>
      <div className="mt-8 rounded-lg
      sm:grid sm:grid-cols-2 sm:gap-px">
     <div
        className='relative'>
        <div className="py-8">
        <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              onChange={() => setSocialMedia(!socialMedia)}
              type="checkbox"
              className="h-6 w-6 rounded-lg 
              text-primary"
            />
            
          <span className="mx-2 text-xl leading-6 text-gray-900 dark:text-white">
          محتوى منشورات
          </span>
          <p className="mx-8 mt-2 text-lg text-gray-400">
          منشورات تسويقية خاصة بمواقع التواصل
الاجتماعي (تويتر، انستقرام، إلخ)
          </p>
        </div>
      </div>
      <div
        className='relative'>
        <div className="py-8">
        <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              onChange={() => setImproveDescription(!improveDescription)}
              className="h-6 w-6 rounded-lg 
              text-primary"
            />
            
          <span className="mx-2 text-xl leading-6 text-gray-900 dark:text-white">
          وصف إعلاني
          </span>
          <p className="mx-8 mt-2 text-lg text-gray-400">
          تحسين وصف المنتج الموجود على صفحتك
          </p>
        </div>
      </div>
      <div
        className='relative'>
        <div className="py-8">
        <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              onChange={() => setAdvertise(!advertise)}
              className="h-6 w-6 rounded-lg 
              text-primary"
            />
            
          <span className="mx-2 text-xl leading-6 text-gray-900 dark:text-white">
          جملة إعلانية
          </span>
          <p className="mx-8 mt-2 text-lg text-gray-400">
          جملة تسويقية لمنتجك
          </p>
        </div>
      </div>
      
  </div>

         <div className="mt-6 sm:col-span-6">
              {
                !isLoading
                && 
                <button
              onClick={() => onContinue(socialMedia, improveDescription, advertise)}
                className="px-12 py-2 text-lg font-medium text-center
                w-full  text-white bg-primary rounded-3xl ">
                تأكيد
              </button>
              }
              
              

            </div>
            { isLoading &&
              <CountdownTimer minutes={0} seconds={30} />
            }
            {
                isLoading && 
                <div className="text-center">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 
                inline-block align-middle
                animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                </div>
              }
    </div>
);
}
