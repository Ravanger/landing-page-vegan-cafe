import LandingPage from "../components/LandingPage"
import AboutUsPage from "../components/AboutUsPage"
import HoursPage from "../components/HoursPage"
import ContactPage from "../components/ContactPage"
import BackgroundImage from "../components/common/BackgroundImage"
import Spacer from "../components/common/Spacer"

const Home = () => {
  return (
    <div className="flex flex-col">
      <BackgroundImage />
      <LandingPage />
      <Spacer />
      <AboutUsPage />
      <Spacer />
      <HoursPage />
      <Spacer />
      <ContactPage />
    </div>
  )
}

export default Home
