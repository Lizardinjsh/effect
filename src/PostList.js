import { useEffect, useState } from "react";
import Post from "./Post";

function PostList() {
    const [allPosts, setAllPosts] = useState();
    useEffect(() => {
        async function getPosts() {
            const response = await fetch ("https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            console.log();
            setAllPosts(data);
        }
        getPosts();
    }, []);

    const allPostsJSX = allPosts.map((post, index) => {
        return <Post key={index} {...post} />;   
    });

return <div>{allPostsJSX}</div>;

}

export default PostList;