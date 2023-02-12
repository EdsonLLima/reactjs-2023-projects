import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Comment.module.css";

export function Comment() {
  return (
    <div className={style.comment}>
      <img src="https://github.com/edsonllima.png" alt="" />

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
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
