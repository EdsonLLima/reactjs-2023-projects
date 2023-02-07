import style from "./Sidebar.module.css";
import capa from "../assets/capa.jpg";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img className={style.cover} src={capa} />
      <div className={style.profile}>
        <strong>Edson Lima</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
