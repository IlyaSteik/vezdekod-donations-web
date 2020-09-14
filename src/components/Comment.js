import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import '../css/Comment.css';

import {Icon16LikeOutline} from '@vkontakte/icons';
import {Avatar, Caption, SimpleCell, Subhead} from "@vkontakte/vkui";

class Comment extends React.Component {

    render() {
        return (
            <SimpleCell disabled className='comment__' before={<Avatar size={36} src={this.props.avatar}/>}
                        after={<Icon16LikeOutline fill='var(--icon_outline_medium)'/>} description={
                <Subhead weight='regular'>{this.props.text}</Subhead>
            }>
                <span className={'comment_top__'}>
                    <Subhead weight='bold'>{this.props.name}</Subhead>
                    <Caption level={1}
                             weight='regular'
                             style={{color: 'var(--icon_outline_medium)'}}>{this.props.time}
                    </Caption>
                </span>
            </SimpleCell>
        );
    }
}

Comment.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default Comment;