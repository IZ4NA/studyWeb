import React, { useState } from "react";
import "./post.css";

function Post() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({ "name":name, "email":email, "password":password});

  const handleClickForm = (e) => {
    e.preventDefault();
    setData({ name, email, password });
    console.log(data);
  };

  return (
    <div className="posts ">
      <div>
        <p>Nesta pagina irei fazer algumas coisas para criar Posts</p>

        <form>
          <div className="formOne">
            <p>Primeiro formulario</p>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />

            <button onClick={handleClickForm}>Enviar</button>
          </div>
        </form>




        <form>
          <div className="formOne">
            <p>Swgundo formulario</p>
            <input type="text" placeholder="endereço" />
            <input type="password" placeholder="CPF" />
            <input type="password" placeholder="genero" />
            <input type="date" />

            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
