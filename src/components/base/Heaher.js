import React, { PureComponent } from 'react'
import Image from '../base/image'

class Heaher extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="header-box">
                <div className="header">
                    <div className="icon">
                        <Image url="img/back.png" className="iconimg" />
                    </div>
                    <div className="title">{this.props.title}</div>
                </div>
            </div>
        )
    }
}

export default Heaher