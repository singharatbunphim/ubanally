import React from 'react'
import './MenuLink.scss'

function MenuLink() {
  return (
    <div>
        <div className='menulink'>
            <ul>
                <li className='active'><a>Collection</a></li>
                <li><a>ASEAN Ally Network</a></li>
                <li><a>All Around Bangkok</a></li>
                <li><a>Projects</a></li>
                <li><a>Urban Ally</a></li>
                <li><a>Contact Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default MenuLink