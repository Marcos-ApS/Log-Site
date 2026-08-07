import { useState } from "react";
import logo from "../assets/logo-new.png";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Preencha o e-mail e a senha.");
      return;
    }
    setError("");
    onLogin();
  }

  return (
    <main className="login-page login-page--centered">
      <div className="login-background-grid" />
      <form className="login-card login-card--centered" onSubmit={submit}>
        <img src={logo} alt="Buddylog" className="login-centered-logo" />
        <div className="login-heading login-heading--centered">
          <span>Bem-vindo de volta</span>
          <h1>Acesse o sistema</h1>
          <p>Entre para acompanhar sua operação logística.</p>
        </div>

        <label className="login-field">
          <span>E-mail</span>
          <input type="email" placeholder="operador@empresa.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </label>

        <label className="login-field">
          <span>Senha</span>
          <div className="password-wrap">
            <input type={showPassword ? "text" : "password"} placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
            <button type="button" onClick={() => setShowPassword((v) => !v)}>{showPassword ? "Ocultar" : "Mostrar"}</button>
          </div>
        </label>

        <div className="login-options">
          <label><input type="checkbox" /> <span>Lembrar de mim</span></label>
          <button type="button">Esqueci minha senha</button>
        </div>

        {error && <p className="login-error">{error}</p>}
        <button className="login-submit" type="submit">Entrar no sistema</button>

        <div className="login-divider"><span>ou</span></div>
        <button className="google-login" type="button" onClick={onLogin}>
          <svg className="google-icon" viewBox="0 0 18 18" aria-hidden="true">
            <path fill="#4285F4" d="M17.64 9.205c0-.638-.057-1.252-.164-1.841H9v3.482h4.844a4.14 4.14 0 0 1-1.797 2.715v2.258h2.909c1.703-1.568 2.684-3.878 2.684-6.614Z" />
            <path fill="#34A853" d="M9 18c2.43 0 4.468-.806 5.956-2.181l-2.909-2.258c-.806.54-1.835.859-3.047.859-2.344 0-4.328-1.585-5.037-3.714H.956v2.332A9 9 0 0 0 9 18Z" />
            <path fill="#FBBC05" d="M3.963 10.706A5.42 5.42 0 0 1 3.682 9c0-.592.102-1.168.281-1.706V4.962H.956A9 9 0 0 0 0 9c0 1.45.347 2.823.956 4.038l3.007-2.332Z" />
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.507.454 3.441 1.346l2.581-2.581C13.464.891 11.426 0 9 0A9 9 0 0 0 .956 4.962l3.007 2.332C4.672 5.165 6.656 3.58 9 3.58Z" />
          </svg>
          <span>Continuar com Google</span>
        </button>
      </form>
    </main>
  );
}
