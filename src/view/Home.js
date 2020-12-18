import React, { PureComponent } from 'react'
import Banner from '../components/home/Banner'
import Card from '../components/home/Card'
import Lattice from '../components/home/Lattice'
import Note from '../components/home/note'
import Header from '../components/base/Header'
import Footer from '../components/base/Footer'
import '../assets/css/Home.scss'



class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            title:'五岳剑派',
            list:[
                'img/ylj2.png',
                'img/ylj.png',
                'img/cny2.png',
                'img/cny.png'
            ],
            noone:'令狐冲'
        }
    }

    toBenumber(){
        setTimeout(() => {
            this.setState({
                noone:'东方不败'
            })
        },3000)
    }

    componentDidMount(){
        this.toBenumber()
    }

    render() {
        return (
            <div className="main">
                <Header>
                    <div className="headerself">首页</div>
                </Header>
                <Banner list={this.state.list} />
                <Note noone={this.state.noone} />
                <Lattice />
                <Card />
                <Footer></Footer>
            </div>
        )
    }
}

export default Home