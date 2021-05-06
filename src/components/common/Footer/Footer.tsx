import Socials from "../Socials"

const Footer = () => (
  <footer className="hidden md:flex flex-row fixed bottom-0 left-0 right-0 bg-darkGray bg-opacity-95 items-center justify-between text-white px-4">
    <span className="text-xl lg:text-2xl">
      <a href="tel:+15551234567">(555) - 123 - 4567</a>
    </span>
    <div>
      <Socials />
    </div>
    <div className="flex flex-col items-end">
      <span className="text-xl lg:text-2xl">123 Address st</span>
      <span className="lg:text-lg">Toronto, ON</span>
    </div>
  </footer>
)

export default Footer
