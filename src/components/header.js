import React, {Component} from 'react';
import '../css/styles.css'


class Header extends Component {
    // This is used because the states is already defined if used the extends
    state = {
        title: 'The Keywords are: ',
        keywords: ''
    }
    // Fat arrow Functions from ES6 for 'this' keyword to work in the class
    inputChangeHandler = (event) =>{
        //console.log(event.target.value)
        //console.log('Try')
        this.setState({
            keywords: event.target.value
        })
    }

    // rendering the jsx
    render(){
        console.log(this.state.keywords)
        return (
            <header>
                <div 
                    className='logo'
                    onClick={this.inputChangeHandler}
                    >Logo</div>
                <input 
                    type='text' 
                    onChange={this.inputChangeHandler}/>
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
        )
    }
}

export default Header;