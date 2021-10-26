import React from 'react'

import Job from './Job'

function JobDisplay() {

    const jobs = [
        {
            title:  'Developer',
            where:  'Lån & Spar Bank Malmö',
            desc:   'Working on automating many bank processes and general upkeep of the technical department in the bank.'
        },
        {
            title:  'Student',
            where:  'Malmö University / Lund University',
            desc:   'Computer Science & Engineering.'
        }
    ]

    return (
        <div>
            {jobs.map( (job) => {return(
                <Job job = {job} ></Job>
            )} )}
        </div>
    )
}

export default JobDisplay
