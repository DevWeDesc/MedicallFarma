import { Aboult } from "@/components/Aboult";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { HighlightsProducts } from "@/components/HighlightsProducts";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="">
        <Banner />
        <Aboult />
        <HighlightsProducts />
      </main>
    </div>
  );
}
