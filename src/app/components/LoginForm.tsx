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
    <form onSubmit={login} className="bg-modal p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-3">
      <h2 className="font-bold text-4xl text-primary mb-4">Login</h2>
      <div className="flex flex-col w-full">
        <label className="text-white">E-mail</label>
        <input
          name="email" 
          type="email"
          placeholder="Email" 
          className="input border-primary bg-transparent w-full text-white placeholder-text-secondary"
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="text-white">Senha</label>
        <input 
          name="password"
          type="password"
          placeholder="Senha"
          className="input border-primary bg-transparent w-full text-white placeholder-text-secondary"
          required
        />
      </div>
      <button 
        className="btn w-full bg-primary hover:bg-primary-hover text-white border-none mt-4 transition-all duration-300 hover:scale-105" 
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
}

    