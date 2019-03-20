import React from 'react';
import classStyle from '../css/styles.css'

const NewsItem = ({item}) =>{

    return (
        <div className= {classStyle.news_item}>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>
    )
}

export default NewsItem;