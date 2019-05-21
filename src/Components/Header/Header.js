import React, {useEffect} from 'react';
import {updateUser} from '../../ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';

function Header(props){
    const user = props.user;
    useEffect(() => {
        axios.get('/auth/session').then(res => {
            props.updateUser(res.data)
        })
    }, [user]);

    return (
        <div>
        Header
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);