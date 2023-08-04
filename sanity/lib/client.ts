import { createClient } from '@sanity/client'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})



// import { createClient } from "next-sanity";
// import imageUrlBuilder from '@sanity/image-url';

// export const client = createClient({
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     dataset: "production",
//     apiVersion: '2023-06-09',
//     token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
//     useCdn: true,
//   });
  
