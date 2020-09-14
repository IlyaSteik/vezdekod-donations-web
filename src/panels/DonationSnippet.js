import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';

import {
    Button,
    Caption,
    Panel,
    PanelHeader,
    PanelHeaderBack, Separator, Subhead, Text
} from '@vkontakte/vkui';
import UserWall from "../components/UserWall";
import {Card} from "../components/Card";
import {Div} from "@vkontakte/vkui";
import Progress from "../components/Progress";
import CountersInfo from "../components/CountersInfo";

class DonationSnippet extends React.Component {
    render() {
        const App = this.props.app,
            user = App.state.user;

        return (
            <Panel id={this.props.id}>
                <PanelHeader left={<PanelHeaderBack onClick={App.back}/>} separator={false}>Предпросмотр</PanelHeader>
                <div style={{background: '#FFFFFF'}}>
                    <UserWall avatar={user.photo_100} name={`${user.first_name} ${user.last_name}`} time={'час назад'}/>
                    <Div style={{paddingTop: 0, paddingBottom: 0}}>
                        <Text weight='regular'>Сейчас самое время помочь тем, кто не может попросить о помощи
                            сам.</Text>
                        <Card style={{position: 'relative'}}>
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
                                backgroundRepeat: 'no-repeat',
                                borderTopLeftRadius: 'inherit',
                                borderTopRightRadius: 'inherit'
                            }}/>
                            <Div>
                                <Text weight='semibold' style={{marginTop: '140px'}}>{App.state.donation_title}</Text>
                                <Caption level={1}
                                         weight='regular'>{`${user.first_name} ${user.last_name} · ${App.state.donation_type === 'target' ? 'Закончится через 5 дней' : 'Помощь нужна каждый месяц'}`}</Caption>
                                <Separator className='separator__' wide/>
                                <div style={{display: 'flex'}}>
                                    <div style={{width: '70%'}}>
                                        <Subhead
                                            weight='regular'>{App.state.donation_type === 'target' ? 'Собрано 4 750 ₽ из 10 000 ₽' : 'Собрано в сентябре 4 750 ₽'}</Subhead>
                                        <Progress style={{marginTop: '8px'}} value={4750} valueOf={10000} suffix={'₽'}
                                                  colors={['#3F8AE0', '#c6dcf6']}/>
                                    </div>
                                    <div style={{marginLeft: 'auto', marginRight: 0}}>
                                        <Button size='l' mode='outline'>Помочь</Button>
                                    </div>
                                </div>
                            </Div>
                        </Card>
                        <CountersInfo likes={65} comments={65} reposts={4} views={7200}/>
                    </Div>
                </div>
                <div style={{
                    background: '#EBEDF0',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1
                }}/>
            </Panel>
        );
    }
}

DonationSnippet.propTypes = {
    id: PropTypes.string.isRequired,
    app: PropTypes.object
};

export default DonationSnippet;