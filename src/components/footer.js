/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "primary",
    }}
  >
    <div className="container">
      <p>
        Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by{" "}
        <a href="https://github.com/josepwil" target="_blank">
          josepwil
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
