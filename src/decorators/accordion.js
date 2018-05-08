import React, {Component} from 'react';

export default (OriginalComponent) => class Accordion extends Component {
    state = {
        openArticleId: null
    }
    render() {
        //console.log(this.props);
        return <OriginalComponent 
            {...this.props} 
            {...this.state} 
            toggleOpen = {this.toggleOpen}
        />
    }

    toggleOpen = (openArticleId) => {
        this.state.openArticleId === openArticleId ? 
            this.setState({openArticleId: null}) : this.setState({openArticleId});
    }
}