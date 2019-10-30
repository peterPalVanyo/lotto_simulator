import React, {Component} from 'react'

class Lottery extends Component {
    static defaultProps = {title: 'Lotto', balls: 5, maxNum: 90}
    constructor(props) {
        super(props)
        this.state = {nums: Array.from({length: this.props.balls})}
    }
    generate() {

    }
    handleClick() {
        this.generate()
    }
    render() {
        return (
            <div className='Lottery'>
                <h1>{this.props.title}</h1>
                <ul>
                    <li>the balls</li>
                </ul>
                <button onClick={this.handleClick} >Results this week</button>
            </div>
        )
    }
}
export default Lottery