import React, {useEffect} from 'react';
import axios from 'axios';
import './Header.scss';

function Header(props){
    const {user} = props;
    // useEffect(() => {
    //     axios.get('/auth/session').then(res => {
    //         props.updateUser(res.data)
    //     })
    // }, [user]);

    return (
        <div className='black header-size'>
        Inkstagram
        </div>
    )
}

export default Header;