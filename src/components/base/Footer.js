import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="footer-box">
                <div className="footer">
                    {this.props.children ? 
                        this.props.children
                        :
                        <ul>
                            <li>首页</li>
                            <li>朋友圈</li>
                            <li>我的</li>
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

export default Footer