import { useParams, useLocation } from "react-router-dom";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { fetchUser, fetchUsers, updateUser } from "../api";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { useState } from "react";

const EditUsers = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
  });

  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  const handleUserUpdate = (user) => {
    updateUserMutation.mutate({ id, ...user });
  };
  console.log(data)

  return (
    <>
      <h1>Edit user</h1>
      {/* <button onClick={()=>onToggle()}>Bookmark</button> */}
      <Form onsubmit={handleUserUpdate} initialvalue={data}></Form>
    </>
  );
};

export default EditUsers;
