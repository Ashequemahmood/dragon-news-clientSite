import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>news details {news}</h2>
        </div>
    );
};

export default News;