import React from 'react'

const Education = ({height}) => {
  return (
    <div className='edu'>
      {console.log(height)}
       <span className='header'>Education <hr/></span> 

       <ul className='education-list'>
         <li>
            <img src='images/1619502855113-removebg-preview.png' alt='schoolImage'/>
            <span className='school'>Sanskar College of Engineering and Technology, </span>
            <span className='school-location'>Ghaziabad, Uttarpradesh</span>
            <div>
              <span className='school-location'>Graduation (Sep, 2019 - present)</span>
              <div>
                 <span className='marks'>Computer Science Engineering (7.8 GPA)</span>
              </div>
            </div>
         </li>
         <li>
            <img src='https://www.joonsquare.com/usermanage/image/business/l-n-public-school-hapur-2297/l-n-public-school-hapur-logo.png' alt='schoolImage'/>
            <span className='school'>L.N Public School, </span>
            <span className='school-location'>Hapur, Uttarpradesh</span>
            <div>
              <span className='school-location'>Higher Secondary Education (May, 2018 - May, 2019)</span>
              <div>
                 <span className='marks'>Science & Math (60%)</span>
              </div>
            </div>
         </li>
       </ul>

    </div>
  )
}

export default Education