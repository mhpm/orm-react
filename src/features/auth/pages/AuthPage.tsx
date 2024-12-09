import AuthForm from '../components/AuthForm';

function AuthPage() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-5 flex flex-col items-center">
      <h2 className="text-2xl font-bold">Login</h2>
      <AuthForm />
    </div>
  );
}

export default AuthPage;
