import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen'
import UserForm from './UserForm'

function CommentsList({comments = [], isOpen, toggleOpen}) {
        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Hide comments' : 'Show comments'}
                </button>
                {getBody({comments, isOpen})}
            </div>
        );
    }

    function getBody({comments, isOpen}) {
        if(!isOpen) return null;
        if(!comments.length) return <p>No comment yep</p>;
        return (
            <div>
                <ul>
                    {comments.map((comment) => <li key={comment.id}><Comment comment={comment} /></li>)}
                </ul>
                <UserForm />
            </div>
        );
    }

export default toggleOpen(CommentsList);