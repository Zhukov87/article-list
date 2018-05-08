import React, {Component} from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component {
    state = {
        isOpen: false
    }

    render() {
        console.log(this.props.comments)
        return(
            <OriginalComponent 
                comments = {this.props.comments}
                isOpen = {this.state.isOpen}
                toggleOpen = {this.toggleOpen}
            />
        );
    }

    toggleOpen = () => {
        !this.state.isOpen ? this.setState({isOpen: true}) : this.setState({isOpen: false});
    }
}