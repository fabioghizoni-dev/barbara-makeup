# Bárbara Vitória - Body Piercer & Maquiadora

Este é o código-fonte do site de portfólio e agendamentos para Bárbara Vitória, especialista em Body Piercing e Maquiagem Profissional.

O site foi desenvolvido para ser uma plataforma rápida, responsiva e visualmente agradável, permitindo que os clientes conheçam o trabalho da profissional, acessem seus contatos e consultem informações importantes sobre os procedimentos.

**[Acesse o site aqui](https://barbara-makeup.vercel.app/)**

## ✨ Funcionalidades

- **Design Responsivo**: Totalmente adaptável a qualquer dispositivo.
- **Tema Light/Dark**: Dois temas visuais para a preferência do usuário.
- **Fundo Animado**: Backgrounds animados e distintos para cada tema.
- **Galeria de Imagens**: Uma galeria de trabalhos com visualização em tela cheia.
- **Links Rápidos**: Acesso fácil para agendamentos e contato direto.
- **Página de Cuidados**: Instruções claras sobre os cuidados pós-procedimento.
- **SEO Otimizado**: Configurações de SEO para melhor rankeamento em motores de busca.

## 🛠️ Tecnologias Utilizadas

- **React**
- **Vite**
- **TypeScript**
- **React Router**
- **CSS** (com Variáveis, Flexbox e Grid)
- **PNPM**

## 📂 Estrutura do Projeto

```
barbara-makeup/
├── public/
├── src/
│   ├── assets/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.ts
```

## 🚀 Como Rodar o Projeto Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/installation)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/barbara-makeup.git
    cd barbara-makeup
    ```

2.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    ```

O site estará disponível em `http://localhost:5173` (ou a porta indicada no terminal).

## Scripts Disponíveis

- `pnpm dev`: Inicia o servidor de desenvolvimento.
- `pnpm build`: Compila o projeto para produção.
- `pnpm preview`: Inicia um servidor local para visualizar a build de produção.