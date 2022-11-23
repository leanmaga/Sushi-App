import  rolls  from '../assets/img/home-sushi-rolls.png'
import home from '../assets/img/home-sushi-title.png';
import branch from '../assets/img/leaf-branch-1.png';
import branch2 from '../assets/img/leaf-branch-2.png';

const Main = () => {
  return (
    <>
        <div className="main">
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <img src={ rolls } alt="rolls" className="home__img" />

                    <div className="home__data">
                        <h1 className="home__title">
                            Enjoy Delicious
                            <img src={home} alt="home image" />
                            Sushi Food
                        </h1>

                        <p className="home__description">
                            Enjoy a good dinner with the best dishes in the restaurant and improve your day.
                        </p>

                        <a href="#" className="button">Order Now
                            <i className="ri-arrow-right-line"></i>
                        </a>

                    </div>
                </div>

                <img src={branch} alt="branch" className="home__leaf-1" />
                <img src={branch2} alt="branch" className="home__leaf-2" />
            </section>
        </div>
    </>
  )
}

export default Main