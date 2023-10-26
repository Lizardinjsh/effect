import App from "./App";

function ToDo(props) {

    return(
        <>
    <p>User Id {props.userId}</p>
    <p>Id {props.id}</p>
    <p>{props.title}</p>
    <input type="checkbox" defaultChecked></input>
    </>
    );
}

export default ToDo;