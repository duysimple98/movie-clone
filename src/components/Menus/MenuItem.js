import { randomRgbaColor } from "../../utils";
import { Link } from "react-scroll";

function MenuItem(props) {
  const { name, Icon, to } = props;
  return (
    <Link
      className="subMenu"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      activeClass="active"
    >
      <Icon className="icon" style={{ color: randomRgbaColor(1) }} />
      <span>{name}</span>
    </Link>
  );
}

export default MenuItem;
