import React from 'react';

import styles from './New.module.css';

const New = ({ neww }) => {
    const { urlToImage, url, title, description, source } = neww;

    const image = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
        : null;

    return (
        <div className="col s12 m5 l4">
            <div className="card">
                {image}
                <div className="card-content">
                    <h3 className={styles.h3}>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
}

export default New;