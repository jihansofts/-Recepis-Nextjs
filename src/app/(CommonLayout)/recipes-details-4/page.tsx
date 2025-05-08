import Footer from "@/common/Footer";
import RecipeDetails from "@/common/RecipeDetails";

export default function Page() {
  return (
    <main>
      <RecipeDetails
        title="Greek yogurt popsicles  "
        imageSrc="/images/imagepages4.png"
        ingredients={[
          "- 1 cup of Greek yogurt ",
          "- 1 cup of chopped fruit of choice  ",
          "- 2 tablespoons of honey (or any sweetener of choice)  ",
        ]}
        instructions={[
          "• Combine all ingredients in a small bowl. Place mixture into popsicle molds with a popsicle stick inserted. Freeze for 2 hours or overnight and Enjoy! ",
        ]}
      />
      <Footer />
    </main>
  );
}
