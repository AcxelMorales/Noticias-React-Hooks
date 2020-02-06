import React from 'react';

import New from './New';

const ListNews = ({ news }) => {
    return (
        <div className="row">
            {news.map(neww => (
                <New key={neww.url} neww={neww} />
            ))}
        </div>
    );
}

export default ListNews;