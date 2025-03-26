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
      <div className="h-screen flex justify-center items-center">
        <div className="text-2xl">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Painel Inicial</h1>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Sair
          </button>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-black">
          <h2 className="text-xl font-semibold mb-4">Informações do Usuário</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Nome:</span> {session?.user?.name}</p>
            <p><span className="font-medium">Email:</span> {session?.user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}