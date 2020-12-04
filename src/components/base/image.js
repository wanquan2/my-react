import React, { PureComponent } from 'react'

class Image extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const data = this.props;
        return (
            <img className={data.className} src={process.env.PUBLIC_URL + data.url}  alt="" />
        )
    }
}

export default Image