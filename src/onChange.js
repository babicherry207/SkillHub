import React, { useState } from "react";

const Change = () => {
  const [user, setUser] = useState("");
  return (
    <form className="form m-4 p-4">
      <input
        onChange={(e) => {
          setUser(e.target.value);
        }}
        type="text"
        placeholder="Please enter username"
        value={user}
        name="user"
      />

      <div className="text-success">{user}</div>
    </form>
  );
};

export default Change;
