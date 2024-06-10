import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GetUserProfile = () => {
    const { username } = useParams(); 
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/user/profile/${username}`, {
                    withCredentials: true
                });
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user profile", error);
            }
        };

        fetchUserProfile();
    }, [username]);

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.fullname}</h1>
                    <p>@{user.username}</p>
                    <p> {user.email}</p>
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}

        </div>
    );
};

export default GetUserProfile;
