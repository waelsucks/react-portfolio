import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import MenuBar from './components/MenuBar';
import Display from './components/Display';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {

    const [selectedDisplay, setSelectedDisplay] = useState(null);

    return (
        <div className="App">
            
            <MenuBar setSelectedDisplay = {setSelectedDisplay}></MenuBar>     <br /> <br /> <br />

            <motion.div className="Main-Page"
            
                initial = {{opacity: 0, x: -10}}
                animate = {{opacity: 1, x: 0}}
                transition = {{duration: 5, ease: "anticipate"}}
            
            >

                <AnimatePresence
                
                    exitBeforeEnter
                
                >

                    {!selectedDisplay && <motion.div className="left-display"
                    
                    initial = {{opacity: 0, x: -10}}
                    animate = {{opacity: 1, x: 0}}
                    exit    = {{opacity: 0}}

                    transition = {{
                        // duration: 1,
                        type: "spring"
                    }}
                    
                    key = "left"

                >
                
                        <Header></Header>       <br /> <br />
                        <Content></Content>

                    </motion.div>}

                    {selectedDisplay && <motion.div className="right-display"
                    
                        initial = {{opacity: 0, x: "+5vw"}}
                        animate = {{opacity: 1, x: 0}}
                        exit    = {{opacity: 0, x: "+5vw"}}

                        transition = {{
                            duration: 0.5
                        }}
                        
                        key = "right"

                    >
                    
                        <Display selectedDisplay={selectedDisplay}></Display>

                    </motion.div>}
                </AnimatePresence>
                

            </motion.div>

            {/* <motion.div className="helloScreen"
                
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{duration: 1.3, repeat: 1 ,repeatType: "reverse", ease: "anticipate"}}
                
                >
                    <p>
                        hello.
                    </p>
            </motion.div> */}

        </div>
    );
}

export default App;
