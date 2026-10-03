import { useEffect, useState } from 'react';
import './LoginModal.scss';
import { Link, useNavigate } from 'react-router-dom';

const loginData = [
  { email: "test@gmail.com", password: "test1234" },
  { email: "test2@gmail.com", password: "test4321" }
];

export default function LoginModal() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("globetech-user"));

    if (user) {
      navigate("/");
    }
  }, [navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginData.some(user => user.email === email && user.password === password)) {
      console.log("Login successful");
      localStorage.setItem("globetech-user", JSON.stringify({ email, password, loginTime: Date.now() }));
      navigate("/");
    } else {
      setError(true);
      console.log("Invalid email or password");
      setTimeout(() => {
        setError(false);
      }, 3000);
    }

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to your GlobeSystem account</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="/forgot-password">Forgot password?</a>
          </div>

          {isError && <div className='error-message'>Email or Password incorrect, please try again</div>}
          <button type="submit" className="login-submit">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{' '}
            <a href="/register">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}