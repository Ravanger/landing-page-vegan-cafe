import Spacer from "../Spacer"
import { ContentBoxPropsType } from "./ContentBox.types"

const ContentBox = (props: ContentBoxPropsType) => (
  <div className="h-screen w-full flex flex-col justify-center" id={props.id}>
    <section className="w-full flex flex-col items-center bg-darkGray bg-opacity-60 p-8 text-white">
      {props.title && (
        <>
          <h2 className="text-green text-8xl">{props.title}</h2>
          <Spacer size="2rem" />
        </>
      )}
      {props.children}
    </section>
  </div>
)

export default ContentBox
