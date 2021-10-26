import React from 'react'

import { motion } from 'framer-motion'

import JobDisplay from './JobDisplay'

function Experience() {

    return (
        <motion.div

            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit    = {{opacity: 0}}

            key         = "Experience"
            className   = "experience"
        >
            
            <div>
                <h1>
                    Experience
                </h1>

                <p>
                    I am currently studying and working part-time in Malmö. 
                </p>
                
                <br />
                <h3>
                    Someday in the future, this page will be filled with fun stuff.
                </h3>

            </div>

            <div className="right-experience">
                <JobDisplay></JobDisplay>
            </div>

        </motion.div>
    )
}

export default Experience
