import { useEffect, useState } from "react";

function Comment() {
  const [toDo, setComment] = useState({});
//   const [loading, setLoading] = useState(true);

  useEffect(() => {  
    async function getComment() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments/1"
    );
    const data = await response.json();
    setComment(data);
    setComment(false);
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
<Comment />
  {loading ? <p>Loading...</p> : <ToDo {...Comment} />}
  </>
  );
};
export default Comment;