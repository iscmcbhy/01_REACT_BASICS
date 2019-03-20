import React from 'react';

import NewsItems from './news_list_item';

// props the objects passed or data
const NewsList = (props) => {

    const items = props.news.map((item)=>{
        return (
            // Always pass the key or you get an error from reactjs
            <NewsItems key={item.id}item={item}/>
        )
    })

    return (
        <div>
            {props.children}
            {items}
        </div>
    )
}

export default NewsList;