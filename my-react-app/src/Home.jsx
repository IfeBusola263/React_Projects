
import React, {useEffect, useState} from 'react';
import Post from './Post';
import UserDashBoard from './UserDashboard';
import usePost from './myHooks/usePost';
import useGet from './myHooks/useGet';

function Home(){

    const url = 'http://localhost:3000/allposts';
    const headers = {
        "X-Token": "37680607-4f00-4f32-ba41-be45879ccf53"
    };
    const [userData, error] = useGet(url, headers);

    if (error){
        console.log(error);
        return(
            <p>Something Went Wrong!</p>
        )
    } else {

        return(
            <div className="home">
               <Post data={userData && userData.posts} />
               <Post data={userData && userData.posts.filter((post) => post.likes >= 50)}/>
            </div>
        );
    
    }
}

export default Home;
