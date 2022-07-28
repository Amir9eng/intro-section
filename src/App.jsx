import './App.css'
import logo from './images/logo.svg'
import hero from './images/image-hero-desktop.png'
import mobile from './images/image-hero-mobile.png'
import arrowup from './images/icon-arrow-up.svg'
import arrowdown from './images/icon-arrow-down.svg'
import databiz from './images/client-databiz.svg'
import audiophile from './images/client-audiophile.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
import todolist from './images/icon-todo.svg'
import calendar from './images/icon-calendar.svg'
import reminder from './images/icon-reminders.svg'
import planning from './images/icon-planning.svg'

import { useState } from 'react'

function App () {
  const [div, setDiv] = useState(false)
  const [company, setCompany] = useState(false)

  return (
    <div className='App'>
      <section>
        <nav className='nav-bar'>
          <div className='side'>
            <div>
              <img className='image' src={logo} alt='' />
            </div>
            <div className='features' onClick={() => setDiv(prev => !prev)}>
              <p>Features</p>
              {div ? (
                <img src={arrowup} alt='arrowup' className='arrowdown' />
              ) : (
                <img src={arrowdown} alt='arrowdown' className='arrowdown' />
              )}
              {div && (
                <div className='dropdown'>
                  <div className='option'>
                    <img src={todolist} alt='Todolist' />
                    <span>Todo List</span>
                  </div>
                  <div className='option'>
                    <img src={calendar} alt='calendar' />
                    <span>Calendar</span>
                  </div>
                  <div className='option'>
                    <img src={reminder} alt='reminder' />
                    <span>Reminders</span>
                  </div>
                  <div className='option'>
                    <img src={planning} alt='planning' />
                    <span>Planning</span>
                  </div>
                </div>
              )}
            </div>
            <div className='company' onClick={() => setCompany(prev => !prev)}>
              <p>Company</p>
              {company ? (
                <img src={arrowup} alt='arrowup' className='arrowdown' />
              ) : (
                <img src={arrowdown} alt='arrowdown' className='arrowdown' />
              )}
              {company && (
                <div className='dropdown history'>
                  <span>History</span>
                  <span>Our Team</span>
                  <span>Blog</span>
                </div>
              )}
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
              <div className='mobile'>
                <img src={mobile} alt='' />
              </div>
              <h1>Make remote work</h1>
              <p>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
            </div>
            <button className='button'>Learn more</button>
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
