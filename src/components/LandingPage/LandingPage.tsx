import ContentBox from "../common/ContentBox"
import ExternalLink from "../common/ExternalLink"
import Spacer from "../common/Spacer"

const LandingPage = () => {
  return (
    <ContentBox id="landing">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">The Green Goose</h1>
        <span className="self-end text-2xl">Vegan café</span>
        <Spacer size="2rem" />
        <ExternalLink
          url="https://placeholder.com/"
          className="bg-green py-4 px-16"
        >
          Menu
        </ExternalLink>
      </div>
    </ContentBox>
  )
}

export default LandingPage
