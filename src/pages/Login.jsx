import { useState, useEffect } from "react";
import { useAuth } from "@hooks";
import styles from "@styles/Login.module.css";
import PageNav from "@components/PageNav";
import Button from "@components/Button";
import { useNavigate } from "react-router";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [formData, setFormData] = useState({
    email: "josiahdave001@gmail.com",
    password: "helloworld",
  });

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password)
      login(formData.email, formData.password);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/app", {replace: true});
  }, [isAuthenticated, navigate]);
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
