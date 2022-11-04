import { useState } from "react";
import Button from "components/Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onLoginAttempt = (e) => {
    e.preventDefault();
    // do something
    console.log("teste");
  };

  return (
    <form onSubmit={onLoginAttempt}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-start mt-6">
          <label htmlFor="email" className="text-cyan-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onChangeEmail}
            className="p-2 w-full border-2 border-cyan-600 rounded-lg mt-1"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="password" className="text-cyan-800">
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
            className="p-2 w-full border border-cyan-600 rounded-lg mt-1"
          />
        </div>
      </div>
      <Button type="submit">Entrar</Button>
      <div className="text-right">
        <a
          href="recover-password"
          className="inline-block text-cyan-800 mt-2 hover:text-cyan-500"
        >
          Esqueceu sua senha?
        </a>
      </div>
    </form>
  );
}
