import ContentBox from "../common/ContentBox"
import Spacer from "../common/Spacer"

const AboutUsPage = () => {
  return (
    <ContentBox id="about" title="About Us">
      <div className="text-lg sm:text-2xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
          tellus sed quam purus placerat risus donec.
        </p>
        <Spacer size="1rem" />
        <p>
          Mauris eu sed posuere fermentum, convallis est, mi. Ipsum semper et
          sed dignissim tortor.
        </p>
        <Spacer size="1rem" />
        <p>
          Morbi ornare nec quis pretium quisque mattis gravida cursus. Molestie
          sed nisi mauris erat purus arcu ac elementum.
        </p>
        <Spacer size="4rem" />
        <p className="font-bold text-center">
          Auctor sed ultrices lacus augue morbi dui at.
        </p>
      </div>
    </ContentBox>
  )
}

export default AboutUsPage
