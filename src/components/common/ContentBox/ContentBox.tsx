import Spacer from "../Spacer"
import { ContentBoxPropsType } from "./ContentBox.types"

const ContentBox = (props: ContentBoxPropsType) => (
  <div
    className="min-h-screen w-full flex flex-col justify-center"
    id={props.id}
  >
    <section className="w-full flex flex-col items-center bg-darkGray bg-opacity-60 px-8 py-16 text-white">
      {props.title && (
        <>
          <h2 className="text-green text-8xl">{props.title}</h2>
          <Spacer size="2rem" />
        </>
      )}
      <div className="max-w-xl w-full flex flex-col items-center">
        {props.children}
      </div>
    </section>
  </div>
)

export default ContentBox
