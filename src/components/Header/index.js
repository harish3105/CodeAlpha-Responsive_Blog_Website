import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">HA</p>
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://i.ibb.co/rMbZTKR/800px-Linked-In-logo-initials.png"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://i.ibb.co/4P7CgVs/25231.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
