'use client'

import { signIn } from "next-auth/react"

export default function LoginForm() {
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    };
    
    console.log("Iniciando tentativa de login...")
    
    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard"
    })
  }

  return (
      <form onSubmit={login} className="bg-white p-12 rounded-lg  w-96 max-w-full flex justify-center items-center flex-col gap-3">
        <h2 className="font-bold text-4xl text-amber-600 mb-4">Login</h2>
        <div className="flex flex-col w-full">
          <label className="text-black">E-mail</label>
          <input
            name="email" 
            type="email"
            placeholder="Email" 
            className="input input-primary bg-white w-full border-amber-500 text-black"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-black">Senha</label>
          <input 
            name="password"
            type="password"
            placeholder="Senha"
            className="input input-primary bg-white w-full border-amber-500 text-black"
            required
          />
        </div>
        <button 
          className="btn w-full bg-amber-600 border-none mt-4" 
          type="submit"
        >
          Entrar
          </button>
      </form>
  )
}

    