import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    img {
        display: flex;
        justify-content: center;
        width: 200px;
        margin: auto;
    }

`

const UserCard = (props) => {
    const {user, followerData} = props;

    return (
        <StyledDiv className='card'>
            <h1>Github User Card</h1>
            <img src={user.avatar_url} alt={user.login}/>
            <h2>Name: {user.name}</h2>
            <p>Location: {user.location}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <div className='followers'>
                {followerData.map(follower => {
                    return (
                        <div key={follower.id}>
                            <img src={follower.avatar_url} alt={follower.login}/>
                            <p>Username: {follower.login}</p>
                        </div>
                    )
                })}
            </div>
        </StyledDiv>
    )
}

export default UserCard;