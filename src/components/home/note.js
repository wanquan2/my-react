import React, { PureComponent } from 'react'

class Note extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const data = {...this.state,...this.props}
        return (
            <div className="note-box">
                <div className="note">
                    <div className="content">天下第一：<span>{data.noone || '暂缺'}</span></div>
                </div>
            </div>
        )
    }
}

export default Note