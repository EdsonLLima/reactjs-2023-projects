import { Header } from "./components/Header";
import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Edson Lima"
        content="Lorem Ipsum is simply been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type "
      />
      <Post
        author="Heloise Lima"
        content="Lorem Ipsum is simply dummyunknown printer took a galley of type "
      />
    </div>
  );
}
