import { Aboult } from "@/components/Aboult";
import { Banner } from "@/components/Banner";
import { Combobox } from "@/components/Combobox";
import { HighlightsProducts } from "@/components/HighlightsProducts";
import { ProductsRecommended } from "@/components/ProductsRecommended";
import { SearchCategory } from "@/components/SearchCategory";
import { Separator } from "@/components/Separator";
import SolutionsMoment from "@/components/SolutionsMoment";
import { Suppliers } from "@/components/Suppliers";
import { CategoriesData } from "../../data/data";

export default function Home() {
  return (
    <main>
      <section className="hidden lg:flex lg:pt-28 lg:gap-20 lg:justify-center bg-grayDark border border-grayLight">
        {CategoriesData.map((item, index) => (
          <Combobox
            ImageProp={item.image}
            key={index}
            Category={item.name}
            SubCategories={item.subCategories}
          />
        ))}
      </section>
      <section id="Init">
        <Banner />
      </section>
      <section id="About">
        <Aboult />
      </section>
      <section id="HighlightsProduct">
        <HighlightsProducts />
      </section>
      <section id="Soluctions">
        <SolutionsMoment />
      </section>
      {/* <section id="Categories">
        <SearchCategory />
      </section> */}
      <Separator />
      <section id="Suppliers">
        <Suppliers />
      </section>
      <Separator />
      <section id="productRecomended">
        <ProductsRecommended />
      </section>
    </main>
  );
}
