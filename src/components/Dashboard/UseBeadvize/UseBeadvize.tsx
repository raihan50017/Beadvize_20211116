import React, { useState } from 'react'
import Style from './UseBeadvize.module.scss'
import { Link } from 'react-router-dom'

const UseBeadvize = () => {

    const [createMission] = useState<boolean>(true)

    return (
        <div className={Style.container}>
            <div className={Style.containDetails}>
                <p>Je souhaite utiliser BeAdvize avec mes clients</p>
                <Link className={Style.button1} to={{
                    pathname:"/missionsFreelance",
                    state: createMission
                }}>Les avantages</Link>
            </div>
        </div>
    )
}

export default UseBeadvize
