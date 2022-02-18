
import './App.css';
import{ useEffect } from 'react'

function App() {
  useEffect(() =>{
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');

    navToggle.addEventListener('click', () =>{
      document.body.classList.toggle('nav-open');
    })

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
      })
    })

  },[]);
  return (
    <div className="html">
      <div className="header">
        <div className="logo">
          <img src="images/logo.png" />
        </div>
        
        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>

          </ul>
        </nav>
      </div>
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong> Moohammad Rashidy</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">FRONT-END Dev</p>
        <img src="/images/eye.jpeg" className="intro__img"/>
      </section>

      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I Do</h2>
        <div className="services">
          <div className="service">
            <h3>Design + Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className="service">
            <h3>E-Commerce</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className="service">
            <h3>Software Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div> 
        <a href="#work" className="btn" >My Work</a>
      </section>

      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I Am</h2>
        <p className="section__subtitle section__subtitle--about">Designer & Developer Based Out of Iran</p>
        <div className="about-me__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img src="/images/who.png" className="about-me__img"/>
      </section>

      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">A Selection of My Range of Work</p>

        <div className="portfolio">
          <a href="#" className="portfolio__item">
            <img src="/images/1.jpeg" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="/images/2.jpeg" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="/images/3.jpeg" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="/images/4.jpeg" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="/images/5.jpeg" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="/images/6.jpeg" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="/images/7.jpeg" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="/images/8.jpeg" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="/images/9.jpeg" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="/images/10.jpeg" className="portfolio__img" />
          </a>
        </div>
      </section>

      <div className="footer">
        <a href="#" className="footer__link">mouhamadrashidy@gmail.com</a>
        <ul className="social-list">
          <li className="social-list__item"><a className="social-list__link"
          href="https://codepen.io">CodePen</a></li>
          <li className="social-list__item"><a className="social-list__link"
          href="https://dribbble.com">Dribbble</a></li>
          <li className="social-list__item"><a className="social-list__link"
          href="https://twitter.com">Twitter</a></li>
          <li className="social-list__item"><a className="social-list__link"
          href="https://github.com">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
