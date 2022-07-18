import React from 'react'
import './Logo.scss'

function Logo() {
    return (
        <div className='logo-group active'>
            <div className='svg_group'>
                <svg className='svg_logo' xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  viewBox="0 0 83.281 46.702">
                    <g transform="translate(-56.297 -42.472)">
                        <path d="M56.3,42.472H72.014V73.727H87.372V42.472h15.807V61.058L89.348,89.174H56.3Z" fill="#1a1818"></path>
                        <path d="M124.233,57.838l-7.524-15.365H116.7l-7.524,15.365L93.833,89.174h15.055l7.817-15.964,7.817,15.964h15.055Z" fill="#1a1818"></path>
                    </g>
                </svg>
            </div>
            <div className='group_child'>
                <span>Open Data</span>
            </div>

        </div>
    )
}

export default Logo
