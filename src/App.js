import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import MenuBar from './components/MenuBar';
import Display from './components/Display';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {

    const [selectedDisplay  , setSelectedDisplay]   = useState(null);
    
    let isMobile = false;

    if (window.screen.width >= 1280) {
        isMobile = false
    } else {
        isMobile = true
    }

    return (
        <div className="App">
            
            {!isMobile && <>
                <MenuBar setSelectedDisplay = {setSelectedDisplay}></MenuBar>     <br /> <br /> <br />

                <motion.div className="Main-Page"

                    initial = {{opacity: 0, x: -100}}
                    animate = {{opacity: 1, x: 0}}
                    transition = {{duration: 5, ease: "anticipate"}}

                >

                    <AnimatePresence
                    
                        exitBeforeEnter
                    
                    >

                        {!selectedDisplay && <motion.div className="left-display"
                        
                        initial = {{opacity: 0, x: ""}}
                        animate = {{opacity: 1, x: 0}}
                        exit    = {{opacity: 0, x: ""}}

                        transition = {{
                            duration: 0.5
                        }}
                        
                        key = "left"

                    >
                    
                            <Header></Header>       <br /> <br />
                            <Content></Content>

                        </motion.div>}

                        {selectedDisplay && <motion.div className="right-display"
                        
                            initial = {{opacity: 0, x: "+1vw"}}
                            animate = {{opacity: 1, x: 0}}
                            exit    = {{opacity: 0, x: "+1vw"}}

                            transition = {{
                                duration: 0.5
                            }}
                            
                            key = "right"

                        >
                        
                            <Display selectedDisplay={selectedDisplay}></Display>

                        </motion.div>}
                    </AnimatePresence>
                </motion.div>
            </>}

            {isMobile && <div
            
                style = {{
                    textAlign: "left"
                }}
            
            >
            
                <div className="Content">
                    <h1>
                        Hello!
                    </h1>

                    <h2>
                        Unfortunately, this site isn't available for mobile.
                    </h2>
                    <br />
                    <br />

                    yet.
                    
                </div>
            
            </div>}

        </div>
    );
}

export default App;
