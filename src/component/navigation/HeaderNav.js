import { Link } from "@reach/router";

const HeaderNav = () => (
  <div className="header_nav">
    <nav>
      <Link to="/">home</Link> | <Link to="/one">one</Link> | <Link to="/two">two</Link> | <Link to="/three">three</Link> | <Link to="/four">four</Link>
    </nav>
    <br />
  </div>
);

export default HeaderNav;