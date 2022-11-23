import logo  from '../../assets/img/logo.png'; 

const Logo = () => {
  return (
    <>
        <a href="#" className="nav__logo">
            <img src={logo} alt="logo" />
            Sushi-App
        </a>
    </>
  )
}

export default Logo