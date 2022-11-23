

const AutoPartes = () => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Partes
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Neumaticos</a></li>
            <li><a className="dropdown-item" href="#">Aceite</a></li>
            <li><a className="dropdown-item" href="#">Ploteados</a></li>
          </ul>
        </li>
    );
}

export default AutoPartes;
