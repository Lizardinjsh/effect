function Post(props) {
    return(
        <div>
            <p>userID: {props.userId}</p>
            <p>id: {props.id}</p>
            <p>title: {props.title}</p>
            <p>body: {props.body}</p>
        </div>
    );
}
export default Post;