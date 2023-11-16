import {
  ICardSoluctions,
  ICategories,
  IDataNav,
  IProductsData,
} from "../types/types";
import Product1 from "../public/ImageProduct1.png";
import Product2 from "../public/ImageProduct2.png";
import Product3 from "../public/ImageProduct3.png";
import IconDiet from "../public/IconDiet.png";
import IconMedicine from "../public/IconMedicine.png";
import IconMaterial from "../public/IconMaterial.png";

export const HighlightsProductsData: IProductsData[] = [
  {
    id: 1,
    image: Product1,
    name: "Amoxicilina",
    content:
      "Amoxicilina é um antibiótico amplamente utilizado para tratar infecções bacterianas.",
    supplier: "Fornecido por Nativita",
  },
  {
    id: 2,
    image: Product2,
    name: "Estetoscópio Simples Adulto Premium",
    content:
      "Amoxicilina é um antibiótico amplamente utilizado para tratar infecções bacterianas.",
    supplier: "Fornecido por Nativita",
  },
  {
    id: 3,
    image: Product3,
    name: "Trophic Basic Enteral",
    content:
      "Amoxicilina é um antibiótico amplamente utilizado para tratar infecções bacterianas.",
    supplier: "Fornecido por Nativita",
  },
  {
    id: 4,
    image: Product1,
    name: "Amoxicilina",
    content:
      "Amoxicilina é um antibiótico amplamente utilizado para tratar infecções bacterianas.",
    supplier: "Fornecido por Nativita",
  },
];

export const ProductsRecomendedData: IProductsData[] = [
  {
    id: 1,
    image: Product1,
    name: "Amoxicilina",
    content:
      "Amoxicilina é um antibiótico amplamente utilizado para tratar infecções bacterianas.",
    supplier: "Fornecido por Nativita",
  },
  {
    id: 2,
    image: Product2,
    name: "Estetoscópio Simples Adulto Premium",
    content:
      "Amoxicilina é um antibiótico amplamente utilizado para tratar infecções bacterianas.",
    supplier: "Fornecido por Nativita",
  },
  {
    id: 3,
    image: Product3,
    name: "Trophic Basic Enteral",
    content:
      "Amoxicilina é um antibiótico amplamente utilizado para tratar infecções bacterianas.",
    supplier: "Fornecido por Nativita",
  },
  {
    id: 4,
    image: Product1,
    name: "Amoxicilina",
    content:
      "Amoxicilina é um antibiótico amplamente utilizado para tratar infecções bacterianas.",
    supplier: "Fornecido por Nativita",
  },
  {
    id: 5,
    image: Product2,
    name: "Estetoscópio Simples Adulto Premium",
    content:
      "Amoxicilina é um antibiótico amplamente utilizado para tratar infecções bacterianas.",
    supplier: "Fornecido por Nativita",
  },
  {
    id: 6,
    image: Product3,
    name: "Trophic Basic Enteral",
    content:
      "Amoxicilina é um antibiótico amplamente utilizado para tratar infecções bacterianas.",
    supplier: "Fornecido por Nativita",
  },
];

export const CardSoluctionData: ICardSoluctions[] = [
  { image: IconMedicine, title: "Medicamentos" },
  { image: IconDiet, title: "Dietas Enterais" },
  { image: IconMaterial, title: "Materiais Médicos" },
];

export const CategoriesData: ICategories[] = [
  { image: "", name: "Antissepsia e Higiene" },
  { image: "", name: "Curativos" },
  { image: "", name: "Soluções Descartáveis" },
  { image: "", name: "Endoscopia" },
  { image: "", name: "Nutrição e Dietas" },
  { image: "", name: "Nutrição e Dietas" },
];

export const NavData: IDataNav[] = [
  { name: "Produtos em Destaque" },
  { name: "Promoções" },
  { name: "Categorias" },
];
