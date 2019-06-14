import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Home(props){
    console.log(props)
    return (
        <div>
            {
                props.user ?
                props.history.push('/dashbaord')
                :
                <div>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </div>
            }
        </div>
    )
}

export default withRouter(Home);