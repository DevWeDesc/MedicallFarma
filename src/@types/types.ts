import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";

export type NavType = {
  menuOpen: boolean;
  handleMenuOpen: () => void;
};

export type NavigationSocialMediaType = {
  title: string;
  href: string;
};

export type IDataNav = {
  href: string;
  name: string;
};

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
  href: string;
  subCategories?: string[];
};

export type ICategories = {
  image: string | StaticImageData | StaticImport;
  name: string;
  subCategories: ISubCategories[];
};

export type ISubCategories = {
  title: string;
  href?: string;
};

export type ICardAbout = {
  title: string;
  content: string | string[];
};

export type IListProductsData = {
  id: number;
  image: string | StaticImageData;
  category: string;
  subCatgegory: string;
  product: string;
  href: string;
  supplier: string;
  size?: string;
  // description?: { title: string; content: string }[];
};

export type IProducsCategoryComponent = {
  ImagePage: string | StaticImageData;
  titlePage: string;
  categoryAUX: string;
  listProductsCategory: IListProductsData[];
};
