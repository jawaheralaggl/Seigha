// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ContentGenerator, ReponseGPT } from './utils/generator';
import { MetadataExtractor } from './utils/product.meta';
import { Product } from './utils/Product.type';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | null>
) {
  const productUrl = encodeURI(req.body.productUrl);
  const product = await new MetadataExtractor().extract(productUrl);
  if (product) {
    return res.status(200).json(product);
  }
  return res.status(500).json(null);
}
