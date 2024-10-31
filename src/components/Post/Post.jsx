import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '15px',
        display: "flex",
        flexDirection: 'column',   
    }

    return (
        <div style= {postStyle} >
            <h4>Post of Id: {id} </h4>
            <h3 style={{flexGrow:1}}>Title: {title} </h3>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
    id: PropTypes.string,
    title: PropTypes.string,

};

export default Post;