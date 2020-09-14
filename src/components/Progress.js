import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import '../css/Progress.css';

import {shortIntegers} from '../Utils';

class Progress extends React.Component {

    render() {
        return (
            <div className={`progress__ progress_${this.props.size}__`}
                 style={{background: this.props.colors[1], ...this.props.style}}>
                <div className='progress_value__' style={{
                    width: `${this.props.value / this.props.valueOf * 100}%`,
                    background: this.props.colors[0]
                }}>
                    {
                        this.props.size === 'medium' &&
                        <div
                            className='progress_value_inner__'
                            style={{color: this.props.colors[2]}}>{`${shortIntegers(this.props.value)} ${(this.props.suffix ? this.props.suffix : '')}`}</div>
                    }
                </div>
                {
                    this.props.size === 'medium' &&
                    <div className='progress_inner__'
                         style={{
                             width: `${100 - this.props.value / this.props.valueOf * 100}%`,
                             color: this.props.colors[3]
                         }}>{`${shortIntegers(this.props.valueOf)} ${(this.props.suffix ? this.props.suffix : '')}`}</div>
                }
            </div>
        );
    }
}

Progress.defaultProps = {
    size: 'regular'
};

Progress.propTypes = {
    value: PropTypes.number.isRequired,
    valueOf: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    suffix: PropTypes.string,
    size: PropTypes.string
};

export default Progress;