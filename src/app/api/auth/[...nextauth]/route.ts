import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log("Tentativa de login com:", credentials?.email)
        
        if(!credentials){
          console.log("Credenciais não fornecidas")
          return null
        }

        if(credentials.email === "nikola@pet.com.br" && credentials.password === "123"){
          console.log("Login bem sucedido!")
          return {
            id: "1",
            name: "Nikola",
            email: "nikola@pet.com.br"
          }
        }          
        console.log("Credenciais inválidas")
        return null;
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("JWT gerado para usuário:", user.email)
      }
      return token
    },
    async session({ session, token }) {
      console.log("Sessão criada para:", session.user?.email)
      return session
    }
  },
  debug: true
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }