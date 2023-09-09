import Social from '../Social'

function Navbar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-2 fixed-top">
      <div className="container-fluid">
        <a href="#home">
        <img src='../../public/logo-1.png' width='150px'/> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Sobre">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Edicoes">Edições</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Eventos">Eventos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contato">Contato</a>
              </li>
            </ul>
          </div>
          <Social />
      </div>
    </nav>
    
    </>
  )
}
export default Navbar;