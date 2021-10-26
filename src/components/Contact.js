import React from 'react'

import { motion } from 'framer-motion'

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

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

            <p>
                Am I taking too long to answer? <br />
                Here's a representation of me you can drag around and shake <br />
                while you wait :).
            </p> <br />

            <motion.div style={{width:30}} drag 
            
                dragConstraints={{
                    top: -200,
                    right: 800,
                    left: -50,
                    bottom: 0
                }}
            
            >
                <AccessibilityIcon sx={{fontSize: 100}} color="success"></AccessibilityIcon>
            </motion.div>

        </motion.div>
    )
}

export default Contact
