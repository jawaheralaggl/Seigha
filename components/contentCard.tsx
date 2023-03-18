import React, { useState } from "react";


export default function ContentCard({item} : {item: string}) {
    const [isCopied, setCopied] = useState<boolean>(false);
    const copy = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopied(true);
    } 
    return (
        <div
            className="rounded-xl md:shadow-xl border-gray-100 
            md:border md:shadow-gray-200 dark:shadow-none 
            p-4 mx-2 md:dark:bg-gray-800 md:text-center
            flex flex-col dark:border-gray-600 
            " >
            <div>
                <span className="text-lg leading-6 mt-8 text-gray-400 dark:text-white">
                {item}
                </span>
            </div>
            <div className="md:mt-auto">
                <button
                    onClick={() => copy(item)}
                className={`
                md:mt-12
                mt-4
                px-12 py-2 text-sm font-medium text-center w-1/3
                md:w-full
                text-white rounded-3xl
                ${isCopied ? "bg-lightprimary" : "bg-primary"}
                `} >
                    {isCopied ? "تم النسخ" : "نسخ"}
                </button>
            </div>
            
            </div>                          
    )
}
