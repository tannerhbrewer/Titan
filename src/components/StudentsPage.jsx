import React from 'react'
import Student from './Student'

function StudentsPage() {
    return(
      <div className='flex-grow min-w-screen
      flex flex-col'>
        <div className='text-center pt-10 pb-10 text-3xl font-bold'>
            Class of 2024
        </div>
        <div className='text-center grid grid-cols-2'>
            <Student name="Sam Beal" link="/2024/Beal/index.html"/>
            <Student name="Tanner Brewer" link="/2024/Brewer/index.html"/>
            <Student name="John Burroughs" link="/2024/Burroughs/index.html"/>
            <Student name="Jeremy Collins" link="/2024/Collins/index.html"/>
            <Student name="Ryan Davis" link="/2024/Davis/index.html"/>
            <Student name="Matt Gavell" link="/2024/Gavell/index.html"/>
            <Student name="Adam Ouellette" link="/2024/Ouellette/index.html"/>
            <Student name="Dylan Scott" link="/2024/Scott/index.html"/>
            <Student name="Justin Windle" link="/2024/Windle/index.html"/>
        </div>
      </div>
    )
}
  
export default StudentsPage
  