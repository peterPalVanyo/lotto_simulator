import React, {Component} from 'react'
import Ball from './Ball'

class Lottery extends Component {
    static defaultProps = {title: 'Lotto', balls: 5, maxNum: 90}
    constructor(props) {
        super(props)
        this.state = {nums: Array.from({length: this.props.balls})}
        this.handleClick = this.handleClick.bind(this)
    }
    generate() {
        this.setState(curState => ({
            nums: curState.nums.map(n => (Math.floor(Math.random()*this.props.maxNum)+1) )
        }))
    }
    handleClick() {
        this.generate()
    }
    render() {
        return (
            <div className='Lottery'>
                <h1>{this.props.title}</h1>
                    <div>
                        {this.state.nums.map(n => <Ball num={n}/>)}

                    </div>
                <button onClick={this.handleClick} >Results this week</button>
            </div>
        )
    }
}
export default Lottery