import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Dashboard(props){
    const [publicPosts, setPublicPosts ] = useState([]);
    useEffect(() => {
        axios.get('/api/getAllPosts').then(res => {
            setPublicPosts(res.data);
        })
    }, [publicPosts]);

    return (
        <div>
            Dashbaord
        </div>
    )
}

export default Dashboard;