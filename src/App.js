import { useEffect, useState } from "react";
import ToDo from "./ToDo.js";

function App() {
  const [toDo, setToDO] = useState({});
  const [loading, setLoading];

  useEffect(() => {  
    async function getToDo() {
      setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"
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
  {loading}<ToDo {...toDo}/>
  </>
  );
};
export default App;
