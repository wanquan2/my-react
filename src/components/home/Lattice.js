import React, { PureComponent } from 'react'

class Lattice extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="lattice-box">
                <ul>
                    <li className="anim">令狐冲</li>
                    <li>风清扬</li>
                    <li>任我行</li>
                    <li>东方不败</li>
                    <li>田伯光</li>
                    <li>向问天</li>
                    <li>岳不群</li>
                    <li>桃谷六仙</li>
                </ul>
            </div>
        )
    }
}

export default Lattice