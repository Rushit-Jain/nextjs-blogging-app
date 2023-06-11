import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./Navigation.module.css";

function Navigation() {
  const router = useRouter();

  return (
    <nav className={"navbar navbar-expand-lg " + classes.customNavbar}>
      <Link className="navbar-brand" href="/">
        Tech Articles
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className={
                router.pathname === "/"
                  ? classes.customActive + " nav-link " + classes.customNavLink
                  : " nav-link " + classes.customNavLink
              }
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                router.pathname === "/posts"
                  ? classes.customActive + " nav-link " + classes.customNavLink
                  : " nav-link " + classes.customNavLink
              }
              href="/posts"
            >
              Read Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                router.pathname === "/write-article"
                  ? classes.customActive + " nav-link " + classes.customNavLink
                  : " nav-link " + classes.customNavLink
              }
              href="/write-article"
            >
              Write an Article
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className={
                router.pathname === "/profile"
                  ? classes.customActive +
                    " nav-link ms-0 " +
                    classes.customNavLink
                  : "nav-link ms-0 " + classes.customNavLink
              }
              href="/profile"
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                router.pathname === "/authenticate"
                  ? classes.customActive +
                    " nav-link ms-0 " +
                    classes.customNavLink
                  : "nav-link ms-0 " + classes.customNavLink
              }
              href="/authenticate"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
