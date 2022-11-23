import Logo  from './subcomponents/Logo'
import NavMenu from './subcomponents/NavMenu'

const Header = () => {

  

  return (
    <>
      <header className="header" id="header">

        <nav className="nav container">

            <Logo />
            
            <NavMenu/>

        </nav>

      </header>
      
    </>
  )
}

export default Header