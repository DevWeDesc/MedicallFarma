import {
  ICardAbout,
  ICardSoluctions,
  ICategories,
  ISubCategories,
  IDataNav,
  IProductsData,
  NavigationSocialMediaType,
  IListProductsData,
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
import MedicallSuppliersImage from "../public/MedicallFarmaSuppliers/image 11.png";
import MedicallSuppliersImage2 from "../public/MedicallFarmaSuppliers/image 12.png";
import MedicallSuppliersImage5 from "../public/MedicallFarmaSuppliers/image 15.png";
import MedicallSuppliersImage6 from "../public/MedicallFarmaSuppliers/image 16.png";
import MedicallSuppliersImage7 from "../public/MedicallFarmaSuppliers/image 17.png";
import MedicallSuppliersImage8 from "../public/MedicallFarmaSuppliers/image 18.png";
import MedicallSuppliersImage9 from "../public/MedicallFarmaSuppliers/image 19.png";
import MedicallSuppliersImage10 from "../public/MedicallFarmaSuppliers/image 20.png";
import MedicallSuppliersImage1 from "../public/MedicallFarmaSuppliers/image 21.png";
import MedicallSuppliersImage12 from "../public/MedicallFarmaSuppliers/image 22.png";
import MedicallSuppliersImage13 from "../public/MedicallFarmaSuppliers/image 23.png";
import MedicallSuppliersImage14 from "../public/MedicallFarmaSuppliers/image 24.png";
import MedicallSuppliersImage15 from "../public/MedicallFarmaSuppliers/image 25.png";
import MedicallSuppliersImage16 from "../public/MedicallFarmaSuppliers/image 26.png";
import MedicallSuppliersImage17 from "../public/MedicallFarmaSuppliers/image 27.png";
import MedicallSuppliersImage18 from "../public/MedicallFarmaSuppliers/image 28.png";
import MedicallSuppliersImage19 from "../public/MedicallFarmaSuppliers/image 29.png";
import MedicallSuppliersImage20 from "../public/MedicallFarmaSuppliers/image 30.png";
import MedicallSuppliersImage21 from "../public/MedicallFarmaSuppliers/image 31.png";
import MedicallSuppliersImage22 from "../public/MedicallFarmaSuppliers/image 32.png";
import MedicallSuppliersImage23 from "../public/MedicallFarmaSuppliers/image 33.png";
import MedicallSuppliersImage24 from "../public/MedicallFarmaSuppliers/image 34.png";
import MedicallSuppliersImage25 from "../public/MedicallFarmaSuppliers/image 35.png";
import MedicallSuppliersImage26 from "../public/MedicallFarmaSuppliers/image 36.png";
import MedicallSuppliersImage27 from "../public/MedicallFarmaSuppliers/image 37.png";
import MedicallSuppliersImage29 from "../public/MedicallFarmaSuppliers/image 39.png";
import MedicallSuppliersImage30 from "../public/MedicallFarmaSuppliers/image 40.png";
import MedicallSuppliersImage31 from "../public/MedicallFarmaSuppliers/image 41.png";
import MedicallSuppliersImage32 from "../public/MedicallFarmaSuppliers/image 42.png";
import MedicallSuppliersImage33 from "../public/MedicallFarmaSuppliers/image 43.png";
import MedicallSuppliersImage34 from "../public/MedicallFarmaSuppliers/image 44.png";
import MedicallSuppliersImage35 from "../public/MedicallFarmaSuppliers/image 45.png";
import MedicallSuppliersImage36 from "../public/MedicallFarmaSuppliers/image 46.png";
import MedicallSuppliersImage37 from "../public/MedicallFarmaSuppliers/image 47.png";
import MedicallSuppliersImage38 from "../public/MedicallFarmaSuppliers/image 48.png";
import MedicallSuppliersImage40 from "../public/MedicallFarmaSuppliers/image 50.png";
import MedicallSuppliersImage41 from "../public/MedicallFarmaSuppliers/image 51.png";
import MedicallSuppliersImage42 from "../public/MedicallFarmaSuppliers/image 52.png";
import MedicallSuppliersImage43 from "../public/MedicallFarmaSuppliers/image 53.png";
import MedicallSuppliersImage44 from "../public/MedicallFarmaSuppliers/image 54.png";
import MedicallSuppliersImage45 from "../public/MedicallFarmaSuppliers/image 55.png";
import MedicallSuppliersImage46 from "../public/MedicallFarmaSuppliers/image 56.png";
import MedicallSuppliersImage47 from "../public/MedicallFarmaSuppliers/image 57.png";
import MedicallSuppliersImage48 from "../public/MedicallFarmaSuppliers/image 58.png";
import MedicallSuppliersImage49 from "../public/MedicallFarmaSuppliers/image 59.png";
import MedicallSuppliersImage50 from "../public/MedicallFarmaSuppliers/image 60.png";
import MedicallSuppliersImage51 from "../public/MedicallFarmaSuppliers/image 61.png";
import MedicallSuppliersImage52 from "../public/MedicallFarmaSuppliers/image 62.png";
import MedicallSuppliersImage53 from "../public/MedicallFarmaSuppliers/image 63.png";
import MedicallSuppliersImage54 from "../public/MedicallFarmaSuppliers/image 64.png";
import MedicallSuppliersImage55 from "../public/MedicallFarmaSuppliers/image 65.png";
import MedicallSuppliersImage56 from "../public/MedicallFarmaSuppliers/image 66.png";
import MedicallSuppliersImage57 from "../public/MedicallFarmaSuppliers/image 67.png";
import MedicallSuppliersImage58 from "../public/MedicallFarmaSuppliers/image 68.png";
import MedicallSuppliersImage59 from "../public/MedicallFarmaSuppliers/image 69.png";
import MedicallSuppliersImage60 from "../public/MedicallFarmaSuppliers/image 70.png";
import MedicallSuppliersImage61 from "../public/MedicallFarmaSuppliers/image 71.png";
import MedicallSuppliersImage62 from "../public/MedicallFarmaSuppliers/image 72.png";
import MedicallSuppliersImage63 from "../public/MedicallFarmaSuppliers/image 73.png";
import { StaticImageData } from "next/image";
import ImageHigiene from "../public/image 98.png";
import ImageCurativo from "../public/image 97.png";
import ImageSeringa from "../public/image 96.png";
import imageGlutomax from "../public/ProductsImage/Glutamax5litros.png";
import imageNanoPlus from "../public/ProductsImage/nanoPlus.png";
import imagePeroxyPlus from "../public/ProductsImage/PeroxiPlus.png";
import imageW80 from "../public/ProductsImage/w80-PhotoRoom.png-PhotoRoom.png";
import imageCISANOX from "../public/ProductsImage/cisanox.png";
import imageCISAZYNES from "../public/ProductsImage/cizazymes.png";
import imageEnzyma6 from "../public/ProductsImage/enzima6.png";
import imageCISAZYMESECO from "../public/ProductsImage/cizazymeseco-PhotoRoom.png-PhotoRoom.png";
import imageProactions from "../public/ProductsImage/proactionanios-PhotoRoom.png-PhotoRoom.png";
import imageEnzyMaxEco from "../public/ProductsImage/EnzyMaxECO_5litros-PhotoRoom.png-PhotoRoom.png";
import imageRyozibe from "../public/ProductsImage/ryozime-ex-5.png";
import imageMegazine from "../public/ProductsImage/megazyme-premium-5litros-PhotoRoom.png-PhotoRoom.png";
import imageVivanotec from "../public/ProductsImage/vivanotec-PhotoRoom.png-PhotoRoom.png";
import imagePortsystem from "../public/ProductsImage/portsystem-PhotoRoom.png-PhotoRoom.png";
import imageAdominal from "../public/ProductsImage/abdominal-PhotoRoom.png-PhotoRoom.png";
import imageReservatorio from "../public/ProductsImage/reservatório-PhotoRoom.png-PhotoRoom.png";
import imageCurativoAtrauman from "../public/ProductsImage/atrauman-ag-10-x-20-kctzgin0y0-PhotoRoom.png-PhotoRoom.png";
import imageHidratante from "../public/ProductsImage/DermilonCremeBarreira60g-1-PhotoRoom.png-PhotoRoom.png";
import imageAtraumanAG from "../public/ProductsImage/atrauman-ag-10-x-20-kctzgin0y0-PhotoRoom.png-PhotoRoom.png";
import ImageHYDROFILM from "../public/ProductsImage/hydrofilm-10-x-1-0d7sc1878j.png";
import ImageCateter from "../public/ProductsImage/fixadoreprotetorcaracter-PhotoRoom.png-PhotoRoom.png";
import ImageAlginato from "../public/ProductsImage/estimuladorgerenciamentodedinamicos-PhotoRoom.png-PhotoRoom.png";
import ImageEstimulador from "../public/ProductsImage/estimuladorgerenciamnetoproxdressing-PhotoRoom.png-PhotoRoom.png";
import ImageCurativoNonBorder from "../public/ProductsImage/CURATIVO-PROXIMEL-NON-BORDER-HARTMANN-LL-MEDICAL-PhotoRoom.png-PhotoRoom.png";
import ImageCurativoProximel from "../public/ProductsImage/CURATIVO-PROXIMEL-AG-HARTMANN-LL-MEDICAL-630x630-PhotoRoom.png-PhotoRoom.png";
import ImageCurativoAbsorcaoSecrecao from "../public/ProductsImage/curativoabsorcaosecrecao-PhotoRoom.png-PhotoRoom.png";
import ImageMolicarePremium from "../public/ProductsImage/molicarepremiumelastic6dm_600x600-PhotoRoom.png-PhotoRoom.png";
import ImageMolicarePremium8D from "../public/ProductsImage/Fralda-Adulto-MoliCare-Elastic-Premium-8D-Super-Plus---Hartmann-PhotoRoom.png-PhotoRoom.png";
import Equipo2VLAVITA from "../public/ProductsImage/equipo2vLaVIta-PhotoRoom.png-PhotoRoom.png";
import EquipoValvulado from "../public/ProductsImage/EMU16A-Extensor-2-Vias-Neonatal-Valvulado-La-Vita-PhotoRoom.png-PhotoRoom.png";
import EquipoMicrogotas from "../public/ProductsImage/Equipo-Microgotas-Bureta-La-Vita-PhotoRoom.png-PhotoRoom.png";
import EquipoDietaEnteral from "../public/ProductsImage/Equipo-de-Dieta-Enteral-La-Vita-PhotoRoom.png-PhotoRoom.png";
import EquipoMacroGotas from "../public/ProductsImage/EMA-01-Equipo-Macrogotas-Valvulado-Completo-La-Vita-PhotoRoom.png-PhotoRoom.png";

export const ListProductsData: IListProductsData[] = [
  {
    id: 1,
    image: imageGlutomax,
    category: "Saneantes",
    subCatgegory: "Limpeza e desinfecção",
    product: "Desinfetante alto nível - Glutomax",
    href: "/saneantes/limpeza-e-desinfeccao",
    supplier: "Glutomax",
  },
  {
    id: 2,
    image: imageNanoPlus,
    category: "Saneantes",
    subCatgegory: "Limpeza e desinfecção",
    product: "Desinfetante - CISA NANOPLUS",
    href: "/saneantes/limpeza-e-desinfeccao",
    supplier: "CISA NANOPLUS",
  },
  {
    id: 3,
    image: imagePeroxyPlus,
    category: "Saneantes",
    subCatgegory: "Limpeza multiuso",
    product: "Detergente desinfetante concentrado - PEROXY PLUS",
    href: "/saneantes/limpeza-multiuso",
    supplier: "PEROXY PLUS",
  },
  {
    id: 4,
    image: imageW80,
    category: "Saneantes",
    subCatgegory: "Limpeza em superfície fixa",
    product: "Desifetante hospitalar - W80",
    href: "/saneantes/limpeza-em-superficie-fixa",
    supplier: "W80",
  },
  {
    id: 5,
    image: imageCISANOX,
    category: "Saneantes",
    subCatgegory: "Desincrustante",
    product: "Solução concentrada - CISA NOX",
    href: "/saneantes/desincrustante",
    supplier: "CISA NOX",
  },
  {
    id: 6,
    image: imageCISAZYNES,
    category: "Saneantes",
    subCatgegory: "Limpeza de instrumentais cirúrgicos",
    product: "Detergente - CISA ZYMES ECO",
    href: "/saneantes/limpeza-de-instrumentais-cirurgicos",
    supplier: " CISA ZYMES ECO",
  },
  {
    id: 7,
    image: imageEnzyma6,
    category: "Saneantes",
    subCatgegory: "Limpeza instrumental cirúrgico e materiais hospitalares",
    product: "Detergente multienzimático - ENZYMA 6",
    href: "/saneantes/limpeza-instrumental-cirurgico",
    supplier: "ENZYMA 6",
  },
  {
    id: 8,
    image: imageCISAZYMESECO,
    category: "Saneantes",
    subCatgegory: "Limpeza e desinfecção gorduras e celuloses",
    product: "Detergente - CISA ZYMES ECO",
    href: "/saneantes/limpeza-e-desinfeccao-gorduras-e-celuloses",
    supplier: "CISA ZYMES ECO",
  },
  {
    id: 9,
    image: imageProactions,
    category: "Saneantes",
    subCatgegory: "Limpeza para pré uso de materias  hospitalares",
    product: "Detergente Enzimatico - PROACTION ANIOS",
    href: "/saneantes/limpeza-pre-uso-de-materias-hospitalares",
    supplier: "PROACTION ANIOS",
  },
  {
    id: 10,
    image: imageEnzyMaxEco,
    category: "Saneantes",
    subCatgegory:
      "Limpeza manual, mecânica, ultrassônica dos artigos cirúrgicos e endoscópios",
    product: "Detergente Enziamatico - COSMODERNA",
    href: "/saneantes/limpeza-manual-mecanica-ultrassonica-dos-artigos-cirurgicos-endoscopios",
    supplier: "COSMODERNA",
  },
  {
    id: 11,
    image: imageRyozibe,
    category: "Saneantes",
    subCatgegory:
      "Cirúrgicos, canulados, odontológicos, inalatórios, endoscópios e laboratoriais",
    product: "Detergente Enzimatico - RYOZIBE EX RIOQUIMICA",
    href: "/saneantes/cirurgicos-canulados-inalatorios-endoscopios-laboratoriais",
    supplier: "RIOQUIMICA",
  },
  {
    id: 12,
    image: imageEnzyMaxEco,
    category: "Saneantes",
    subCatgegory:
      "Limpeza de endoscópios, cateteres, odontologicos, pisos e vidrarias",
    product: "Detergente Enzimatico - COSMODERMA",
    href: "/saneantes/limpeza-de-endoscopios-cateteres-odontologicos-pisos-vidrarias",
    supplier: "COSMODERMA",
  },
  {
    id: 13,
    image: imageMegazine,
    category: "Saneantes",
    subCatgegory: "Limpeza de aparelhos óticas",
    product: "Detergente multienzimático  - MEGAZYNE COSMODERNA",
    href: "/saneantes/limpeza-de-aparelhos-oticas",
    supplier: "MEGAZYNE",
  },
  {
    id: 14,
    image: imageVivanotec,
    category: "Tratamentos de ferida",
    subCatgegory: "Pressão negativa",
    product: "Vivanotec Y - HARTMANN",
    href: "/tratamentos-de-ferida/pressao-negativa",
    supplier: "HARTMANN",
  },
  {
    id: 15,
    image: imagePortsystem,
    category: "Tratamentos de ferida",
    subCatgegory: "Pressão negativa",
    product: "Portsystem/Conector - HARTMANN",
    href: "/tratamentos-de-ferida/pressao-negativa",
    supplier: "HARTMANN",
  },
  {
    id: 16,
    image: imageAdominal,
    category: "Tratamentos de ferida",
    subCatgegory: "Pressão negativa",
    product: "Kit para terapia P, M, G e ABDOMINAL - HARTMANN",
    href: "/tratamentos-de-ferida/pressao-negativa",
    supplier: "HARTMANN",
  },
  {
    id: 17,
    image: imageReservatorio,
    category: "Tratamentos de ferida",
    subCatgegory: "Pressão negativa",
    product: "Reservatórios 300ML e 800ML - HARTMANN",
    href: "/tratamentos-de-ferida/pressao-negativa",
    supplier: "HARTMANN",
  },
  {
    id: 18,
    image: imageCurativoAtrauman,
    category: "Tratamentos de ferida",
    subCatgegory: "Pressão negativa",
    product:
      "Curativo revestido com gel de silicone - ATRAUMAN SILICONE / HARTMANN",
    href: "/tratamentos-de-ferida/pressao-negativa",
    supplier: "HARTMANN",
  },
  {
    id: 19,
    image: imageHidratante,
    category: "Tratamentos de ferida",
    subCatgegory: "Protetor contra fluidos corporais",
    product: "Creme barreira - HIDRATANTE DERMILON COSMODERMA",
    href: "/tratamentos-de-ferida/protetor-contra-fluidos-corporais",
    supplier: "COSMODERMA",
  },
  {
    id: 20,
    image: imageAtraumanAG,
    category: "Tratamentos de ferida",
    subCatgegory: "Curativo",
    product: "Curativo impregnado com prata - ATRAUMAN AG / HARTMANN",
    href: "/tratamentos-de-ferida/curativo",
    supplier: "HARTMANN",
  },
  {
    id: 21,
    image: ImageHYDROFILM,
    category: "Tratamentos de ferida",
    subCatgegory: "Curativo",
    product: "Compressa absorvente - HYDROFILM PLUS",
    href: "/tratamentos-de-ferida/curativo",
    supplier: "HYDROFILM",
  },
  {
    id: 22,
    image: ImageHYDROFILM,
    category: "Tratamentos de ferida",
    subCatgegory: "Curativo",
    product: "Curativo Transparente - HYDROFILM",
    href: "/tratamentos-de-ferida/curativo",
    supplier: "HYDROFILM",
  },
  {
    id: 23,
    image: ImageCateter,
    category: "Tratamentos de ferida",
    subCatgegory: "Curativo",
    product: "Fixador e protetor de cateter - PELICULA ADESIVA / HARTMANN",
    href: "/tratamentos-de-ferida/curativo",
    supplier: "HARTMANN",
  },
  {
    id: 24,
    image: ImageAlginato,
    category: "Tratamentos de ferida",
    subCatgegory: "Curativo",
    product: "Placa alginato de cálcio - SORBALGON / HARTMANN",
    href: "/tratamentos-de-ferida/curativo",
    supplier: "HARTMANN",
  },
  {
    id: 25,
    image: ImageAlginato,
    category: "Tratamentos de ferida",
    subCatgegory: "Curativo",
    product:
      "Estimulador do gerenciamento dinâmico de fluidos - PROXIMEL AG / HARTMANN",
    href: "/tratamentos-de-ferida/curativo",
    supplier: "HARTMANN",
  },
  {
    id: 26,
    image: ImageEstimulador,
    category: "Tratamentos de ferida",
    subCatgegory: "Curativo",
    product:
      "Estimulador do gerenciamento dinâmico de fluidos - PROXIMEL DRESSING / HARTMANN",
    href: "/tratamentos-de-ferida/curativo",
    supplier: "HARTMANN",
  },
  {
    id: 27,
    image: ImageCurativoNonBorder,
    category: "Tratamentos de ferida",
    subCatgegory: "Curativo",
    product:
      "Estimulador do gerenciamento dinâmico de fluidos - PROXIMEL NON BORDER / HARTMANN",
    href: "/tratamentos-de-ferida/curativo",
    supplier: "HARTMANN",
  },
  {
    id: 28,
    image: ImageCurativoProximel,
    category: "Tratamentos de ferida",
    subCatgegory: "Curativo",
    product:
      "Estimulador do gerenciamento dinâmico de fluidos (desenvolvido para região sacral) - PROXIMEL SACRAL  / HARTMANN",
    href: "/tratamentos-de-ferida/curativo",
    supplier: "HARTMANN",
  },
  {
    id: 29,
    image: ImageCurativoAbsorcaoSecrecao,
    category: "Tratamentos de ferida",
    subCatgegory: "Curativo",
    product:
      "Absorção da secreção conservando em sua estrutura  (desenvolvido para região sacral) - PROXIMEL SACRAL HYDROCOLL / HARTMANN",
    href: "/tratamentos-de-ferida/curativo",
    supplier: "HARTMANN",
  },
  {
    id: 30,
    image: ImageMolicarePremium,
    category: "Material",
    subCatgegory: "Higiene pessoal",
    product:
      "Fralda geriatrica diurna - FRALDA MOLICARE PREMIUM ELASTIC 6D  / HARTMANN",
    href: "/material/higiene-pessoal",
    supplier: "HARTMANN",
  },
  {
    id: 31,
    image: ImageMolicarePremium8D,
    category: "Material",
    subCatgegory: "Higiene pessoal",
    product:
      "Fralda geriatrica noturna  - FRALDA MOLICARE PREMIUM ELASTIC 8D  / HARTMANN",
    href: "/material/higiene-pessoal",
    supplier: "HARTMANN",
  },
  {
    id: 32,
    image: Equipo2VLAVITA,
    category: "Material",
    subCatgegory: "Equipo para infusão de multiplas",
    product: "Equipo  2 vias C CLAMP  - LA VITA",
    href: "/material/equipo-para-infusao-de-multiplas",
    supplier: "LA VITA",
  },
  {
    id: 33,
    image: EquipoValvulado,
    category: "Material",
    subCatgegory: "Equipo para acessorio na terapia infusional",
    product: "Equipo 2 via valvulado - LA VITA",
    href: "/material/equipo-para-acessorio-na-terapia-infusional",
    supplier: "LA VITA",
  },
  {
    id: 34,
    image: EquipoMicrogotas,
    category: "Material",
    subCatgegory:
      "Equipo para idosos e pediatria com rigoroso controle de gatejamento ",
    product: "Equipo Bureta fl de ar - LA VITA",
    href: "/material/equipo-para-idosos-pediatria-com-rigoroso-controle-de-gatejamento",
    supplier: "LA VITA",
  },
  {
    id: 35,
    image: EquipoDietaEnteral,
    category: "Material",
    subCatgegory:
      "Equipo para admnistração de dietas, araves de sondas enteral ou nasogástrica",
    product: "Equipo dieta Enteral - LA VITA",
    href: "/material/equipo-para-admnistracao-de-dietas-araves-de-sondas-enteral-ou-nasogastrica",
    supplier: "LA VITA",
  },
  {
    id: 36,
    image: EquipoMacroGotas,
    category: "Material",
    subCatgegory:
      "Equipo pode ser utilizado com agulhas, escalpes, catetes ou torneiras",
    product: "Equipo macro completo Injetor lateral  - LA VITA",
    href: "/material/equipo-pode-ser-utilizado-com-agulhas-escalpes-catetes-ou-torneiras",
    supplier: "LA VITA",
  },
];

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
    categories: ["Medicamentos", "Medicamento Genérico", "Sabonetes"],
  },
  {
    id: 5,
    image: Product2,
    name: "Estetoscópio Simples Adulto Premium",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Materiais Medicos", "Medicamentos"],
  },
  {
    id: 6,
    image: Product3,
    name: "Trophic Basic Enteral",
    content:
      "Este medicamento contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. O medicamento é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. A amoxicilina atua destruindo as bactérias que causam essas infecções.",
    supplier: "Fornecido por Nativita",
    categories: ["Medicamentos"],
  },
];

