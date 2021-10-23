import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

function Experience() {
    return (
        <motion.div
        
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit    = {{opacity: 0}}

            key = "Experience"
        
        >
            
            <h1>
                Experience
            </h1>

            <p>
                Here I will list my experiences and what not.
            </p>

            <br />

            <h3>
                Maybe even put a chart or something.
            </h3>

        </motion.div>
    )
}

export default Experience
