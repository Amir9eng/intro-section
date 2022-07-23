import './App.css'
import logo from './images/logo.svg'
import hero from './images/image-hero-desktop.png'
import arrowup from './images/icon-arrow-up.svg'
import arrowdown from './images/icon-arrow-down.svg'
import databiz from './images/client-databiz.svg'
import audiophile from './images/client-audiophile.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
import { useState } from 'react'

function App () {
  const [div, setDiv] = useState(false)
  return (
    <div className='App'>
      <section>
        <nav className='nav-bar'>
          <div className='side'>
            <div>
              <img className='image' src={logo} alt='' />
            </div>
            <div className='features'>
              <p>Features</p>
              <img src={arrowdown} alt='arrowdown' className='arrowdown' />
            </div>
            <div className='company'>
              <p>Company</p>
              <img src={arrowdown} alt='arrowdown' className='arrowdown' />
            </div>
            <p>Careers</p>
            <p>About</p>
          </div>
          <div className='login'>
            <p>Login</p>
            <div className='register'>
              <span>Register</span>
            </div>
          </div>
        </nav>

        <main>
          {' '}
          <div className='remote'>
            <div>
              <h1>Make remote work</h1>
              <p>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
            </div>
            <button onClick={() => setDiv(prev => !prev)} className='button'>
              Learn more
            </button>
            {div && (
              <div
                style={{ width: '20px', height: '20px', background: 'red' }}
              ></div>
            )}
            <div className='down'>
              <img src={databiz} alt='databiz' />
              <img src={audiophile} alt='audiophile' />
              <img src={meet} alt='meet' />
              <img src={maker} alt='maker' />
            </div>
          </div>
          <img src={hero} alt='hero' className='hero' />
        </main>

        {/* <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
      </section>
    </div>
  )
}

export default App
