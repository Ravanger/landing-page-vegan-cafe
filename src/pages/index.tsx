import LandingPage from "../components/LandingPage"
import AboutUsPage from "../components/AboutUsPage"
import HoursPage from "../components/HoursPage"
import ContactPage from "../components/ContactPage"
import BackgroundImage from "../components/common/BackgroundImage"

const Home = () => {
  return (
    <div className="flex flex-col">
      <BackgroundImage />
      <LandingPage />
      <AboutUsPage />
      <HoursPage />
      <ContactPage />
    </div>
  )
}

export default Home
