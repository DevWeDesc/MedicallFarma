import { Aboult } from "@/components/Aboult";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HighlightsProducts } from "@/components/HighlightsProducts";
import { ProductsRecommended } from "@/components/ProductsRecommended";
import { SearchCategory } from "@/components/SearchCategory";
import { Separator } from "@/components/Separator";
import SolutionsMoment from "@/components/SolutionsMoment";
import { Suppliers } from "@/components/Suppliers";

export default function Home() {
  return (
    <main>
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
      <section id="Categories">
        <SearchCategory />
      </section>
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
