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
import IconDressing from "../public/IconDressings.png";
import IconAntissepsia from "../public/IconAntissepsia.png";
import IconMask from "../public/IconMask.png";

export const HighlightsProductsData: IProductsData[] = [
  {
    id: 1,
    image: Product1,
    name: "Amoxicilina",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Medicamentos", "Medicamento Genérico"],
  },
  {
    id: 2,
    image: Product2,
    name: "Estetoscópio Simples Adulto Premium",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
  },
  {
    id: 3,
    image: Product3,
    name: "Trophic Basic Enteral",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Dieta Enteral", "Nutrição Clínica", "Terapia Nutricional"],
  },
  {
    id: 4,
    image: Product1,
    name: "Amoxicilina",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Medicamentos", "Medicamento Genérico"],
  },
  {
    id: 5,
    image: Product2,
    name: "Estetoscópio Simples Adulto Premium",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
  },
  {
    id: 6,
    image: Product3,
    name: "Trophic Basic Enteral",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Dieta Enteral", "Nutrição Clínica", "Terapia Nutricional"],
  },
  {
    id: 7,
    image: Product1,
    name: "Amoxicilina",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Medicamentos", "Medicamento Genérico"],
  },
];

export const ProductsRecomendedData: IProductsData[] = [
  {
    id: 1,
    image: Product1,
    name: "Amoxicilina",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Medicamentos", "Medicamento Genérico"],

    description: [
      {
        title: "O que é amoxicilina?",
        content:
          "Amoxicilina 500 mg é um antibiótico indicado para o tratamento de uma gama de infecções causadas por bactérias. O medicamento é comercializado na forma de cápsulas não mastigáveis.",
      },
      {
        title: "Para que serve amoxicilina?",
        content:
          "Este medicamento, antibiótico eficaz contra grande variedade de bactérias, é indicado para tratamento de infecções bacterianas causadas por germes sensíveis à ação da amoxicilina. Entretanto, seu médico pode receitar este medicamento para outro uso.",
      },
      {
        title: "Gram-positivos",
        content:
          "Aeróbios: Enterococcus faecalis, Streptococcus pneumoniae, Streptococcus pyogenes, Streptococcus viridans, Staphylococcus aureus sensível a penicilina, espécies de Corynebacterium, Bacillus anthracis, Listeria monocytogenes. Anaeróbios: espécies de Clostridium.",
      },
    ],
  },
  {
    id: 2,
    image: Product2,
    name: "Estetoscópio Simples Adulto Premium",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Materiais Medicos", "Medicamentos", "Medicamento Genérico"],

    description: [
      {
        title: "O que é amoxicilina?",
        content:
          "Amoxicilina 500 mg é um antibiótico indicado para o tratamento de uma gama de infecções causadas por bactérias. O medicamento é comercializado na forma de cápsulas não mastigáveis.",
      },
      {
        title: "Para que serve amoxicilina?",
        content:
          "Este medicamento, antibiótico eficaz contra grande variedade de bactérias, é indicado para tratamento de infecções bacterianas causadas por germes sensíveis à ação da amoxicilina. Entretanto, seu médico pode receitar este medicamento para outro uso.",
      },
      {
        title: "Gram-positivos",
        content:
          "Aeróbios: Enterococcus faecalis, Streptococcus pneumoniae, Streptococcus pyogenes, Streptococcus viridans, Staphylococcus aureus sensível a penicilina, espécies de Corynebacterium, Bacillus anthracis, Listeria monocytogenes. Anaeróbios: espécies de Clostridium.",
      },
    ],
  },
  {
    id: 3,
    image: Product3,
    name: "Trophic Basic Enteral",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Dietas Enterais", "Nutrição Clínica", "Terapia Nutricional"],
    description: [
      {
        title: "O que é amoxicilina?",
        content:
          "Amoxicilina 500 mg é um antibiótico indicado para o tratamento de uma gama de infecções causadas por bactérias. O medicamento é comercializado na forma de cápsulas não mastigáveis.",
      },
      {
        title: "Para que serve amoxicilina?",
        content:
          "Este medicamento, antibiótico eficaz contra grande variedade de bactérias, é indicado para tratamento de infecções bacterianas causadas por germes sensíveis à ação da amoxicilina. Entretanto, seu médico pode receitar este medicamento para outro uso.",
      },
      {
        title: "Gram-positivos",
        content:
          "Aeróbios: Enterococcus faecalis, Streptococcus pneumoniae, Streptococcus pyogenes, Streptococcus viridans, Staphylococcus aureus sensível a penicilina, espécies de Corynebacterium, Bacillus anthracis, Listeria monocytogenes. Anaeróbios: espécies de Clostridium.",
      },
    ],
  },
  {
    id: 4,
    image: Product1,
    name: "Amoxicilina",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Medicamentos", "Medicamento Genérico"],
  },
  {
    id: 5,
    image: Product2,
    name: "Estetoscópio Simples Adulto Premium",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Materiais Medicos", "Medicamentos", "Medicamento Genérico"],
  },
  {
    id: 6,
    image: Product3,
    name: "Trophic Basic Enteral",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Medicamentos", "Medicamento Genérico"],
  },
];

export const CardSoluctionData: ICardSoluctions[] = [
  {
    image: IconMedicine,
    title: "Medicamentos",
    href: "/Medicamentos",
  },
  {
    image: IconDiet,
    title: "Dietas Enterais",
    href: "/Dietas Enterais",
  },
  {
    image: IconMaterial,
    title: "Materiais Médicos",
    href: "/Materiais Medicos",
  },
];

export const CategoriesData: ICategories[] = [
  { image: IconDressing, name: "Antissepsia e Higiene" },
  { image: IconMask, name: "Curativos" },
  { image: IconAntissepsia, name: "Soluções Descartáveis" },
  // { image: "", name: "Endoscopia" },
  // { image: "", name: "Nutrição e Dietas" },
  // { image: "", name: "Nutrição e Dietas" },
];

export const NavData: IDataNav[] = [
  { name: "Inicio", href: "#Init" },
  { name: "Sobre", href: "#About" },
  { name: "Produtos em Destaque", href: "#HighlightsProduct" },
  { name: "Soluções do Momento", href: "#Soluctions" },
  { name: "Categorias", href: "#Categories" },
  { name: "Fornecedores", href: "#Suppliers" },
  { name: "Produtos Recomendados", href: "#productRecomended" },
  { name: "Contatos", href: "#Contact" },
];
