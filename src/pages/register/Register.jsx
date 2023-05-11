import { Link } from "react-router-dom";
import "./resgister.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register </h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="left">
          <h1>Welcome </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            cumque adipisci, fugit ad repudiandae inventore doloremque molestiae
            optio totam neque maxime!
          </p>
          <span>Do have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
