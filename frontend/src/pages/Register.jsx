import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "../store/authStore.js";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const register = useAuthStore((state) => state.register);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await register(form);
      toast.success("Register successfully");
      /* setInterval(() => {}, 2000); */
      await sleep(2000);
      navigate("/login");
    } catch (error) {
      setError(error.message || "Registration failed");
      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-semibold text-slate-900">Register</h1>
      <p className="text-slate-600 mt-1">
        Create an account to test cookie JWT auth
      </p>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-red-700">
          {error}
        </div>
      )}

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Username
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
            type="text"
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder="Username..."
            autoComplete="username"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="email@email.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="*****"
            autoComplete="new-password"
          />
        </div>
        <button
          className="w-full rounded-lg bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create account"}
        </button>
      </form>
      <p className="mt-4 text-sm text-slate-600">
        Already have an account?{" "}
        <Link className="text-blue-600 hover:underline" to={"/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
