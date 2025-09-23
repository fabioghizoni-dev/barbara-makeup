# Bárbara Vitória - Link in Bio

Este é um projeto de um site de "link na bio" para a maquiadora e body piercer Bárbara Vitória. O site apresenta seus links importantes, portfólio e informações de contato em um layout moderno e responsivo com temas claro e escuro.

## Visão Geral

O projeto consiste em uma aplicação de página única (SPA) construída com React e Vite. Ele é projetado para ser visualmente atraente, com um fundo animado no tema escuro e transições suaves.

## Estrutura de Pastas

```
barbara-makeup/
├── public/
│   ├── logo.svg
│   └── rounded-logo.svg
├── src/
│   ├── assets/
│   │   ├── img1.JPG
│   │   └── ... (outras imagens)
│   ├── pages/
│   │   ├── Gallery.tsx
│   │   └── Home.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.ts
```

- **`public/`**: Contém os arquivos estáticos, como as logos.
- **`src/`**: Contém o código-fonte da aplicação.
  - **`assets/`**: Armazena as imagens do portfólio.
  - **`pages/`**: Contém os componentes de página (`Home` e `Gallery`).
  - **`App.css`**: Estilos principais da aplicação.
  - **`App.tsx`**: Componente raiz que gerencia as rotas e o tema.
  - **`index.css`**: Estilos globais (atualmente limpo).
  - **`main.tsx`**: Ponto de entrada da aplicação React.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (ou npm/yarn)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/barbara-makeup.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd barbara-makeup
   ```
3. Instale as dependências:
   ```bash
   pnpm install
   ```

### Execução

Para iniciar o servidor de desenvolvimento, execute:

```bash
pnpm dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador para ver a aplicação.

## Tecnologias Utilizadas

- **React**: Biblioteca para construir a interface de usuário.
- **Vite**: Ferramenta de build para desenvolvimento front-end.
- **React Router**: Para gerenciamento de rotas.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **CSS**: Para estilização, com variáveis CSS para temas.