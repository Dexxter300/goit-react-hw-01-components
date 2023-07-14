import styled from 'styled-components';

export const FriendList = styled.ul`
list-style: none;
`

export const ListItem = styled.li`
display: flex;
gap: 10px;
margin-bottom: 20px;
width: 300px;
background-color: silver;
border-radius: 10px;
`

export const Status = styled.span`
display: flex;
/* align-content: center; */
margin-top: auto;
margin-bottom: auto;
margin-left: 4px;
width: 20px;
height: 20px;
background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red') };
border-radius: 50%;
`

export const Name = styled.p`
font-size: 20px;
`

export const Avatar = styled.img`
border-radius: 5px;
`