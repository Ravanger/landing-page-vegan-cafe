import LandingPage from "../components/LandingPage"
import AboutUsPage from "../components/AboutUsPage"
import HoursPage from "../components/HoursPage"
import ContactPage from "../components/ContactPage"
import BackgroundImage from "../components/common/BackgroundImage"
import Spacer from "../components/common/Spacer"
import Menu from "../components/common/Menu"

const Home = () => {
  return (
    <div className="flex flex-col">
      <BackgroundImage />
      <Menu />
      <main>
        <LandingPage />
        <Spacer />
        <AboutUsPage />
        <Spacer />
        <HoursPage />
        <Spacer />
        <ContactPage />
      </main>
    </div>
  )
}

export default Home
