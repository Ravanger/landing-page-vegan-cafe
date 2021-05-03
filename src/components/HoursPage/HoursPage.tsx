import ContentBox from "../common/ContentBox"
import Spacer from "../common/Spacer"
import { HoursPageRowPropsType } from "./HoursPage.types"

const HoursPageRow = (props: HoursPageRowPropsType) => (
  <div className="w-full flex flex-row justify-around items-center">
    <span>{props.days}</span>
    <hr className="bg-white h-0.5 flex-grow mx-4" />
    <span>{props.times}</span>
  </div>
)

const HoursPage = () => {
  return (
    <ContentBox id="hours" title="Hours">
      <div className="flex flex-col w-full text-3xl">
        <HoursPageRow days="Mon - Fri" times="8am - 8pm" />
        <Spacer size="2rem" />
        <HoursPageRow days="Sat" times="8am - 6pm" />
        <Spacer size="2rem" />
        <HoursPageRow days="Sun" times="10am - 2pm" />
      </div>
    </ContentBox>
  )
}

export default HoursPage
