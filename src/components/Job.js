import React from 'react'

function Job({ title, description, date }) {
    return (
        <div>
            {title} <br />
            {description} <br />
            {date} <br />
        </div>
    )
}

export default Job
