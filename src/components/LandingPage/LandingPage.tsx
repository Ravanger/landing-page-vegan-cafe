import ContentBox from "../common/ContentBox"
import ExternalLink from "../common/ExternalLink"
import Spacer from "../common/Spacer"

const LandingPage = () => {
  return (
    <ContentBox id="landing">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-end">
          <h1 className="text-6xl inline-block sm:text-8xl">The Green Goose</h1>
          <span className="text-2xl sm:text-5xl">Vegan café</span>
        </div>
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
