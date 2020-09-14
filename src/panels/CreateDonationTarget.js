import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';

import {Panel, PanelHeader, PanelHeaderBack, FormLayout, Input, Textarea, Div, Select, Button} from '@vkontakte/vkui';

import Cover from "../components/Cover";

class CreateDonationTarget extends React.Component {
    render() {
        const App = this.props.app;

        return (
            <Panel id={this.props.id}>
                <PanelHeader left={<PanelHeaderBack onClick={App.back}/>} separator={false}>Целевой сбор</PanelHeader>
                <Div>
                    <Cover header={App.state.header} onChange={header => App.setState({header})}>Загрузить
                        обложку</Cover>
                </Div>
                <FormLayout>
                    <Input value={App.state.donation_title}
                           status={App.state.donation_title.length > 0 ? 'valid' : 'error'} top='Название сбора'
                           placeholder='Название сбора'
                           onChange={event => App.setState({donation_title: event.currentTarget.value})}/>
                    <Input value={App.state.donation_sum} status={App.state.donation_sum.length > 0 ? 'valid' : 'error'}
                           type='number' top='Сумма, ₽' placeholder='Сколько нужно собрать?'
                           onChange={event => App.setState({donation_sum: event.currentTarget.value})}/>
                    <Input value={App.state.donation_current_sum}
                           status={App.state.donation_current_sum.length > 0 ? 'valid' : 'error'} type='number'
                           top='Собранная сумма, ₽' placeholder='Сколько уже собрано?'
                           onChange={event => App.setState({donation_current_sum: event.currentTarget.value})}/>
                    <Input top='Цель' placeholder='Например, лечение человека'/>
                    <Textarea value={App.state.donation_description}
                              status={App.state.donation_description.length > 0 ? 'valid' : 'error'} top='Описание'
                              placeholder='На что пойдут деньги и как они кому-то помогут?'
                              onChange={event => App.setState({donation_description: event.currentTarget.value})}/>
                    <Select top='Куда получать деньги'>
                        <option>Счёт VK Pay · 1234</option>
                    </Select>
                    <Button
                        disabled={
                            Math.min(App.state.donation_title.length, 1) +
                            Math.min(App.state.donation_sum.length, 1) +
                            Math.min(App.state.donation_current_sum.length, 1) +
                            Math.min(App.state.donation_description.length, 1) +
                            (App.state.header === null ? 0 : 1) < 5}
                        onClick={App.go} data-to='create-donation-target-more' size='xl'>Далее</Button>
                </FormLayout>
            </Panel>
        );
    }
}

CreateDonationTarget.propTypes = {
    id: PropTypes.string.isRequired,
    app: PropTypes.object
};

export default CreateDonationTarget;