# Extintores Globo — Landing Page

Landing page profissional para Extintores Globo, Torres - RS.
Desenvolvida com React + TypeScript + Tailwind CSS + Vite.

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como publicar no Netlify

1. Suba o projeto no GitHub
2. Acesse [netlify.com](https://netlify.com)
3. New project → Import from GitHub → selecione o repositório
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## Estrutura

```
src/
├── components/
│   ├── Nav.tsx        # Menu de navegação com mobile
│   ├── Hero.tsx       # Seção principal
│   ├── Stats.tsx      # Estatísticas
│   ├── Services.tsx   # Serviços oferecidos
│   ├── Types.tsx      # Tipos de extintores
│   ├── Why.tsx        # Diferenciais
│   ├── Contact.tsx    # Contato e WhatsApp
│   └── Footer.tsx     # Rodapé
├── App.tsx
├── main.tsx
└── index.css
```

## Personalizar

- **Telefone** → busca por `5551991330027`
- **E-mail** → busca por `extintoresglobo@hotmail.com`
- **Cores** → edita `tailwind.config.js` e os valores `#C41E1E`
