import React from 'react'
import loader from './loader.gif'

function Loader() {
    return (
        <div>
            <img
                src={loader}
                style={{ width: '400px', margin: 'auto', display: 'block' }}
                alt="Loading..."
            />
        </div>
    )
}

export default Loader;