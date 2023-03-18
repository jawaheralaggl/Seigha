import axios from "axios";
const GPT_URL = "https://experimental.willow.vectara.io/v1/chat/completions";

const headers = {
    'x-api-key':`zqt_fj24aGKE2xFiQ7XqkW5vDNpJChNnYOWbgbDpjA`,
    'customer-id': '2117974120'
}

export const CallGPT = async(prompt: string) : Promise<[]> => {
    console.log(`Calling GRT ${prompt.substring(0,30)}...`)
    const requestBody = {"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content":  prompt}]}
    const response = await axios.post(GPT_URL, requestBody, {headers: headers});
    const data = response.data;
    if (data && data.choices && data.choices.length > 0){
        console.log(`GPT Response ${JSON.stringify(data.choices[0])}`)
        console.log(`GPT Response ${JSON.stringify(data.choices[0].message.content)}`)
        return  JSON.parse(data.choices[0].message.content);
    }
    return [];
}


