import React, {Component} from 'react';

class UserForm extends Component {
    state = {
        user: '',
        text: '',
      }

    render() {
        return(
                <form onSubmit={this.handleSubmit}>
                    User: <input 
                        value={this.state.user} 
                        onChange={this.handleChange('user')}
                        className={this.getClassName('user')} />
                    Comment: <input 
                        value={this.state.text} 
                        onChange={this.handleChange('text')}
                        className={this.getClassName('text')} />
                    <button type="submit" value="submit"></button>
                </form>
        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: ''
        });
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input_error' : '';

    handleChange = type => (ev) => {
        const {value} = ev.target;
        if(value.length > limits[type].max) return;
        this.setState({
            [type]: value
        });
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
}

export default UserForm;