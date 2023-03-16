import React from 'react'

const Experience = () => {
  return (
    <div className='exp'>
       <span className='header'>Experience <hr/></span>

       <div className='exp1'>
         <img src='images/0000000000000723-removebg-preview.png' alt='companyImage'></img>
         <span className='exp-name'>Coding Ninjas</span>
         <span className='exp-dur'>4 Months</span>
         <ul className='exp-pos'>
          <li>
             <p className='exp-pos-name'>Teaching Assistant<span>(Internship)</span></p>
             <p className='exp-pos-dur'>Oct 2022 - Feb 2023</p>
             <ul className='exp-res'>
               <li>Solved 500 doubts related to Data Structures and Algorithms. </li>
               <li> Assisting students with resolving their Data Structures and Algorithms (DSA)
related doubts and concerns.</li>
               <li>Debugging and troubleshooting Data Structures and Algorithms (DSA) code to
identify and resolve issues.
</li>
             </ul>
          </li>
         </ul>
       </div>

    </div>
  )
}

export default Experience