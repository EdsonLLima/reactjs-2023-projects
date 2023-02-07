import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

import style from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Edson Lima"
            content="Lorem Ipsum is simply been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type "
          />
          <Post
            author="Heloise Lima"
            content="Lorem Ipsum is simply dummyunknown printer took a galley of type "
          />
        </main>
      </div>
    </div>
  );
}
