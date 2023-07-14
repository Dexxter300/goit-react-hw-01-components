import { FriendList, ListItem, Status, Name, Avatar } from './styled-friendList'
import PropTypes from "prop-types";


export const FriendsList = ({ friends }) => {
    return (
        <FriendList>
            {friends.map(friend => {
                return (
                    <ListItem key={friend.id}>
                        <Status isOnline={friend.isOnline}></Status>
                        <Avatar src={friend.avatar} alt="User avatar" width="48" />
                        <Name>{friend.name}</Name>
                    </ListItem>
                )
            })}
        </FriendList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array
}