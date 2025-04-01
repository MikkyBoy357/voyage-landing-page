import React from 'react';

export default function ArticleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <title>Articles</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body className="bg-red">{children}
            </body>
        </html>
    );
}