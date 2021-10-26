import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

function Display({ selectedDisplay }) {

    const [display, setDisplay] = useState(selectedDisplay)

    useEffect(() => {
        
        setDisplay(selectedDisplay)

    }, [selectedDisplay])

    return (
            
        <div className="Content">

            <AnimatePresence
                exitBeforeEnter
            >
                {display}
            </AnimatePresence>

        </div>
    )
}

export default Display
