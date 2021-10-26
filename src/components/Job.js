import React from 'react'

import { motion } from 'framer-motion'

function Job({ job }) {

    return (
        <motion.div className="job" key={job}
        
            initial     ={{opacity:0, x: 10}}
            animate     ={{opacity: 1, x: 0}}
            transition  ={{
                default: {
                    duration: 3,
                    ease: "anticipate",
                    delay: 0
                },
                scale: {
                    duration: 0.2
                }
            }}

            whileHover={{scale: 1.05}}

        >
            
            <h2>
                {job.title}
            </h2>

            <p className="location">
                <div style={{
                    // color:"rgba(168,167,167, 0.6)"
                    color: "var(--secondary)"
                }}>
                    {job.where}
                </div> <br />
                {job.desc}
            </p>

        </motion.div>
    )
}

export default Job
