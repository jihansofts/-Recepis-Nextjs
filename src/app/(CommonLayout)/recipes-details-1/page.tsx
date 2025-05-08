import Footer from "@/common/Footer";
import RecipeDetails from "@/common/RecipeDetails";

export default function Page() {
  return (
    <main>
      <RecipeDetails
        title="Chia seed pudding"
        imageSrc="/images/imagepages1.png"
        ingredients={[
          "1/2 cup of chia seeds",
          "1 cup of coconut milk (or any milk of your choice)",
          "4 tablespoons of cocoa powder",
          "1 teaspoon of vanilla",
          "2 tablespoons of honey",
          "1/4 cup of grated dark chocolate",
        ]}
        instructions={[
          "Combine all ingredients in a medium bowl and set in the fridge overnight. Enjoy!",
          "Chocolate dipped fruit clusters:",
          "1 cup of Greek yogurt",
          "1 cup of chopped strawberries (or any fruit of choice)",
          "2 tablespoons of honey",
          "Place separate tablespoons of the fruit mixture in a baking sheet lined with parchment paper. Place in a freezer for 15 minutes.",
        ]}
      />
      <Footer />
    </main>
  );
}
