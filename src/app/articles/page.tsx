import React from 'react';

const ArticlesPage = () => {
    const articles = [
        {
            id: 1,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Article 1',
            description: 'This is a short description of Article 1.',
        },
        {
            id: 2,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Article 2',
            description: 'This is a short description of Article 2.',
        },
        {
            id: 3,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Article 3',
            description: 'This is a short description of Article 3.',
        },
        {
            id: 4,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Article 4',
            description: 'This is a short description of Article 4.',
        },
        {
            id: 5,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Article 5',
            description: 'This is a short description of Article 5.',
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article) => (
                    <div key={article.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
                        <img
                            src={article.imageUrl}
                            alt={article.title}
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                        <h2 style={{ fontSize: '1.25rem', margin: '8px 0' }}>{article.title}</h2>
                        <p style={{ fontSize: '0.9rem', color: '#555' }}>{article.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesPage;