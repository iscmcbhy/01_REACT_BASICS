import React, {Component} from 'react';
import '../css/styles.css'


class Header extends Component {
    render(){
        return (
            <header>
                <div 
                    className='logo'
                    onClick={ ()=> {console.log('I was Clicked!')} }
                    >Logo</div>
                <input type='text'/>
            </header>
        )
    }
}

export default Header;