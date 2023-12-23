import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    //delete operation
    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.deletedCount > 0) {
                    alert('user delete successfully')
                }
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
            })

    }
    return (
        <div>
            <h2>Total User {users.length}</h2>
            {
                users.map(user => <p key={user._id}> {user.name} - {user.email} - {user._id} <button
                    onClick={() => handleDelete(user._id)}
                >X</button></p>)
            }
        </div>
    );
};

export default Users;