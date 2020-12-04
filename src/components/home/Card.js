import React, { PureComponent } from 'react'
import Image from '../base/image'

class Banner extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="card-box">
                <div className="info">
                    <Image url="logo192.png" className="icon" />
                    <div className="user">
                        <h3>千秋万载一统江湖</h3>
                        <p>地球分舵</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner