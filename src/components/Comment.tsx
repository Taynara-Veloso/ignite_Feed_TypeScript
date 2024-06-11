import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react';

import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() { 
    setLikeCount((state) => {
      return state + 1
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://camo.githubusercontent.com/dfdebe92274e943e9bdecefb4ca5197b9a6a68933ef8eeb8d77665d4dec2619a/68747470733a2f2f692e696d6775722e636f6d2f5470675571544d2e706e67" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Taynara Veloso</strong>
              <time title="20 de Maio às 19:25" dateTime="2024-05-20 19:25:00">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}