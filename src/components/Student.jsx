import React from 'react'

function Student(props) {
    return(
        <div className='w-100 py-10 text-2xl'>
            <a className="hover:text-stone-500" href={props.link} target="_blank">{props.name}</a>
        </div>
    )
}
  
export default Student
  