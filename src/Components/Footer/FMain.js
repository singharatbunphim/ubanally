import React from 'react'
import './FMain.scss'
function FMain() {
  return (
    <div className='container-fuid'>
        <div className='footer'>
            <div className='footer-warpper'>
                    <div className='footer-header'>OPEN DATA SITE MAP</div>
            </div>
            <div className='footer-bottom'>
                <div className='list-items'>
                    <span><a>ASEAN Open Data</a></span>
                    <ul>
                        <li>Urban Context</li>
                        <li>Urban Design</li>
                        <li>Global Data</li>
                    </ul>
                </div>

                <div className='list-items'>
                    <span><a>ASEAN Ally Network</a></span>
                    <ul>
                        <li>Transit</li>
                        <li>Demographic</li>
                        <li>Base Data (Map)</li>
                    </ul>
                </div>

                <div className='list-items'>
                    <span><a>Bangkok</a></span>
                    <ul>
                        <li>Inner Bangkok</li>
                        <li>Rattanakosin</li>
                    </ul>
                </div>

                <div className='switchmenu'>
                    <div className='list-items'><a>Urban Ally</a></div>
                    <div className='list-items'><a>About</a></div>
                    <div className='list-items'><a>Contact</a></div>
                </div>

            </div>
            <div className='footer-lasted'>COPYRIGHT @ 2022. ALL RIGHTS RESERVED.</div>
        </div>
    </div>
  )
}

export default FMain