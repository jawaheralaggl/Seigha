

export default class Prompts {

    formatSocialMediaPrompt = (productName: string, productDescription: string, keywods: string) => {
        return encodeURIComponent(`
        Suggest 3 social media post to encourge customers to buy an ecommerce product which has the name "${productName}",
        and described as "${productDescription}". 
        Rules: 
        - Write in Arabic. 
        ${keywods && `- Focus on writing about the following characteristics of the product: ${keywods}.`}
        - Limit each suggestion to 200 characters.
        - Use emojis.
        - Use hashtags.
        - Come up with catchy and creative content.
        - Return the result in a json string array in this typescript type: string[] without new lines.`)
    }


    formatImproveDescriptionPrompt = (productName: string, productDescription: string, keywods: string) => {
        return encodeURIComponent(`
        Suggest 3 product description for an ecommerce product which has the name "${productName}",
        and described as "${productDescription}".
        Rules: 
        - Write in Arabic. 
        ${keywods && `- Focus on writing about the following characteristics of the product: ${keywods}.`}
        - Each suggestion must have between 30 to 60 words.
        - Return the result in a json string array in this typescript type: string[] without new lines.`)
    }

    formatAdvertismentPrompt = (productName: string, productDescription: string, keywods: string) => {
        return encodeURIComponent(`
        Suggest 3 catchy marketing content that could be dispalyed on a graphic picture
        to encourge customers to buy an ecommerce product which has the name "${productName}",
        and described as "${productDescription}".
        Rules: 
        - Write in Arabic. 
        ${keywods && `- Focus on writing about the following characteristics of the product: ${keywods}.`}
        - Limit each suggestion to less than 12 words.
        - Return the result in a json string array in this typescript type: string[] without new lines.`)
    }



}