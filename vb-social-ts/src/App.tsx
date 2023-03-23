import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import style from "./App.module.css";

import "./global.css";

//author: {avatar_url: """, name: "", role: ""}
//publishedAt: Date
//content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/edsonllima.png",
      name: "Edson Lima",
      role: "Developer FrontEnd",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Mais um  projeto no meu portfólio. É um projeto que fiz durante o tempo de estudos, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-07 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Developer FullStack",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
