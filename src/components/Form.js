import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Form = ({onsubmit , initialvalue}) => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    first_name:  initialvalue.first_name ||  '',
    last_name: initialvalue.last_name || '' ,
    email: initialvalue.email|| '',  
  });

  const onSubmit = (e) => {
    console.log(newUser)
    e.preventDefault();
    onsubmit(newUser);
    navigate("/table");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="first_name"
            id="firstname"
            onChange={(e) =>
              setNewUser({ ...newUser, [e.target.name]: e.target.value })
            }
            value={newUser.first_name}
          />
        </div>
        <div>
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            name="last_name"
            id="firstname"
            onChange={(e) =>
              setNewUser({ ...newUser, [e.target.name]: e.target.value })
            }
            value={newUser.last_name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="firstname"
            onChange={(e) =>
              setNewUser({ ...newUser, [e.target.name]: e.target.value })
            }
            value={newUser.email}
          />
        </div>
        <button className="submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
