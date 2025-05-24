import HeroSection from "./Section/HeroSection"
import PopularDestinations from "./Section/PopularDestinations"
import TourSearchSection from "./Section/TourSearchSection"
import PackageSection from "./Section/PackageSection"
import GallerySection from "./Section/GallerySection"
import ContactSection from "./Section/ContactSection"
import IcelandSection from "./Section/icelandsection"
import SendQuery from "./Section/SendQuery"
import CategorySection from "./Section/CategorySection"
import TravelerReviews from "./Section/TravelerReviews"


function HomePage() {
  return (
    <>
      <main>
        <article>
        <HeroSection />
        <IcelandSection/>        
        <PopularDestinations />
        <PackageSection />
        <GallerySection />
        <CategorySection/>
        <TravelerReviews/>
        <SendQuery/>
        <ContactSection />
        </article>
      </main>
    </>
  )
}

export default HomePage
