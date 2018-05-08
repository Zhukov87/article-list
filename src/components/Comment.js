import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Comment({comment}) {
        return(
            <div>
                <h3>{comment.user}</h3>
                <section>{comment.text}</section>
            </div>
        );
}

Comment.propTypes = {
    comment: PropTypes.shape({
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired
    }).isRequired
}

export default Comment;