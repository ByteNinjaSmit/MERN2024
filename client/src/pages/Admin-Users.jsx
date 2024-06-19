import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const { authorizationToken } = useAuth();

    const getAllUserData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            setUsers(data);
            // console.log(`users ${data}`);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        getAllUserData().catch((error) => {
            setError(error.message);
        });
    }, [authorizationToken]);

    return (
        <>            <h1 className="w-100 mx-auto text-center mt-4 mb-3 text-dark-emphasis">Admin Users Panel</h1>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <table className="table table-hover table-striped table-dark table-bordered w-75 mx-auto mt-3 text-center ">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((curUser, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{curUser.username}</td>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.phone}</td>
                                    <td>
                                        <button className="btn btn-info">Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}

        </>
    );
};