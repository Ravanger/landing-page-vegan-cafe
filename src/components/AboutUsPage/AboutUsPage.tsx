import ContentBox from "../common/ContentBox"
import Spacer from "../common/Spacer"

const AboutUsPage = () => {
  return (
    <ContentBox id="about" title="About Us">
      <div className="text-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
          tellus sed quam purus placerat risus donec. Mauris eu sed posuere
          fermentum, convallis est, mi. Ipsum semper et sed dignissim tortor.
          Morbi ornare nec quis pretium quisque mattis gravida cursus. Molestie
          sed nisi mauris erat purus arcu ac elementum.
        </p>
        <Spacer size="2rem" />
        <p>
          Auctor sed ultrices lacus augue morbi dui at. Maecenas gravida semper
          cursus tellus lectus integer lacus. Mattis odio sagittis magna libero
          ipsum lorem at nulla. Faucibus consectetur viverra id arcu, diam.
          Commodo mauris semper cursus feugiat diam, lectus vitae tellus
          elementum.
        </p>
      </div>
    </ContentBox>
  )
}

export default AboutUsPage
