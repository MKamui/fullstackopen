import React from 'react'

const Course = ({course}) => {
const totalEx = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
        <h1>{course.name}</h1>
        <div>
            {course.parts.map(part => 
            <p key={part.id}>
                {part.name} {part.exercises}
            </p>)}
            <h3>Total of {totalEx} exercises</h3>
        </div>
    </div>
  )
}

export default Course