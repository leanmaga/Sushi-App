import img2 from '../../assets/img/leaf-branch-2.png';
import img3 from '../../assets/img/leaf-branch-3.png';

const NavMenu = () => {

  return (
    <nav>
        <div className="nav__menu" id="nav-menu" >

            <ul className="nav__list">

                <li className="nav__item">
                    <a href="#home" className="nav__link" >Home</a>
                </li>

                <li className="nav__item">
                    <a href="#about" className="nav__link" >About us</a>
                </li>

                <li className="nav__item">
                    <a href="#popular" className="nav__link" >Popular</a>
                </li>

                <li className="nav__item">
                    <a href="#recently" className="nav__link" >Recently</a>
                </li>
                
            </ul>

            {/*Close Button*/}

            <div className="nav__close" id="nav-close" >
                <i className="ri-close-line"></i>
            </div>

            <img src={img2} alt="hojas-background" className="nav__img-1" />
            <img src={img3} alt="hojas-background" className="nav__img-2" />
        </div>

        <div className="nav__buttons">
            {/*THEME CHANGE BUTTON*/}
            {/* <i className="ri-moon-line change-theme" id='theme-button'></i>*/}
            
            {/*TOGGLE BUTTON*/}
            
            <div className="nav__toggle" id="nav-toggle" >
                <i className="ri-apps-2-line"></i>
            </div>

        </div>

    </nav>
    
  )
}

export default NavMenu