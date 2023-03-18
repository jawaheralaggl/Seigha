import React, { useState } from "react";
import ContentGrid from "./contentGrid";


export default function ContentSection({sectionName, content} : 
    {sectionName: string, 
    content: string[]}) {

  return (
    <div className="md:mt-0 mt-4">
        <span className="text-3xl 
        text-gray-900
        font-bold
        
        mx-4
        dark:text-white">
            {sectionName}
        </span>
        <ContentGrid content={content} />
    </div>
);
}
