import { ContentBoxPropsType } from "./ContentBox.types"

const ContentBox = (props: ContentBoxPropsType) => (
  <div className="h-screen" id={props.id}>
    {props.children}
  </div>
)

export default ContentBox
