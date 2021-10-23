import { AnimatePresence } from 'framer-motion'

function Display({ selectedDisplay }) {

    return (
            
        <div className="Content">

            <AnimatePresence
                exitBeforeEnter
            >
                {selectedDisplay}
            </AnimatePresence>

        </div>
    )
}

export default Display
