import Logo from "components/Logo";
import TermsAndConditions from "./TermsAndConditions";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-lg">
        <div className="p-10 bg-white rounded-3xl border-2 border-gray-50 outline-none shadow-cyan-200 shadow-sm w-full">
          <div className="flex justify-center">
            <Logo scale={1.5} />
          </div>
          <LoginForm />
        </div>
        <div className="px-4 py-2">
          <TermsAndConditions />
        </div>
      </div>
    </main>
  );
}
