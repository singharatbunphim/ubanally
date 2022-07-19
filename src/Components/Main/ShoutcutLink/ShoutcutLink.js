import React from 'react'
import './ShoutcutLink.scss'
function ShoutcutLink() {
  return (
    <div className='container-fuid'>
        <div className='shoutcut_con'>
            <div className='section-title'>
                <h1>What’s inside in our collection?</h1>
            </div>
            
            <div className='shoutcut_warpper'>
                <div className='shoutcutLink'>
                    <div className='image-logo'>
                        <img src="https://open-data.urbanally.org/assets/images/icons/opendata_cat_iocn-01.png"></img>
                    </div>
                    <div className='lorem'>
                        <p>Set of database on topics that will give you the overview of urban environment</p>
                    </div>
                </div>
                <div className='shoutcutLink'>
                    <div className='image-logo'>
                        <img src="https://open-data.urbanally.org/assets/images/icons/opendata_cat_iocn-02.png"></img>
                    </div>
                    <div className='lorem'>
                        <p>Explore open geodata that you could apply for urban design</p>
                    </div>
                </div>
                <div className='shoutcutLink'>
                    <div className='image-logo'>
                        <img src="https://open-data.urbanally.org/assets/images/icons/opendata_cat_iocn-01.png"></img>
                    </div>
                    <div className='lorem'>
                        <p>Explore bigger context of Urban data at global scale</p>
                    </div>
                </div>
            </div>

            <div className='button-con'>
                <button type="button" className='button_learnmore'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default ShoutcutLink