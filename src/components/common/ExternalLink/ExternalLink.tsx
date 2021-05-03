import { ExternalLinkPropsType } from "./ExternalLink.types"

const ExternalLink = (props: ExternalLinkPropsType) => (
  <a
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
    className={props.className}
  >
    {props.children}
    <span className="sr-only">Opens in new window</span>
  </a>
)

export default ExternalLink
