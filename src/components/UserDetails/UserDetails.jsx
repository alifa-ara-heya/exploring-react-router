// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user =  useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2>Details about user </h2>
            <h4>Name: {name} </h4>
            <h4>Website: {website} </h4>
        </div>
    );
};

UserDetails.propTypes = {
    
};

export default UserDetails;