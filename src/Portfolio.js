import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Portfolio extends Component {
    render() {
        return (
            <Link to='portfolio/:id'>
                <div className='work_pieces'>
                    {/* <img src=/> */}
                </div>
                
            </Link>
        );
    }
}
export default Portfolio;