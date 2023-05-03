import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { postUser } from "../api";

const CreateUser = ({onsubmit,initialvalue}) => {
  const navigate = useNavigate();


  const queryClient = useQueryClient();

  const userMutation = useMutation(postUser, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      console.log("success");
    },
  });

  const handleAddUser = (newUser) => {
    userMutation.mutate({
      ...newUser,
    });
  };

  return (
    <>
      <h1>Add New User</h1>
      <Form onsubmit={handleAddUser} initialvalue={{}}></Form>
    </>
  );
};

export default CreateUser;
