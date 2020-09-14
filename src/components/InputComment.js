import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import '../css/InputComment.css';

import {Icon28SmileOutline} from '@vkontakte/icons';
import {Avatar, Input} from "@vkontakte/vkui";

class InputComment extends React.Component {

    render() {
        return (
            <div className='input_comment__'>
                <Avatar src={this.props.avatar} size={36}/>
                <Input placeholder='Комментарий'/>
                <div className='input_comment_right__'>
                    <Icon28SmileOutline/>
                </div>
            </div>
        );
    }
}

InputComment.propTypes = {
    avatar: PropTypes.string.isRequired
};

export default InputComment;