import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './article.css';
import {deleteArticle} from '../AC';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick={this.handleDelete}>Delete</button>
                <ReactCSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.getBody()}
                </ReactCSSTransitionGroup>
            </div>
        );
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
        console.log('-----', 'deliting article');
    }

    getBody() {
        const {isOpen} = this.props;
        if(!isOpen) return null;
        const {article} = this.props;
        return (
            <div>
                <section>{article.text}</section>
                <CommentsList comments={article.comments} />
            </div>
        )
    }
}

export default connect(null, { deleteArticle })(Article);