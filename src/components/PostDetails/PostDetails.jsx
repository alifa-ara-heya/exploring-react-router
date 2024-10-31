import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <p>Post Detail: {id} </p>
            <p>Title: {title} </p>
            <p><small>{body} </small></p>
        </div>
    );
};

export default PostDetails;