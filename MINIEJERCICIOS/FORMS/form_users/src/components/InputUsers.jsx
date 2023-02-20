import React, { useState } from "react";
const InputUsers = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const regex = /[A-Z][0-9]/gm; //al menos una mayuscula y numeros
    if (!user.name || !user.password) {
      setError("Rellena ambos campos del formulario");
    } else if (user.password.length < 4 || !user.password.match(regex)) {
      setError(
        "necesitas una contraseña de mínimo 4 caracteres con al menos una mayúscula y números"
      );
    } else {
      setError(null);
      console.log(user);
    }
  };

  return (
    <div>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <input
          type="text"
          placeholder="Enter your username"
          id="username"
          name="username"
          onChange={(ev) => setUser({ ...user, name: ev.target.value })}
        />
        <input
          type="text"
          placeholder="Enter your password"
          id="password"
          name="password"
          onChange={(ev) => setUser({ ...user, password: ev.target.value })}
        />
        <button type="submit">Login</button>
      </form>
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default InputUsers;
