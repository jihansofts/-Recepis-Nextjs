import Footer from "@/common/Footer";
import RecipeDetails from "@/common/RecipeDetails";

export default function Page() {
  return (
    <main>
      <RecipeDetails
        title="Chocolate dip"
        imageSrc="/images/imagepages2.png"
        ingredients={[
          "- melt 8 oz of chocolate with 1 tablespoon of coconut oil in a microwave for 1 minute. ",
        ]}
        instructions={[
          " Dip frozen yogurt clusters into the chocolate and place onto a wire rack or a baking sheet lined with parchment paper. Cover all the clusters in the chocolate and allow the chocolate to set. Place them back in the freezer and freeze for 10 minutes. Plate and Enjoy! (You may replace the chocolate for alternative flavors) ",
        ]}
      />
      <Footer />
    </main>
  );
}
