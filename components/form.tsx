import { useState } from "react";
import FirstStep from "./FirstStep";
import ContentGrid from "./contentGrid";
import ServicesStep from "./services";
import Steps from "./Steps";
import ContentSection from "./ContentSection";
import ContentComponent from "./ContentComponent";


export default function Form({isLoading, hasError, onGenerate} : {isLoading: boolean,
    hasError: boolean,
    onGenerate: (
        productName: string, productDescription: string, keywords: string,
        options: {socialMedia: boolean, 
            improveDescription: boolean,
            advertise: boolean}
    ) => void}) {
    const [step, setStep] =  useState<number>(1)
    const [productName, setProductName] = useState<string>("")
    const [productDescription, setProductDescription] = useState<string>("")
    const [keywords, setKeywords] = useState<string>("")

    const onProductFilled = async(productName: string, productDescription: string, keywords: string) => {
        setProductName(productName);
        setProductDescription(productDescription);
        setKeywords(keywords);
        setStep(2);
    }

    const onServicesFilled = async (
        socialMedia: boolean, 
        improveDescription: boolean,
        advertise: boolean
    ) => {
        const options = { socialMedia,  improveDescription, advertise }
        onGenerate(productName, productDescription, keywords, options);
    }

    const onStepClick = (step: number) => {
        setStep(step);
    }

    return (
        <div className="flex justify-center">
            {
                step === 1 && 
                <div className="md:bg-white md:dark:bg-gray-700      md:mt-0 border-1 border-gray-100 md:shadow-2xl rounded-2xl md:p-8">
                        {step < 3 && <Steps onStepClick={onStepClick} step={step} />}
                        <div className="text-center"> <div className="mt-8 w-10/12 inline-block 
                        dark:border-gray-700 rounded-full
                        md:dark:border-gray-400
                        align-middle flex-grow border-t border-gray-200"> </div></div>
                        <div className="mt-8">
                            <FirstStep onContinue={onProductFilled} />
                        </div>
                </div>
            }
            {            
                step === 2 &&
                <div className="md:bg-white md:dark:bg-gray-700 
                        
                     md:mt-0 border-1 border-gray-100 md:shadow-2xl rounded-2xl md:p-8 md:w-1/2">
                        {step < 3 && <Steps onStepClick={onStepClick} step={step} />}
                        <div className="text-center"> <div className="mt-8 w-10/12 inline-block 
                        dark:border-gray-700 rounded-full
                        md:dark:border-gray-400
                        align-middle flex-grow border-t border-gray-200"> </div></div>
                        <div className="mt-8 mx-12 md:mx-6 ">
                            <ServicesStep isLoading={isLoading} onContinue={onServicesFilled} />
                            {
                                hasError &&
                                <div className="text-center text-red-600">
                                <span>خطأ، الرجاء المحاولة مرة أخرى</span>
                                </div>
                            }
                        </div>
                    </div>
            }
        </div>
    )

}
