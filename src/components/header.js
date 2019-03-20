import React, {Component} from 'react';
import '../css/styles.css'


class Header extends Component {
    // This is used because the states is already defined if used the extends
    state = {
        keywords: ''
    }
    // Fat arrow Functions from ES6 for 'this' keyword to work in the class
    inputChangeHandler = (event) =>{
        this.setState({
            keywords: event.target.value
        })
    }

    // rendering the jsx
    render(){
        return (
            <header>
                <div 
                    className='logo'
                    onClick={this.inputChangeHandler}
                    >Logo
                </div>
                <input 
                    type='text' 
                    onChange={this.inputChangeHandler}/>
            </header>
        )
    }
}

export default Header;