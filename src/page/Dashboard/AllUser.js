import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_url}/all/user`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_url}/user/remove/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Delete success");
          refetch();
        }
      });
  };

  const handleVerify = (id) => {
    fetch(`${process.env.REACT_APP_url}/user/verify/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("user verify");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>verify</th>
              <th>Delete user</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role !== "admin" && user.role}</td>
                <td>
                  {user.verify !== "true" && (
                    <button
                      onClick={() => handleVerify(user._id)}
                      className="btn btn-sm btn-primary"
                    >
                      verify
                    </button>
                  )}
                </td>
                <td>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-sm btn-primary"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
