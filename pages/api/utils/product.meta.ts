import urlMetadata from 'url-metadata'
import { Product } from './Product.type';



export class MetadataExtractor {

    extract = async (url: string) : Promise<Product> => {
        const metadata = await urlMetadata(url);
        const productName = metadata['og:title'];
        const productDescription = metadata['og:description'];
        return {
            name: productName,
            description: productDescription
        }
    }

}