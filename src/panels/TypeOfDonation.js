import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';

import {Panel, PanelHeader, PanelHeaderBack, Div, Banner} from '@vkontakte/vkui';

import {Icon28TargetOutline, Icon28CalendarOutline} from '@vkontakte/icons';

class TypeOfDonation extends React.Component {

    render() {
        const App = this.props.app;

        return (
            <Panel id={this.props.id}>
                <PanelHeader left={<PanelHeaderBack onClick={App.back}/>}>Тип сбора</PanelHeader>
                <Div className='absolute_centered' style={{width: '100vw'}}>
                    <Banner
                        before={<Icon28TargetOutline fill='var(--button_primary_background)'/>}
                        header='Целевой сбор'
                        subheader='Когда есть определённая цель'
                        asideMode='expand'
                        onClick={App.go} data-to='create-donation-target'
                    />
                    <Banner
                        before={<Icon28CalendarOutline fill='var(--button_primary_background)'/>}
                        header='Регулярный сбор'
                        subheader='Если помощь нужна ежемесячно'
                        asideMode='expand'
                        onClick={App.go} data-to='create-donation-regular'
                    />
                </Div>
            </Panel>
        );
    }
}

TypeOfDonation.propTypes = {
    id: PropTypes.string.isRequired,
    app: PropTypes.object
};

export default TypeOfDonation;