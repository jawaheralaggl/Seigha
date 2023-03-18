
  
  export default function Steps({step = 1, onStepClick}: {step: number, onStepClick: (step: number) => void}) {
    const selected = "bg-primary text-white"
    const not_selected = "bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-400"
    return (
        <>
        <div className="flex justify-center">
        <div id="main" className="p-2 justify-evenly w-9/12 flex items-center"> 
        <span 
        onClick={() => onStepClick(1)}
        className={`${selected} rounded-full w-8 h-8 text-center`}>
            <span className="inline-block align-middle">1</span>
        </span> 

        <span className="rounded-full w-16 mx-4 h-1.5 bg-primary"/>
        


        <span 
            onClick={() => onStepClick(2)}
        className={`${step > 1 ? selected : not_selected} rounded-full w-8 h-8 text-center`}>
            <span className="inline-block align-middle">2</span>
        </span> 

        <span className={`${step > 1 ? selected : not_selected} rounded-full w-16 mx-4  h-1.5`}/>


        <span 
        className={`${step > 2 ? selected : not_selected} rounded-full w-8 h-8 text-center`}>
            <span className="inline-block align-middle">3</span>
        </span> 

    </div> 
      </div>
      </>
    )
  }
  