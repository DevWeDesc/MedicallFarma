import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";

export type IProductsData = {
  id: number;
  image: StaticImageData | string;
  name: string;
  content: string;
  contentCompleted?: string;
  description?: { title: string; content: string }[];
  categories?: string[];
  supplier: string;
  size?: string;
};

// type ICategoriesProducts = {
//   category: string;
// };

export type ICardSoluctions = {
  title: string;
  image: StaticImageData | string;
  href: string;
};

export type ICategories = {
  image: string | StaticImageData;
  name: string;
};

export type IDataNav = {
  name: string;
};
