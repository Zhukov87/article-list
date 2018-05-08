import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordion'
import {connect} from 'react-redux';

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openArticleId: PropTypes.string,
        toggleOpen: PropTypes.func.isRequired
    }
    
    render() {
        //console.log(this.props);
        const {openArticleId, toggleOpen, articles} = this.props;
        const articleElements = articles.map((article) => 
            <li key = {article.id}>
                <Article 
                    article = {article} 
                    isOpen = {article.id === openArticleId}
                    toggleOpen = {() => toggleOpen(article.id)}
                />
            </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        );
    }
}

const mapStateToProps = ({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters;
    console.log(articles);

    const filteredArticles = articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || published > from && published < to);
    })

    return { 
        articles: filteredArticles
    }
};



export default connect(mapStateToProps)(accordion(ArticleList));