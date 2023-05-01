import React from 'react';

function Home(props) {
    const user = JSON.parse(sessionStorage.getItem("user"));

    return (
        <div>
            <h2>Home</h2>
            {user.first_name + ' ' + user.last_name}
        </div>
    );
}

export default Home;