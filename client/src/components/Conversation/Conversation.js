import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/UserRequests'

const Conversation = ({ data, currentUserId }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)
        console.log(userId)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId);
                setUserData(data);
                console.log(data);
            }
            catch (error) {
                console.log(error)
            }
        }
        getUserData();
    }, [])
    return (
        <div className='follower conversation'>
            <div>
                <div className='online-dot'></div>
                <img src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + 'defaultProfile.png'} alt="" />
            </div>
        </div>
    )
}

export default Conversation