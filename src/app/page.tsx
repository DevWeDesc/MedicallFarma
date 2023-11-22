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
    <main className="">
      <Banner />
      <Aboult />
      <HighlightsProducts />
      <SolutionsMoment />
      <SearchCategory />
      <Separator />
      <Suppliers />
      <Separator />
      <ProductsRecommended />
    </main>
  );
}
