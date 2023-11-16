import { StaticImageData } from "next/image";

export type IProductsData = {
  id: number;
  image: StaticImageData | string;
  name: string;
  content: string;
  contentCompleted?: string;
  description?: string;
  categories?: ICategoriesProducts[];
  supplier: string;
};

type ICategoriesProducts = {
  category: string;
};

export type ICardSoluctions = {
  title: string;
  image: StaticImageData | string;
};

export type ICategories = {
  image: string | StaticImageData;
  name: string;
};

export type IDataNav = {
  name: string;
};
