import React from 'react'

import { motion } from 'framer-motion'

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
    return (
        <motion.div
        
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit    = {{opacity: 0}}

            key = "Contact"
        
        >
            
            <h1>
                Contact
            </h1>

            <br />

            <p>
                <EmailIcon style = {{marginRight: 10}}></EmailIcon> waelbmahrous@gmail.com <br />
                <PhoneIcon style = {{marginRight: 10}}></PhoneIcon> +46737059305
            </p>

            <br />

            <h3>
                beep boop.
            </h3>

        </motion.div>
    )
}

export default Contact
