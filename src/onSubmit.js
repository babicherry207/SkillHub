import React, { useState } from "react";

const Submit = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className="m-4 p-4 " onSubmit={SubmitHandler}>
      <input
        onChange={onChange}
        type="text"
        placeholder="Username"
        value={username}
        name="username"
        className="mb-4"
      />
      <br />

      <input
        onChange={onChange}
        type="password"
        placeholder="Password"
        value={password}
        name="password"
        className="mb-4"
      />
      <br />

      <input type="submit" name="Submit" />
    </form>
  );
};

export default Submit;
