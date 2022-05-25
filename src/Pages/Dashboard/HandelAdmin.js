import React from "react";
import { toast } from "react-toastify";

const HandelAdmin = ({ user, index }) => {
  // onclick make admin
  const { email, role, _id } = user;

  const makeAdmin = () => {
    fetch(`https://young-reaches-95412.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr key={_id} className="">
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs uppercase">
            Make Admin
          </button>
        )}
      </td>
      {/* <td><button className='btn btn-xs uppercase'>make admin</button></td> */}
      <td>
        <button className="btn btn-xs btn-outline btn-error uppercase">
          remove
        </button>
      </td>
    </tr>
  );
};

export default HandelAdmin;
