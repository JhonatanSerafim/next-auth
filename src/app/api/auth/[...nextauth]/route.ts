import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
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
        if(!credentials){
          return null
        }

        if(credentials.email === "nikola@pet.com.br" && credentials.password === "123"){
          return {
            id: "1",
            name: "Nikola",
            email: "nikola@pet.com.br"
          }
        }          
        return null;
      }
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub
      }
      return session
    }
  }
})

export { handler as GET, handler as POST }