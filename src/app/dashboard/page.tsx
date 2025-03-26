'use client'

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center bg-background">
        <div className="text-2xl text-white">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto bg-modal rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Painel Inicial</h1>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded transition-all duration-300 hover:scale-105"
          >
            Sair
          </button>
        </div>
        
        <div className="bg-background/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Informações do Usuário</h2>
          <div className="space-y-2">
            <p><span className="font-medium text-primary">Nome:</span> <span className="text-white">{session?.user?.name}</span></p>
            <p><span className="font-medium text-primary">Email:</span> <span className="text-white">{session?.user?.email}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}