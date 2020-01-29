import React, { Component } from 'react';
import moment from 'moment';

const DATE_TIME = 'DD/MM/YY HH:mm:ss';

export default class Clock extends Component {
  state = {
    now: moment().format(DATE_TIME),
  };

  componentWillMount() {
    this.startTime();
  }

  getTimeNow = () => moment().format(DATE_TIME);

  startTime = () => {
    this.timer = setInterval(() => {
      this.setState({
        now: this.getTimeNow(),
      });
    }, 1000);
  };

  render() {
    return (
      <p>
        {this.props.usuario.nome} | {this.props.usuario.cpf} | {this.props.usuario.cargo} |{' '}
        {this.state.now}
      </p>
    );
  }
}
