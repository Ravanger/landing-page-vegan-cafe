import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr"
import ExternalLink from "../ExternalLink"

const Socials = () => (
  <div className="w-full flex flex-row justify-around">
    <ExternalLink url="https://instagram.com/">
      <GrInstagram size="2rem" />
    </ExternalLink>
    <ExternalLink url="https://twitter.com/">
      <GrTwitter size="2rem" />
    </ExternalLink>
    <ExternalLink url="https://facebook.com/">
      <GrFacebook size="2rem" />
    </ExternalLink>
  </div>
)

export default Socials
