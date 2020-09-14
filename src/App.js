import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import './css/App.css'
import './css/Utils.css'

import {
    View
} from '@vkontakte/vkui';
import Home from "./panels/Home";
import TypeOfDonation from "./panels/TypeOfDonation";
import CreateDonationTarget from "./panels/CreateDonationTarget";
import CreateDonationTargetMore from "./panels/CreateDonationTargetMore";
import CreateDonationRegular from "./panels/CreateDonationRegular";
import Donation from "./panels/Donation";
import DonationSnippet from "./panels/DonationSnippet";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popout: null,
            activePanel: 'home',
            history: ['home'],

            header: null,
            donation_title: '',
            donation_sum: '',
            donation_current_sum: '',
            donation_description: '',
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.back = this.back.bind(this);
        this.go = this.go.bind(this);
    }

    back = () => {
        if (this.state.popout !== null) {
            this.setState({popout: null});
            window.history.pushState({pop: 'popout'}, 'Title');
            return;
        }
        let {activePanel, history} = this.state;
        if (history.length === 1) {
            bridge.send('VKWebAppClose', {status: 'success'});
        } else if (history.length > 1) {
            history.pop();
            activePanel = history[history.length - 1];
            this.setState({activePanel, history});
        }
    };

    go(e) {
        const panel = e.currentTarget.dataset.to;
        let history = this.state.history;
        if (history[history.length - 1] !== panel) {
            history.push(panel);
            window.history.pushState({activePanel: panel}, 'Title');
            this.setState({activePanel: panel, history});
        }
    }

    async componentDidMount() {
        bridge.subscribe(async ({detail: {type, data}}) => {
            if (type !== undefined) console.log(type, data);
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'bright_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });


        window.addEventListener('popstate', e => {
            e.preventDefault();
            this.back(e);
        });

        const user = await bridge.send('VKWebAppGetUserInfo');
        this.setState({user});

        bridge.send('VKWebAppInit');
    }

    render() {
        return (
            <View activePanel={this.state.activePanel} popout={this.state.popout} history={this.state.history} onSwipeBack={this.back}>
                <Home id='home' app={this}/>
                <TypeOfDonation id='type-of-donation' app={this}/>
                <CreateDonationTarget id='create-donation-target' app={this}/>
                <CreateDonationTargetMore id='create-donation-target-more' app={this}/>
                <CreateDonationRegular id='create-donation-regular' app={this}/>
                <DonationSnippet id='donation-snippet' app={this}/>
                <Donation id='donation' app={this}/>
            </View>
        );
    }
}

export default App;