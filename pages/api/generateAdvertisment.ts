// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ContentGenerator, ReponseGPT } from './utils/generator';
import { MetadataExtractor } from './utils/product.meta';
import { Product } from './utils/Product.type';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReponseGPT[]>
) {
  const productName = req.body.productName
  const productDescription = req.body.productDescription
  const keywords= req.body.keywords;
  const product : Product = {
    name: productName,
    description: productDescription
  }
  const generator = new ContentGenerator();
  const content = await generator.generateAdvertisment(product, keywords);
  if (content) {
    return res.status(200).json(content);
  }
  res.status(500);
}
