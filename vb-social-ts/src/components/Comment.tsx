import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    /*
    sempre que for atualizar um valor e esse valor 
    depender dele mesmo recomendado fazer algo igual ao exemplo abaixo
    */
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={style.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/edsonllima.png"
        alt=""
      />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Edson Lima</strong>
              <time
                title="09 de Fevereito às 07:54h"
                dateTime="2023-02-09 07:54:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
