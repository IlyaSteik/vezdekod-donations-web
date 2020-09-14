import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import '../css/Utils.css'
import {File} from "@vkontakte/vkui";
import {Icon28PictureOutline, Icon24DismissOverlay} from "@vkontakte/icons";

class Cover extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: this.props.header
        };
    }

    render() {
        return (
            <div style={{
                border: this.state.header === null && '1px dashed var(--accent)',
                borderRadius: '10px',
                height: '140px'
            }}>
                {
                    this.state.header === null ?
                        <File
                            style={{
                                padding: '46px 80px'
                            }}
                            controlSize='xl'
                            mode='tertiary'
                            before={<Icon28PictureOutline/>}
                            onChange={async event => {
                                let tgt = event.target,
                                    files = tgt.files;

                                if (FileReader && files && files.length) {
                                    for (let file of files) {
                                        let fr = new FileReader();
                                        fr.onload = async function () {
                                            let res = fr.result;
                                            this.setState({header: res});
                                            if (this.props.onChange)
                                                this.props.onChange(res);
                                        }.bind(this);
                                        await fr.readAsDataURL(file);
                                    }
                                }
                            }}>
                            {
                                this.props.children
                            }
                        </File>
                        :
                        <div style={{position: 'relative', height: 'inherit'}}>
                            <div style={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                zIndex: 1
                            }}>
                                <Icon24DismissOverlay onClick={() => {
                                    this.setState({header: null});
                                    this.props.onChange(null);
                                }}/>
                            </div>
                            <div style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundImage: `url(${this.state.header})`,
                                borderRadius: '10px',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}/>
                        </div>
                }
            </div>
        )
    }

}

Cover.propTypes = {
    header: PropTypes.string,
    onChange: PropTypes.func
};

export default Cover;