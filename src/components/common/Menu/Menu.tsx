import { useRef, useState } from "react"
import { CgMenu } from "react-icons/cg"
import { AiOutlineClose } from "react-icons/ai"
import { MenuItemPropsType } from "./Menu.types"
import Link from "next/link"
import { useClickOutside } from "../../../util/clickHandlers"

const MenuItem = (props: MenuItemPropsType) => {
  const linkPath = `/#${props.id}`

  return (
    <span className="text-4xl transform active:scale-95 sm:text-3xl md:text-4xl text-white p-4 pl-0 sm:p-0 sm:pl-4 md:pl-8">
      <Link href={linkPath}>
        <a onClick={props.closeMenu}>{props.text}</a>
      </Link>
    </span>
  )
}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  useClickOutside(menuRef, () => setIsOpen(false))

  return (
    <div
      className={`fixed z-50 right-0 bg-darkGray p-4 grid gap-6 shadow-md sm:w-full sm:h-auto sm:flex sm:flex-row sm:justify-between sm:items-center sm:px-8 ${
        isOpen ? "h-screen grid-rows-menu-open" : "grid-cols-1"
      }`}
      ref={menuRef}
    >
      <button
        className="text-white focus:outline-none block sm:hidden"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {isOpen ? <AiOutlineClose size="2rem" /> : <CgMenu size="2rem" />}
      </button>
      <button
        onClick={() => setIsOpen(false)}
        className={`focus:outline-none sm:block ${!isOpen && "hidden"}`}
      >
        <h2 className="text-5xl sm:text-4xl md:text-5xl text-green">
          The Green Goose
        </h2>
      </button>
      <nav
        className={`flex flex-col col-start-2 justify-around sm:flex sm:flex-row ${
          !isOpen && "hidden"
        }`}
      >
        <MenuItem text="Menu" id="landing" closeMenu={() => setIsOpen(false)} />
        <MenuItem
          text="About us"
          id="about"
          closeMenu={() => setIsOpen(false)}
        />
        <MenuItem text="Hours" id="hours" closeMenu={() => setIsOpen(false)} />
        <MenuItem
          text="Contact"
          id="contact"
          closeMenu={() => setIsOpen(false)}
        />
      </nav>
    </div>
  )
}

export default Menu
