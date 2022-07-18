import React from 'react'
import './content.scss'
import ContentLink from './contentLink'

function content() {
  return (
    <div className='container'>
        <div className='Content_wrapper'>
            <div className='Content_title'>
                    <h1>ASEAN</h1>
                    <span>Open Data</span>
            </div>
            <ContentLink />
        </div>
    </div>
  )
}

export default content