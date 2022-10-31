import "../login.css";
const Login = (handleSubmit) => {
  return (
    <div className="loginOuterWrapper">
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">LOGIN FORM</h1>
        <div className="input-container">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
