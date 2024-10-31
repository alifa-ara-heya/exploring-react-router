import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const postId = useParams();
    console.log(postId);
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <p>Post Detail: {id} </p>
            <p>Title: {title} </p>
            <p><small>{body} </small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;