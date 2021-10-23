import React from 'react'

import { motion } from 'framer-motion';
import { Link } from '@mui/material';

import InstagramIcon    from '@mui/icons-material/Instagram';
import FacebookIcon     from '@mui/icons-material/Facebook';
import GitHubIcon       from '@mui/icons-material/GitHub';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import Experience from './pages/Experience';
import Contact from './pages/Contact';

function MenuBar({ setSelectedDisplay }) {

    const instagramLink = "https://www.instagram.com/_waelbm"
    const facebookLink  = "https://www.facebook.com/himynameiswael"
    const githubLink    = "https://github.com/waelsucks"
    const spotifyLink   = "https://open.spotify.com/artist/1c900ggAc3AokqNCxPm2LQ?si=zzEGJ8ZXTWaf3Iihc8uv1w"

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0,
            staggerChildren: 0.15
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return (
        <motion.div className = "MenuBar"
        
            variants    = {container}
            initial     = "hidden"
            animate     = "show"
        
        >

            <motion.div className="link" variants = {item}>
                <Link color ="inherit" href={instagramLink} target ="_blank">
                    <InstagramIcon></InstagramIcon>
                </Link>
            </motion.div>

            <motion.div className="link" variants = {item}>
                <Link color ="inherit" href={facebookLink} target ="_blank">
                    <FacebookIcon></FacebookIcon>
                </Link>
            </motion.div>

            <motion.div className="link" variants = {item}>
                <Link color ="inherit" href={githubLink} target ="_blank">
                    <GitHubIcon></GitHubIcon>
                </Link>
            </motion.div>

            <motion.div className="link" variants = {item}>
                <Link color ="inherit" href={spotifyLink} target ="_blank">
                <LibraryMusicIcon></LibraryMusicIcon>
                </Link>
            </motion.div>

            <div className="Menu">

                <motion.div className="link" variants = {item}>
                    <Link color ="inherit" onClick={() => setSelectedDisplay(false)} underline="none">
                       Home.
                    </Link>
                </motion.div>

                <motion.div className="link" variants = {item}>
                    <Link color ="inherit" onClick={() => setSelectedDisplay(Experience)} underline="none">
                        Experience.
                    </Link>
                </motion.div>

                <motion.div className="link" variants = {item}>
                    <Link color ="inherit" onClick={() => setSelectedDisplay(Contact)} underline="none">
                        Contact.
                    </Link>
                </motion.div>

                <motion.div className="link" variants = {item}>
                    <p
                        
                        style = {{
                            fontSize: "small",
                            userSelect: "none"
                        }}
                    
                    >
                        (work in progress...)
                    </p>
                </motion.div>
                
            </div>

        </motion.div>
    )
}

export default MenuBar
