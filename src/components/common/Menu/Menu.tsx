import { useRef, useState } from "react"
import { CgMenu } from "react-icons/cg"
import { MenuItemPropsType } from "./Menu.types"
import Link from "next/link"
import { useClickOutside } from "../../../util/clickHandlers"

const MenuItem = (props: MenuItemPropsType) => (
  <span className="text-4xl text-white">
    <Link href={`/#${props.id}`}>
      <a onClick={props.closeMenu} className="block p-4 pl-0">
        {props.text}
      </a>
    </Link>
  </span>
)

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  useClickOutside(menuRef, () => setIsOpen(false))

  return (
    <div
      className={`fixed z-50 right-0 bg-darkGray p-4 grid gap-6 shadow-md ${
        isOpen ? "h-screen grid-rows-menu-open" : "grid-cols-1"
      }`}
      ref={menuRef}
    >
      <button
        className="text-white inline focus:outline-none"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <CgMenu size="2rem" />
      </button>
      {isOpen && (
        <Link href={`/#`}>
          <a onClick={() => setIsOpen(false)}>
            <h2 className="text-5xl text-green">The Green Goose</h2>
          </a>
        </Link>
      )}
      {isOpen && (
        <nav className="flex flex-col col-start-2 justify-around">
          <MenuItem
            text="Menu"
            id="landing"
            closeMenu={() => setIsOpen(false)}
          />
          <MenuItem
            text="About us"
            id="about"
            closeMenu={() => setIsOpen(false)}
          />
          <MenuItem
            text="Hours"
            id="hours"
            closeMenu={() => setIsOpen(false)}
          />
          <MenuItem
            text="Contact"
            id="contact"
            closeMenu={() => setIsOpen(false)}
          />
        </nav>
      )}
    </div>
  )
}

export default Menu
