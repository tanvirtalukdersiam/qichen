import Link from "next/link";
import { Fragment, useState } from "react";

const DeskTopMenus = () => {
  return (
    <nav className="main-menu desktop-menu">
      <ul>
        <li className="menu-item has-children">
          <a href="/">Home</a>
          {/* <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/">
                Home Restaurant
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="index-2">
                Home Fastfood
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="index-3">
                Home Seafood
              </Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item has-children">
          <a href="menu-fastfood">
            Menu
            {/* <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span> */}
          </a>
          {/* <ul className="sub-menu">
            <li>
              <Link legacyBehavior>Menu Fastfood</Link>
            </li>
            <li>
              <Link legacyBehavior href="menu-seafood">
                Menu Seafood
              </Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="about">
            About
          </Link>
        </li>
        <li className="menu-item has-children">
          <a href="products">
            Shop
            {/* <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span> */}
          </a>
          {/* <ul className="sub-menu">
            <li>
              <Link legacyBehavior >
                Our Products
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="product-details">
                Product Details
              </Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item has-children">
          <a href="blog-standard">
            Blog
            {/* <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span> */}
          </a>
          {/* <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="blog-standard">
                Blog Standard
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-details">
                Blog Details
              </Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item has-children">
          <a href="contact">
            Contact
            {/* <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span> */}
          </a>
          {/* <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="gallery">
                Our Gallery
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="chefs">
                Our Chefs
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="history">
                Our History
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="reservations">
                Reservations
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="404">
                404
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="faq">
                Faq
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="contact">
                Contact
              </Link>
            </li>
          </ul> */}
        </li>
      </ul>
    </nav>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "sub-menu-open" : ""),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu mobile-menu">
      <ul>
        <li className="menu-item has-children">
          {/* onClick={() => active("home")} */}
          <a href="/">
            Home
            {/* <span className={`dd-trigger ${activeIcon("home")}`}>
              <i className="far fa-angle-down" />
            </span> */}
          </a>
          {/* <ul className="sub-menu" style={activeSubMenu("home")}>
            <li>
              <Link legacyBehavior href="/">
                Home Restaurant
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="index-2">
                Home Fastfood
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="index-3">
                Home Seafood
              </Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item has-children">
          {/* onClick={() => active("Menu")} */}
          <a href="menu-fastfood">
            Menu
            {/* <span className={`dd-trigger ${activeIcon("Menu")}`}>
              <i className="far fa-angle-down" />
            </span> */}
          </a>
          {/* <ul className="sub-menu" style={activeSubMenu("Menu")}>
            <li>
              <Link legacyBehavior href="menu-fastfood">
                Menu Fastfood
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="menu-seafood">
                Menu Seafood
              </Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="about">
            About
          </Link>
        </li>
        <li className="menu-item has-children">
          {/* onClick={() => active("Shop")} */}
          <a href="products">
            Shop
            {/* <span className={`dd-trigger ${activeIcon("Shop")}`}>
              <i className="far fa-angle-down" />
            </span> */}
          </a>
          {/* <ul className="sub-menu" style={activeSubMenu("Shop")}>
            <li>
              <Link legacyBehavior href="products">
                Our Products
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="product-details">
                Product Details
              </Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item has-children">
          {/* href="#" onClick={() => active("Blog")} */}
          <a href="blog-standard">
            Blog
            {/* <span className={`dd-trigger ${activeIcon("Blog")}`}>
              <i className="far fa-angle-down" />
            </span> */}
          </a>
          {/* <ul className="sub-menu" style={activeSubMenu("Blog")}>
            <li>
              <Link legacyBehavior href="blog-standard">
                Blog Standard
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-details">
                Blog Details
              </Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item has-children">
          {/* href="#" onClick={() => active("Pages")} */}
          <a href="contact">
            Contact
            {/* <span className={`dd-trigger ${activeIcon("Pages")}`}>
              <i className="far fa-angle-down" />
            </span> */}
          </a>
          {/* <ul className="sub-menu" style={activeSubMenu("Pages")}>
            <li>
              <Link legacyBehavior href="gallery">
                Our Gallery
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="chefs">
                Our Chefs
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="history">
                Our History
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="reservations">
                Reservations
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="404">
                404
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="faq">
                Faq
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="contact">
                Contact
              </Link>
            </li>
          </ul> */}
        </li>
      </ul>
    </nav>
  );
};

const Menus = () => {
  return (
    <Fragment>
      <DeskTopMenus />
      <MobileMenu />
    </Fragment>
  );
};

export default Menus;
