import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdateUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const updateUser = { name, email };
        console.log(updateUser);

    }
    return (
        <div>
            <h3>Update user information of ${loadedUser.name}</h3>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;