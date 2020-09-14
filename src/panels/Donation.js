import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';

import {
    Panel,
    PanelHeaderBack,
    Div,
    Title,
    Subhead,
    Caption,
    Separator,
    Text,
    FixedLayout,
    Button
} from '@vkontakte/vkui';

import Progress from "../components/Progress";
import CountersInfo from "../components/CountersInfo";
import Comment from "../components/Comment";

import comment_avatar from "../img/comment_avatar.png";
import InputComment from "../components/InputComment";

class Donation extends React.Component {

    render() {
        const App = this.props.app,
            user = App.state.user;

        return (
            <Panel id={this.props.id}>
                <div style={{
                    height: '140px',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundImage: `url(${App.state.header})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <PanelHeaderBack onClick={App.back}
                                     style={{position: 'absolute', left: 12, top: 0, bottom: 0, color: 'white'}}/>
                </div>
                <Div style={{marginTop: '140px', paddingBottom: 0}}>
                    <Title level={1} weight='bold'>{App.state.donation_title}</Title>
                    <Subhead weight='medium'>{`Автор ${user.first_name} ${user.last_name}`}</Subhead>
                    <Caption level={1} weight='regular'>{
                        App.state.donation_type === 'target' ?
                            'Сбор закончится через 5 дней'
                            :
                            'Помощь нужна каждый месяц'
                    }</Caption>
                    <Separator className='separator__'/>
                    <Subhead
                        weight='regular'>{App.state.donation_type === 'target' ? 'Нужно собрать до 10 сентября' : 'Нужно собрать в сентябре'}</Subhead>
                    <Progress size='medium' style={{marginTop: '6px', marginBottom: '4px'}} value={4750} valueOf={10000}
                              suffix={'₽'}
                              colors={['#4BB34B', '#eaedf0', '#FFFFFF', '#818C99']}/>
                    <Separator className='separator__'/>
                    <Text style={{paddingTop: '12px', paddingBottom: '12px'}} weight='regular'>
                        <div
                            dangerouslySetInnerHTML={{__html: App.state.donation_description.replaceAll('\n', '<br/>')}}/>
                    </Text>
                    <Separator style={{marginTop: '12px'}}/>
                    <CountersInfo likes={65} comments={65} reposts={4} views={7200}/>
                </Div>
                <Separator wide/>
                <Comment avatar={comment_avatar} name={'Алексей Мазелюк'} text={'Отправил.'} time={'5 мин'}/>
                <Div style={{paddingTop: '8px', paddingBottom: '72px'}}>
                    <InputComment avatar={user.photo_100}/>
                </Div>
                <FixedLayout vertical='bottom' filled>
                    <Separator wide/>
                    <Div style={{paddingTop: '14px', display: 'flex'}}>
                        <div style={{width: '70%'}}>
                            <Subhead
                                weight='regular'>Собрано 4 750 ₽ из 10 000 ₽</Subhead>
                            <Progress style={{marginTop: '8px'}} value={4750} valueOf={10000} suffix={'₽'}
                                      colors={['#4BB34B', '#eaedf0']}/>
                        </div>
                        <div style={{marginLeft: 'auto', marginRight: 0}}>
                            <Button size='l' mode='commerce'>Помочь</Button>
                        </div>
                    </Div>
                </FixedLayout>
            </Panel>
        );
    }
}

Donation.propTypes = {
    id: PropTypes.string.isRequired,
    app: PropTypes.object
};

export default Donation;