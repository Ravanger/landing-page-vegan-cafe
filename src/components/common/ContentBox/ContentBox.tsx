import { ContentBoxPropsType } from "./ContentBox.types"

const ContentBox = (props: ContentBoxPropsType) => (
  <div className="h-screen flex flex-col justify-center w-full" id={props.id}>
    <section className="w-full flex flex-col items-center bg-darkGray bg-opacity-60 py-8 px-4 text-white">
      {props.children}
    </section>
  </div>
)

export default ContentBox
