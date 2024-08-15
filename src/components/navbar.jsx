import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import {} from 'react-icons/ai'

function Navbar() {
  const navItems = [
    {
      link: "Overview",
      path: "#",
      id: 1,
    },
    {
      link: "Features",
      path: "#",
      id: 2,
    },
  ];

  return (
    <nav className="w-full bg-colorBg">
      <div className="flex justify-between items-center h-24 max-w-[80%] mx-auto px-4">
        <a href="" className="w-32">
          <img src={logo} alt="" />
        </a>

        <ul className="hidden md:flex space-x-16 items-center">
          {navItems.map(({ link, path, id }) => (
            <Link
              key={id}
              to={path}
              className="block text-base text-figmaBlack font-bold cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </ul>

        <button className="bg-figmaGreen text-white px-4 py-2 text-center duration-300 rounded">
          Admin
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
