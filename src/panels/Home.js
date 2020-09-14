import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';

import {Panel, Placeholder, Button, PanelHeader} from '@vkontakte/vkui';


class Home extends React.Component {
    render() {
        const App = this.props.app;
        return (
            <Panel id={this.props.id}>
                <PanelHeader>Пожертвования</PanelHeader>
                <Placeholder
                    action={<Button size='l' onClick={App.go} data-to='type-of-donation'>Создать сбор</Button>}
                    className='absolute_centered'
                >
                    У Вас пока нет сборов.<br/>Начните доброе дело.
                </Placeholder>
            </Panel>
        );
    }
}

Home.propTypes = {
    id: PropTypes.string.isRequired,
    app: PropTypes.object
};

export default Home;