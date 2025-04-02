import { Button, Input } from "antd";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import './LoginForm.css'
import { LanguageContext } from "../../context";
import { translations } from "../translations";
export default function LoginForm() {
  const {setIsAuth} = useContext(AuthContext);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {language} = useContext(LanguageContext);
  const t = translations[language];

  const handleLogin = () => {
    // TODO: do it smarter if you have more time :)
    if (login === 'admin' && password === 'admin') {
      setIsAuth(true);
    } else {
      setError(t.errorLabel);
    }
  }

  return (
    <form className="form_styles">
      <div>
      {error && <span className="error">{error}</span>}
      <Input placeholder={t.loginLabel} className="first_input" value={login} onChange={(event) => setLogin(event.target.value)} />
      <Input placeholder={t.passwordLabel} type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <Button onClick={handleLogin} className="sign_button">{t.signInLabel}</Button>
    </form>
  )
}