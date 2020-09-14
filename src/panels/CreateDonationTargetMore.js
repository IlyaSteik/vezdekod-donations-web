import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    FormLayout,
    Select,
    Button,
    FormLayoutGroup,
    Radio,
    Input
} from '@vkontakte/vkui';

class CreateDonationTargetMore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: true
        };
    }

    render() {
        const App = this.props.app,
            user = App.state.user;

        return (
            <Panel id={this.props.id}>
                <PanelHeader left={<PanelHeaderBack onClick={App.back}/>} separator={false}>Дополнительно</PanelHeader>
                <FormLayout>
                    <Select top='Автор'>
                        <option>{`${user.first_name} ${user.last_name}`}</option>
                    </Select>
                    <FormLayoutGroup top='Сбор завершится'>
                        <Radio checked={!this.state.checked}
                               onChange={() => this.setState({checked: !this.state.checked})} name='donation-end'
                               value='1'>
                            Когда соберём сумму
                        </Radio>
                        <Radio name='donation-end' value='2' checked={this.state.checked}
                               onChange={() => this.setState({checked: !this.state.checked})}>
                            В определённую дату
                        </Radio>
                    </FormLayoutGroup>
                    {
                        this.state.checked &&
                        <Input type='date' placeholder='Выберите дату'/>
                    }
                    <div>
                        <Button mode='secondary' onClick={(e) => {
                            App.go(e);
                            App.setState({donation_type: 'target'})
                        }} data-to='donation-snippet' size='xl'>Предпросмотр</Button>
                        <Button
                            style={{marginTop: '8px'}} onClick={(e) => {
                            App.go(e);
                            App.setState({donation_type: 'target'})
                        }} data-to='donation' size='xl'>Создать сбор</Button>
                    </div>
                </FormLayout>
            </Panel>
        );
    }
}

CreateDonationTargetMore.propTypes = {
    id: PropTypes.string.isRequired,
    app: PropTypes.object
};

export default CreateDonationTargetMore;