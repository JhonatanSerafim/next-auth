import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-amber-600">
        <LoginForm />
      </div>
    </main>
  );
}
