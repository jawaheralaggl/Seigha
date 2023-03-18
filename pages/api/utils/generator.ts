import { CallGPT } from "./gpt";
import { Product } from "./Product.type";
import Prompts from "./prompts"

export type ReponseGPT = string

export class ContentGenerator {
    PromptsFormatter = new Prompts();

    generateSocialMedia = async(product: Product, keywods: string) : Promise<ReponseGPT[]> => {
        console.log(`Keywords ${keywods}`)
        const prompt = this.PromptsFormatter.formatSocialMediaPrompt(product.name, product.description, keywods);
        const response = await CallGPT(prompt);
        return response;
    }

    generateAdvertisment = async(product: Product, keywods: string) : Promise<ReponseGPT[]> => {
        const prompt = this.PromptsFormatter.formatAdvertismentPrompt(product.name, product.description, keywods);
        const response = await CallGPT(prompt);
        return response;
    }

    generateImproveDescription = async(product: Product, keywods: string) : Promise<ReponseGPT[]> => {
        const prompt = this.PromptsFormatter.formatImproveDescriptionPrompt(product.name, product.description, keywods);
        const response = await CallGPT(prompt);
        return response;
    }


}