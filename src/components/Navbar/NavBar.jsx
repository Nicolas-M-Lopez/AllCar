import CartWidget from "../CartWidget/cartWidget";
import NavbarCollapse from "../NavbarCollapse/NavbarCollapse";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">AllCar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <NavbarCollapse/>
            <CartWidget/>
          </div>
        </nav>

    );
}

export default NavBar;
