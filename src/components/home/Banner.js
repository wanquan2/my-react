import React, { PureComponent } from 'react'
import Image from '../base/image'

class Banner extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            index:-1,
            left:'0'
        }
    }

    componentDidMount(){
        this.next();
    }

    next = () => {
        if(!this.props.list){
            return
        }

        let lngth = this.props.list.length  - 1;
    
        if(this.state.index < lngth){
            this.setState({
                index:this.state.index + 1
            },() => {
                this.setLeft()
            });
        }else{
            this.setState({
                index:0
            },() => {
                this.setLeft()
            });
        }
        setTimeout(() => {
            this.next();
        },3000)
    }

    setLeft(){
        this.setState({
            left: '-' + this.state.index * 7.5 + 'rem'
        })
    }

    render() {
        const data = {...this.state,...this.props};
        return (
            <div className="banner-box">
                <div className="list" style = {{'--i':`${this.props.list.length}`,left:`${data.left}`}}>
                    {
                        data.list.map((item,i) => {
                            return <Image url={item} key={i}  className="img" />
                        })
                    }
                </div>
                <div className="no">
                    {data.list.map((iten,i) => <span key={i} className={data.index === i ? 'active' : ''}></span>)}
                </div>
            </div>
        )
    }
}

export default Banner