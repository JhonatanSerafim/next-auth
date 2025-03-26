# Projeto de Autenticação com Next-Auth

Este é um projeto de exemplo que demonstra a implementação de autenticação usando Next-Auth com Next.js 14.

## Tecnologias Utilizadas

- Next.js 14
- Next-Auth
- TypeScript
- Tailwind CSS

## Funcionalidades

- Autenticação com email e senha
- Proteção de rotas
- Dashboard protegido
- Gerenciamento de sessão
- Logout

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/login-next-auth.git
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
pnpm dev
```

4. Acesse [http://localhost:3000](http://localhost:3000)

## Credenciais de Teste

- Email: nikola@pet.com.br
- Senha: 123

## Estrutura do Projeto

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts
│   ├── components/
│   │   ├── LoginForm.tsx
│   │   └── SessionProvider.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
└── types/
    └── next-auth.d.ts
```

## Licença

MIT
