import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import '../css/UserWall.css';

import {Icon24MoreHorizontal} from '@vkontakte/icons';
import {Avatar, Caption, SimpleCell, Text} from "@vkontakte/vkui";

class UserWall extends React.Component {

    render() {
        return (
            <SimpleCell disabled className='user_wall__' before={<Avatar size={36} src={this.props.avatar}/>}
                        after={<Icon24MoreHorizontal fill='var(--icon_outline_medium)'/>} description={
                <Caption level={2} weight='regular'>{this.props.time}</Caption>
            }>
                <Text weight='medium'>{this.props.name}</Text>
            </SimpleCell>
        );
    }
}

UserWall.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default UserWall;