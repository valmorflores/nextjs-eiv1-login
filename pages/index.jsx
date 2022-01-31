import React from 'react';
import { useState, useEffect } from 'react';

import { userService } from 'services';

export default Home;

function Home() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
       userService.getAll().then(x => setUsers(x));
    }, []);

    return (
        <div className="card mt-4">
            <h4 className="card-header">You're logged in</h4>
            <div className="card-body">
                <h5>with Next.js & JWT!!</h5>
                <h6>Users from secure api end point</h6>
                {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user.email}>{user.firstname} {user.lastname}</li>
                        )}
                    </ul>
                }
                {!users && <div className="spinner-border spinner-border-sm"></div>}
            </div>
        </div>
    );
}