export const CardSoluctionData: ICardSoluctions[] = [
  {
    title: "Saneantes",
    href: "/Saneantes",
    subCategories: ["Medicamento Genérico", "Materiais Medicos"],
  },
  {
    title: "Tratamentos de ferida",
    href: "/Tratamentos de ferida",
    subCategories: [],
  },
  {
    title: "Material",
    href: "/Material",
    subCategories: [],
  },
];

const Saneantes = ListProductsData.filter(
  (item) => item.category === "Saneantes"
).map((item) => ({ title: item.subCatgegory, href: item.href }));

const TratamentosDeFerida = ListProductsData.filter(
  (item) => item.category === "Tratamentos de ferida"
).map((item) => ({ title: item.subCatgegory, href: item.href }));

const Material = ListProductsData.filter(
  (item) => item.category === "Material"
).map((item) => ({ title: item.subCatgegory, href: item.href }));

function uniqueTitle(array: ISubCategories[]) {
  const uniqueTitlesSet = new Set();
  const ArraySubs = array.filter((item: ISubCategories) => {
    const isUnique = !uniqueTitlesSet.has(item.title);
    uniqueTitlesSet.add(item.title);
    return isUnique;
  });
  return ArraySubs;
}
const MaterialSubs = uniqueTitle(Material);
const TratamentosDeFeridaSubs = uniqueTitle(TratamentosDeFerida);
const SaneantesSubs = uniqueTitle(Saneantes);

