import React from 'react'
import Feature from './Feature/Feature'
import './Main_content.scss'
import ShoutcutLink from './ShoutcutLink/ShoutcutLink'
function Main_content() {


  const DataObj =[
    {
      l_title: "ASEAN Ally Network",
      r_title: "Overview urban data fora better understanding of ASEAN",
      menuItems: ['transit','Demographic','Build envionment','Space sytax'],
      img: "https://open-data.urbanally.org/assets/images/home/WelcomeHomeScreenTH-9-image.jpg",
      order: "1"
    },

    {
      l_title: "All around Bangkok",
      r_title: "Explore data visualization of urban settlement and life in Bangkok",
      menuItems: ['Bangkok','Ratanakosin'],
      img: "https://open-data.urbanally.org/assets/images/home/WelcomeHomeScreenTH-9-image.jpg",
      order: "2"
    }
  ];

  
  return (
    <>
          <ShoutcutLink />
          <Feature value={DataObj} />
    </>
  )
}

export default Main_content


