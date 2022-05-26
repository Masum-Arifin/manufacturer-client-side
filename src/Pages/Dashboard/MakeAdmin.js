import React, { useEffect, useState } from 'react';
import HandelAdmin from '../Dashboard/HandelAdmin'


const MakeAdmin = () => {
    // const {data} = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    
    
    return (
        <div>
            <p className='text-2xl lg:text-left text-center text-primary font-bold pl-4 my-4 uppercase'>Make your company admin :</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>make admin</th>
                            <th>remove user</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user,index)=><HandelAdmin
                                key={user._id}
                                user={user}
                                index={index}
                                
                            ></HandelAdmin>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;