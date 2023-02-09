import style from "./Post.module.css";

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.authot}>
          <img
            className={style.avatar}
            src="https://github.com/edsonllima.png"
          />
          <div className={style.authorInfo}>
            <strong>Edson Lima</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title="09 de Fevereito às 07:54h" dateTime="2023-02-09 07:54:30">
          Publicado há 1h
        </time>
      </header>
      <div className={style.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a>jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
