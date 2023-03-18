import React, { useState } from "react";
import ContentCard from "./contentCard";


export default function ContentGrid({content} : {content: string[]}) {
  return (
    <div>
        <div className="rounded-lg md:mt-4 sm:grid sm:grid-cols-3 ">
        {
            content && content.map((item) => 
            {
                return (
                    <ContentCard key={item} item={item} />
                )
            })
        }
        </div>              
    </div>
);
}
