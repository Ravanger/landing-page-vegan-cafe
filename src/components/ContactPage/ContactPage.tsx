import ContentBox from "../common/ContentBox"
import ExternalLink from "../common/ExternalLink"
import Socials from "../common/Socials"
import Spacer from "../common/Spacer"

const ContactPage = () => {
  return (
    <ContentBox id="contact" title="Contact">
      <Socials />
      <Spacer size="2rem" />
      <span className="block text-4xl">
        <a href="tel:+15551234567">(555) - 123 - 4567</a>
      </span>
      <Spacer size="2rem" />
      <div className="relative w-full">
        <span className="absolute w-full bg-darkGray bg-opacity-60 text-center text-xl">
          <ExternalLink
            url="https://goo.gl/maps/CCbf1yMg2GGyoUJj8"
            className="block"
          >
            123 Address st, Toronto
          </ExternalLink>
        </span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.269063974255!2d-79.38924548425987!3d43.64257006113557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1620023038078!5m2!1sen!2sca"
          className="border-0 w-full min-h-[18rem] md:min-h-[24rem] lg:min-h-[36rem]"
          loading="lazy"
        />
      </div>
      <Spacer />
    </ContentBox>
  )
}

export default ContactPage
