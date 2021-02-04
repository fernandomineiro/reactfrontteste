import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Esse campo é obrigatório!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const form2 = useRef();
  const checkBtn = useRef();
  const checkBtn2 = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [username2, setUsername2] = useState("");
  const [email2, setEmail2] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeUsername2 = (e) => {
    const username2 = e.target.value;
    setUsername2(username2);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeEmail2 = (e) => {
    const email2 = e.target.value;
    setEmail2(email2);
  };

  const onChangeSenha = (e) => {
    const senha = e.target.value;
    setSenha(senha);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login2(username, email, senha).then(
        () => {
          props.history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  const handleLogin2 = (e) => {
    e.preventDefault();

    setMessage2("");
    setLoading2(true);

    form2.current.validateAll();

    if (checkBtn2.current.context._errors.length === 0) {
      AuthService.login2(username2, email2).then(
        () => {
          props.history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading2(false);
          setMessage2(resMessage);
        }
      );
    } else {
      setLoading2(false);
    }
  };

  return (
    <div className="col-md-12">
     
      <div class="container">
  <div class="row">
    <div class="col-6">
    <div className="card card-container">
       

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Nome</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <Input
              type="password"
              className="form-control"
              name="senha"
              value={senha}
              onChange={onChangeSenha}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
    <div class="col-6">
    <div className="card card-container">
       

       <Form onSubmit={handleLogin2} ref={form2}>
         <div className="form-group">
           <label htmlFor="username">Nome</label>
           <Input
             type="text"
             className="form-control"
             name="username"
             value={username2}
             onChange={onChangeUsername2}
             validations={[required]}
           />
         </div>

         <div className="form-group">
           <label htmlFor="email">Email</label>
           <Input
             type="text"
             className="form-control"
             name="email2"
             value={email2}
             onChange={onChangeEmail2}
             validations={[required]}
           />
         </div>

         <div className="form-group">
           <button className="btn btn-primary btn-block" disabled={loading2}>
             {loading2 && (
               <span className="spinner-border spinner-border-sm"></span>
             )}
             <span>Login</span>
           </button>
         </div>

         {message2 && (
           <div className="form-group">
             <div className="alert alert-danger" role="alert">
               {message2}
             </div>
           </div>
         )}
         <CheckButton style={{ display: "none" }} ref={checkBtn2} />
       </Form>
     </div>
    </div>
    
  </div>
</div>
    </div>
    

    
    
  );
};

export default Login;