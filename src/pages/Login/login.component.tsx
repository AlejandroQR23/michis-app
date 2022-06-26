import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, userApi } from '../../api/userApi';
import { useAuthContext } from '../../context/auth.context';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<User>({ email: '', password: '' });
  const { setToken } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;
    await userApi
      .login(email, password)
      .then(({ token }) => {
        setToken(token);
        localStorage.setItem('token', token);
        navigate('/');
      })
      .catch(({ response }) => {
        console.log(response.data.msg);
      });
  };

  return (
    <section className="mt-20 w-full h-full flex content-center items-center justify-center">
      <div className="w-full lg:w-4/12 px-4">
        <div className="card bg-violet-200">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-gray-500 text-center my-3 font-bold">
              <small>Login to edit and create Michis</small>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <label className="form-label" htmlFor="grid-password">
                  Email
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className="form-container">
                <label className="form-label" htmlFor="grid-password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className="text-center mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="bg-violet-900 text-white active:bg-violet-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
