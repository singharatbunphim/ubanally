import React, {useState ,useEffect} from 'react'
import './Feature.scss'



function Feature() {
  return (
    <>
            <div className='container-fuid'>
                  <div className='feature-con'>
                      <div className='content-left'>
                          <div className='cl-warpper'>
                              <span>ASEAN Ally Network</span>
                              <button type="button" className='button_learnmore'>Learn More</button>
                          </div>
                          <div className='bg'>.</div>
                      </div>
                      <div className='content-right' >
                          <div className='c_title'>
                              <h1>Overview urban data fora better understanding of ASEAN</h1>
                          </div>
                          <div className='c_list_menu'>
                              <ul>
                                <li><span>transit</span></li>
                                <li><span>Demographic</span></li>
                                <li><span>Build envionment</span></li>
                                <li><span>Space sytax</span></li>
                              </ul>
                          </div>
                      </div>
                  </div>
            </div>

            <div className='container-fuid'>
                  <div className='feature-con2'>
                  <div className='content-left'>
                          <div className='cl-warpper'>
                              <span>All around Bangkok</span>
                              <button type="button" className='button_learnmore'>Learn More</button>
                          </div>
                          <div className='bg'>.</div>
                      </div>
                      <div className='content-right' >
                          <div className='c_title'>
                              <h1>Overview urban data fora better understanding of ASEAN</h1>
                          </div>
                          <div className='c_list_menu'>
                              <ul>
                                <li><span>Bangkok</span></li>
                                <li><span>Ratanakosin</span></li>
                              </ul>
                          </div>
                      </div>
                  </div>
            </div>
    
    </>

  )
}

export default Feature