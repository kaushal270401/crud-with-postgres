import { useQuery, useMutation, useQueryClient } from "react-query";
import { deleteUser, fetchUsers, fetchUser, updateUser } from "../api";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, error, isLoading, refetch, isError } = useQuery(
    "user",
    fetchUsers
  );
  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const DeleteUser = (id) => {
    deleteUserMutation.mutate(id);
  };

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  const Toggle = (id) => {
    // const { data, isError, isLoading, error } = useQuery({
    //   queryKey: ["user", id],
    //   queryFn: () => fetchUser(id),
    // });

    const userdata = (id) => {
      return {
        ...data,
        isSelected: !data.isSelected,
      };
    };

    updateUserMutation.mutate({ id, userdata });

    console.log(data);
  };

  const tableData = data?.map((val) => {
    return (
      <tr key={val.id}>
        <td>{val.first_name}</td>
        <td>{val.last_name}</td>
        <td>{val.email}</td>
        <td>
          <button className="button btn" onClick={() => DeleteUser(val.user_id)}>
            Delete
          </button>
          {/* <button onClick={() => Toggle(val.id)}>Bookmark</button> */}
          <button
            onClick={() => navigate(`../user/${val.user_id}/edit`)}
            className="button btn2"
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
