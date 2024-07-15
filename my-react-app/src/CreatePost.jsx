import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UsernameContext } from "./Login";

function CreatePost(){

    const username = useContext(UsernameContext);
    const history = useHistory();
    const [post, setPost] = useState("");
    const [newPosts, setNewPost] = useState("");
    const [error, setError] = useState("");

    function handlePost(event){
        setPost(event.target.value);
    }

    async function handlePosting(event){
        event.preventDefault();
        const url = 'http://localhost:3000/user/posts';
        const headers = {
            "Content-Type": "application/json",
            "X-Token": "37680607-4f00-4f32-ba41-be45879ccf53"
        }
        const data = {
            username: "ToDWorld",
            body: post
        };

        fetch(url,{
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        })
        .then((res) => {
            const payload = res.json();
            if (res.ok){
                setNewPost(payload);
                console.log(payload);
                history.push("/home");
            } else {
                console.log(payload.error);
                setError(payload.error);
            }
        })
        .catch(error => setError(error.message));
    }

    return(
        <div className="form-class">
            <h2>Add a New Post</h2>
            <form onSubmit={handlePosting}>
                <label>Post</label>
                <textarea value={post} onChange={handlePost} required></textarea>
                <button type="submit">Post it!</button> {/* Changed button type to submit */}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default CreatePost;
