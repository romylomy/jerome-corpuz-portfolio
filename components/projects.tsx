import React from 'react'
import { experiencesData } from '@/lib/data'

export default function Projects() {
  return (
    <section>
        <div>
            {
                experiencesData.map((experience, index ) =>(
                    <React.Fragment key={index}>
                        <Project {...experience}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}

type ProjectProps = (typeof experiencesData)[number]; 

function Project({title, description}:ProjectProps){
    return(
        <section>
            
        </section>
    )
    
}