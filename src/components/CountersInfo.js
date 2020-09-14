import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import '../css/CountersInfo.css';

import {formatIntegers} from '../Utils';
import {Icon24LikeOutline, Icon24CommentOutline, Icon24ShareOutline, Icon24View} from '@vkontakte/icons';
import {Subhead} from "@vkontakte/vkui";

class CountersInfo extends React.Component {

    render() {
        return (
            <div className='counters_info__'>
                <div className='counters_info_likes__'>
                    <Icon24LikeOutline/> <Subhead weight='medium'
                                                  style={{marginLeft: '4px'}}>{formatIntegers(this.props.likes, 1)}</Subhead>
                </div>
                <div className='counters_info_comments__'>
                    <Icon24CommentOutline/> <Subhead weight='medium'
                                                     style={{marginLeft: '4px'}}>{formatIntegers(this.props.comments, 1)}</Subhead>
                </div>
                <div className='counters_info_reposts__'>
                    <Icon24ShareOutline/> <Subhead weight='medium'
                                                   style={{marginLeft: '4px'}}>{formatIntegers(this.props.reposts, 1)}</Subhead>
                </div>
                <div className='counters_info_views__'>
                    <Icon24View width={20} height={20}/> <Subhead weight='regular'
                                                                  style={{marginLeft: '4px'}}>{formatIntegers(this.props.views, 1)}</Subhead>
                </div>
            </div>
        );
    }
}

CountersInfo.propTypes = {
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    reposts: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired
};

export default CountersInfo;