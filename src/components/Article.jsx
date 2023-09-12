import React from 'react'

function bonus (minutes){
    if (minutes < 30){
        return "☕️".repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`;
    }else {
        return "🍱".repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;
    }
}

export default function Article({title, date = 'January 1, 1970', preview, minutes}) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} | {bonus(minutes)}</small>
      <p>{preview}</p>
    </article>
  )
}
