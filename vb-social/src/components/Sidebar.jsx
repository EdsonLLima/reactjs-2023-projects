import { PencilLine } from "phosphor-react";
import style from "./Sidebar.module.css";
import capa from "../assets/capa.jpg";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img className={style.cover} src={capa} />
      <div className={style.profile}>
        <img className={style.avatar} src="https://github.com/edsonllima.png" />

        <strong>Edson Lima</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
