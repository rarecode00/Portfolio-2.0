import React from 'react'

const Interest = () => {
  return (
    <div className='interest'>
       <span className='header'>Interests <hr/></span>        
       <div className='interest-list'>
          <div className='interest-item'>
          <img src = "https://cdn-icons-png.flaticon.com/512/1197/1197409.png" alt='programmingicon'/>
          <span className='interest-text'>Passionate about <span> Programming</span></span>
          </div>
          <div className='interest-item'>
          <img src = "https://cdn-icons-png.flaticon.com/512/3933/3933746.png" alt='cricketicon'/>
          <span className='interest-text'>Playing <span> Cricket</span></span>
          </div>
          <div className='interest-item'>
          <img src = "https://cdn-icons-png.flaticon.com/512/2829/2829075.png" alt='musicicon'/>
          <span className='interest-text'>Listening to <span>Music</span> </span>
          </div>
       </div>
    </div>
  )
}

export default Interest