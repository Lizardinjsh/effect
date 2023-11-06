import { useEffect, useState } from "react";
import ToDo from "./ToDo.js";
import Comment from "./Comment.js"
import Post from "./Post.js"
import PostList from "./PostList"

function App() {
  const [toDo, setToDo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {  
    async function getToDo() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/4"
    );
    const data = await response.json();
    setToDo(data);
    setLoading(false);
  };
      getToDo();
  }, []);

 // const toDo = {
  //   userId: 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: false

  return (
<>
  {loading ? <p>Loading...</p> : <ToDo {...toDo} />}
  <Comment />
  <Post />
  <PostList />
  </>
  );
};
export default App;
