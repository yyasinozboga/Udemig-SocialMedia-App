import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Feed");
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div>
          <h1 className="title">Social</h1>
          <p className="content">
            Conenct with friends and the world around you on Social.
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="form-input" />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />
          <button className="form-btn">Log In</button>
          <p className="forgot-password">Forgot Possword?</p>
          <button className="create-btn">Create a New Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
