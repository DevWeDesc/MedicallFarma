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
  image: string | StaticImageData;
  name: string;
  subCategories: string[];
};
