import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Dashboard.scss';

function Dashboard(props){
    const [publicPosts, setPublicPosts ] = useState([]);
    useEffect(() => {
        axios.get('/api/getAllPosts').then(res => {
            setPublicPosts(res.data);
        })
    }, [publicPosts]);

    const displayTattoos = publicPosts.map((post, i) => {
        return (
            <div key={i}>
                <div>
                    <img src={post.photo} alt='tattoo' className='tattoo-photo'/>
                </div>
                <div>
                    {post.description}
                </div>
            </div>
        )
    });

    return (
        <div>
            {displayTattoos}
        </div>
    )
}

export default Dashboard;