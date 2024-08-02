import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      // In a real app, validate credentials with your backend
      login({ email: values.email });
      setSubmitting(false);
      navigate("/dashboard");
    }, 400);
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="mb-4">Login</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
