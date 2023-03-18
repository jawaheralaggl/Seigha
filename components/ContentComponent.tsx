import React, { useState } from "react";
import { GPTResponse } from "../pages/create";
import ContentGrid from "./contentGrid";
import ContentSection from "./ContentSection";


export default function ContentComponent({socialMediaContent, advertismentContent, improvedDescription} : 
    {socialMediaContent: string[] | undefined, 
        advertismentContent: string[] | undefined, 
        improvedDescription: string[] | undefined, }) {

  return (
      <div className="flex justify-center">
        <div className="md:w-8/12 w-19/20 md:divide-y-0 divide-y">
            
                {
                    socialMediaContent && socialMediaContent.length > 0
                    && <ContentSection sectionName="محتوى منشورات" content={socialMediaContent} />
                }

                
                {
                    improvedDescription && improvedDescription.length > 0
                    && 
                    <div className="md:mt-24">
                        <ContentSection sectionName="وصف إعلاني" content={improvedDescription} />
                    </div>
                }
                

                
                {
                    advertismentContent && advertismentContent.length > 0
                    &&
                    <div className="md:mt-24">
                     <ContentSection sectionName="جمل إعلانية" content={advertismentContent} />
                    </div>
                }
                


                
            </div>
      </div>
    
);
}

