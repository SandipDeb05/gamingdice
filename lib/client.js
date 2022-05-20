import SanityClient from "@sanity/client";
// import { ImageUrlBuilder } from "next-sanity-image";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "nn0khw5h",
  dataset: "production",
  apiVersion: "2022-05-15",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
