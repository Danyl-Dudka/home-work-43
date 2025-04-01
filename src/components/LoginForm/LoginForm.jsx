import { Button, Input } from "antd";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import './LoginForm.css'
export default function LoginForm() {
  const {setIsAuth} = useContext(AuthContext);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // TODO: do it smarter if you have more time :)
    if (login === 'admin' && password === 'admin') {
      setIsAuth(true);
    } else {
      setError('Invalid username or password');
    }
  }

  return (
    <form className="form_styles">
      <div>
      {error && <span className="error">{error}</span>}
      <Input placeholder="Enter your login" className="first_input" value={login} onChange={(event) => setLogin(event.target.value)} />
      <Input placeholder="Enter your password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <Button onClick={handleLogin} className="sign_button">Sign in</Button>
    </form>
  )
}