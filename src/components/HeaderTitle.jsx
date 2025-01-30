import React from "react";
import "../styles/components/HeaderTitle.scss";
import { useLocation, Link } from "react-router-dom";

const HeaderTitle = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Hàm lấy title của từng path
  const getPageTitle = (path) => {
    switch (path) {
      case "aboutus":
        return "About Us";
      case "gallery":
        return "Gallery";
      case "activity":
        return "Activity";
      case "review":
        return "Review";
      case "contactus":
        return "Contact Us";
      case "tickets":
        return "Tickets";
      default:
        return "Home";
    }
  };

  // Hàm để lấy title dựa trên route
  const getTitle = () => {
    const path = location.pathname;
    return getPageTitle(path.slice(1));
  };

  // Hàm để tạo breadcrumb
  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbs = pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      const title = getPageTitle(name);
      return isLast ? (
        <span key={name}>{title}</span>
      ) : (
        <Link key={name} to={routeTo}>
          {title}
        </Link>
      );
    });
    return breadcrumbs;
  };

  if (isHomePage) {
    return null; // or return <></>; to render nothing
  }
  return (
    <>
      <div className="header-title">
        <h1 className="title-session">{getTitle()}</h1>
        <nav className="breadcrumb-nav">
          <Link to="/">Home</Link> <span> &gt; </span> {getBreadcrumbs()}
        </nav>
      </div>
    </>
  );
};

export default HeaderTitle;