export const CategoriesData: ICategories[] = [
  {
    image: ImageHigiene,
    name: "Saneantes",
    subCategories: SaneantesSubs,
  },
  {
    image: ImageCurativo,
    name: "Tratamentos de ferida",
    subCategories: TratamentosDeFeridaSubs,
  },
  {
    image: ImageSeringa,
    name: "Material",
    subCategories: MaterialSubs,
  },
];

export const NavData: IDataNav[] = [
  { name: "Inicio", href: "/#Init" },
  { name: "Sobre", href: "/#About" },
  { name: "Produtos em Destaque", href: "/#HighlightsProduct" },
  { name: "Soluções do Momento", href: "/#Soluctions" },
  // { name: "Categorias", href: "/#Categories" },
  { name: "Fornecedores", href: "/#Suppliers" },
  { name: "Produtos Recomendados", href: "/#productRecomended" },
  { name: "Contatos", href: "/#Contact" },
];

export const SuppliersImageData: StaticImageData[] = [
  MedicallSuppliersImage,
  MedicallSuppliersImage2,
  MedicallSuppliersImage5,
  MedicallSuppliersImage6,
  MedicallSuppliersImage7,
  MedicallSuppliersImage8,
  MedicallSuppliersImage9,
  MedicallSuppliersImage10,
  MedicallSuppliersImage1,
  MedicallSuppliersImage12,
  MedicallSuppliersImage13,
  MedicallSuppliersImage14,
  MedicallSuppliersImage15,
  MedicallSuppliersImage16,
  MedicallSuppliersImage17,
  MedicallSuppliersImage18,
  MedicallSuppliersImage19,
  MedicallSuppliersImage20,
  MedicallSuppliersImage21,
  MedicallSuppliersImage22,
  MedicallSuppliersImage23,
  MedicallSuppliersImage24,
  MedicallSuppliersImage25,
  MedicallSuppliersImage26,
  MedicallSuppliersImage27,
  MedicallSuppliersImage29,
  MedicallSuppliersImage30,
  MedicallSuppliersImage31,
  MedicallSuppliersImage32,
  MedicallSuppliersImage33,
  MedicallSuppliersImage34,
  MedicallSuppliersImage35,
  MedicallSuppliersImage36,
  MedicallSuppliersImage37,
  MedicallSuppliersImage38,
  MedicallSuppliersImage40,
  MedicallSuppliersImage41,
  MedicallSuppliersImage42,
  MedicallSuppliersImage43,
  MedicallSuppliersImage44,
  MedicallSuppliersImage45,
  MedicallSuppliersImage46,
  MedicallSuppliersImage47,
  MedicallSuppliersImage48,
  MedicallSuppliersImage49,
  MedicallSuppliersImage50,
  MedicallSuppliersImage51,
  MedicallSuppliersImage52,
  MedicallSuppliersImage53,
  MedicallSuppliersImage54,
  MedicallSuppliersImage55,
  MedicallSuppliersImage56,
  MedicallSuppliersImage57,
  MedicallSuppliersImage58,
  MedicallSuppliersImage59,
  MedicallSuppliersImage60,
  MedicallSuppliersImage61,
  MedicallSuppliersImage62,
  MedicallSuppliersImage63,
];

export const NavigationSocialMedia: NavigationSocialMediaType[] = [
  { title: "Instagram", href: "https://www.instagram.com/medicallfarmasp/" },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/company/medicall-farma-distribuidora-de-produtos-e-servi%C3%A7os-para-a-sa%C3%BAde/?originalSubdomain=br",
  },
];

export const CardAboutData: ICardAbout[] = [
  {
    title: "Nossa Missão",
    content:
      "A Medicall Farma tem como missão contribuir com a melhoria da vida e saúde das pessoas, por meio de fornecimento de materiais médicos e medicamentos hospitalares de alta qualidade às instituições de saúde privadas e públicas do estado de São Paulo.",
  },
  {
    title: "Nossa Visão",
    content:
      "Ser reconhecidamente a melhor empresa de distribuição de materiais médicos a medicamentos hospitalares às instituições de saúde privadas e públicas, buscando aprimoramento continuo de nossas atividades com ética e responsabilidade.",
  },
  {
    title: "Nossas Categorias",
    content: [
      "Medicamentos Hospitalares",
      "Dietas Enterais e Parenterais",
      "Materiais Médicos e Hospitalares",
      "Equipamentos Médicos e Odontológicos",
    ],
  },
];
