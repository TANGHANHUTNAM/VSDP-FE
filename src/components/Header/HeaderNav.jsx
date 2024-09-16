import logo from "../../assets/images/logovh.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LuList } from "react-icons/lu";
import { FaRegHandPointRight } from "react-icons/fa";
import "./HeaderNav.css";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
const HeaderNav = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  const location = useLocation();
  const { pathname } = location;
  const isHomePage = pathname === "/";
  return (
    <nav
      className={`${isHomePage ? "fixed" : "sticky"} start-0 top-0 z-20 w-full border-b-2 border-t-8 border-solid border-black/30 border-t-bgVH bg-white p-4 md:rounded-b-2xl md:border-b-4 md:shadow-2xl`}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-12" alt="logo" />
          <span className="self-center whitespace-nowrap text-2xl font-bold text-bgVH">
            VSDP
          </span>
        </Link>
        {/* NavLink */}
        <div className="h hidden flex-row items-center text-lg font-bold text-bgVH md:flex md:space-x-7">
          <NavLink
            className="navbar-link duration-200 hover:text-green-400"
            to="/"
          >
            {t("Header.Title.Home")}
          </NavLink>

          <NavLink
            className="navbar-link group cursor-pointer duration-300 hover:text-green-400"
            to="/informations"
          >
            {t("Header.Title.Information")}
            <div className="hidden group-hover:md:block"></div>
          </NavLink>

          <NavLink
            className="navbar-link duration-200 hover:text-green-400"
            to="/about-us"
          >
            {t("Header.Title.About")}
          </NavLink>

          <NavLink
            className="navbar-link duration-200 hover:text-green-400"
            to="/contact-us"
          >
            {t("Header.Title.Contact")}
          </NavLink>

          <NavLink
            className="navbar-link duration-200 hover:text-green-400"
            to="/cv"
          >
            {t("Header.Title.CV")}
          </NavLink>
        </div>
        <div className="flex gap-1">
          {/* Button Apply */}
          <div className="flex space-x-3 md:order-2 md:space-x-0">
            <NavLink
              to="/apply"
              className="button-apply rounded-md border-b-4 border-r-4 border-solid border-black/20 bg-bgVH px-4 py-2 text-center text-sm font-medium text-white shadow-xl hover:bg-green-400"
            >
              <FaRegHandPointRight className="mr-2 inline-block h-4 w-4" />
              {t("Header.Title.Apply")}
            </NavLink>
          </div>
          {/* Button Menu */}
          <button
            onClick={handleToggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border-b-4 border-r-4 border-solid border-black/20 bg-bgVH p-2 text-sm text-white hover:bg-green-400 md:hidden"
          >
            {open ? (
              <IoMdClose className="h-6 w-6" />
            ) : (
              <LuList className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`absolute left-0 top-full z-50 min-h-screen overflow-hidden bg-black/80 py-20 duration-500 md:hidden ${
            open ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 space-y-4 p-4 text-lg font-bold text-bgVH md:mt-0 md:flex-row md:gap-0 md:space-x-8 md:border-0 md:p-0">
            <NavLink
              className="navbar-link duration-200 hover:text-green-400"
              to="/"
            >
              {t("Header.Title.Home")}
            </NavLink>

            <NavLink
              className="navbar-link group cursor-pointer duration-300 hover:text-green-400"
              to="/informations"
            >
              {t("Header.Title.Information")}
            </NavLink>

            <NavLink
              className="navbar-link duration-200 hover:text-green-400"
              to="/about-us"
            >
              {t("Header.Title.About")}
            </NavLink>

            <NavLink
              className="navbar-link duration-200 hover:text-green-400"
              to="/contact-us"
            >
              {t("Header.Title.Contact")}
            </NavLink>

            <NavLink
              className="navbar-link duration-200 hover:text-green-400"
              to="/cv"
            >
              {t("Header.Title.CV")}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
