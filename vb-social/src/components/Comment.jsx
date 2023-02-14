import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css";

export function Comment() {
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

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
