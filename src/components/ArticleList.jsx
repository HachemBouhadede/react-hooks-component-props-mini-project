import React from 'react'
import Article from './Article'

export default function ArticleList({posts}) {
    const artLis = posts.map((post) => {
        return (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
          />
        );
      });
  return (
    <main>
      {artLis}
    </main>
  )
}
