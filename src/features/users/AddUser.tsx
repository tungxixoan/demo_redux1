import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { RootState } from '../../store';
import { userAdded } from "../../redux/userAction";

export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const usersAmount = useSelector((state: RootState) => state.users.entities.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          email,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button onClick={handleClick} className="button-primary">
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}
