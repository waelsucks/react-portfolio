import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import MenuBar from './components/MenuBar';
import Display from './components/Display';

import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {

    const [selectedDisplay, setSelectedDisplay] = useState(null);

    return (
        <div className="App">
            
            <MenuBar setSelectedDisplay = {setSelectedDisplay}></MenuBar>     <br /> <br /> <br />

            <motion.div className="Main-Page"
            
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{duration: 8, ease: "anticipate"}}
            
            >
                <div className="left-display">
                
                    <Header></Header>       <br /> <br />
                    <Content></Content>

                </div>

                <Display selectedDisplay={selectedDisplay}></Display>

            </motion.div>

            <motion.div className="helloScreen"
                
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{duration: 1.3, repeat: 1 ,repeatType: "reverse", ease: "anticipate"}}
                
                >
                    <p>
                        hello.
                    </p>
                </motion.div>

        </div>
    );
}

export default App;
