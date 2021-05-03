import Image from "next/image"

const BackgroundImage = () => (
  <div className="-z-50 h-screen w-full overflow-hidden fixed">
    <Image
      src="/images/vegetables-2338824_blur.jpg"
      alt="veggies-background"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
)

export default BackgroundImage
