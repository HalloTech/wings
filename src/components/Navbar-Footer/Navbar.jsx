import PropTypes from "prop-types";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Polo", href: "/polo" },
  { name: "Hoodies", href: "/hoodies" },
  { name: "Zippers", href: "/zippers" },
  { name: "Oversized", href: "/oversized" },
  { name: "Round Neck TShirts", href: "/rounded-Tshirts" },
  { name: "Contact-Us", href: "#" },
];

const Navbar = ({ footerRef }) => {
  const location = useLocation();

  const handleContactUsClick = (e) => {
    e.preventDefault();
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* desktop navbar */}
      <nav className="flex items-center justify-between bg-yellow-300 py-4">
        <div></div>

        <div className="hidden md:flex items-center gap-4">
          {navigation.map((items, index) => (
            <Link
              key={index}
              to={items.href}
              onClick={
                items.name === "Contact-Us" ? handleContactUsClick : null
              }
              className={`text-base font-semibold px-2 rounded-md hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${
                location.pathname === items.href
                  ? "text-gray-500/100"
                  : "text-black"
              }`}
            >
              {items.name}
            </Link>
          ))}
        </div>

        <Link to={"/hoodies-cart"} className="hidden md:flex pr-4">
          <TiShoppingCart className="text-4xl text-black cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
        </Link>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  footerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Navbar;
