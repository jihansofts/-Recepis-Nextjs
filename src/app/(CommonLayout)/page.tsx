import Footer from "@/common/Footer";
import HomeHero from "@/components/Home/Home";
import Recipes from "@/components/Recipes/Recipes";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Recipes />
      <Footer />
    </main>
  );
}
