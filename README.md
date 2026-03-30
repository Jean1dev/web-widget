# binno-web-widget

Widget de feedback embarcável para aplicações web. Oferece um botão flutuante que abre um formulário multi-etapas para coleta de feedback dos usuários, com suporte a captura de screenshot da página.

## Funcionalidades

- Botão flutuante com animação de hover
- Formulário em etapas (tipo → conteúdo → sucesso)
- Categorias de feedback: **Bug/Problema**, **Ideia** e **Outro**
- Captura de screenshot da página via `html2canvas`
- Envio de feedback para API via HTTP
- Tema escuro com design responsivo
- Distribuído como pacote npm (UMD + ES Module)

## Instalação

```bash
npm install binno-web-widget
```

## Uso

Importe o componente e o CSS no seu projeto:

```tsx
import { Widget } from 'binno-web-widget'
import 'binno-web-widget/dist/style.css'

function App() {
  return (
    <>
      {/* seu app */}
      <Widget />
    </>
  )
}
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Stack

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [html2canvas](https://html2canvas.hertzen.com/)
- [Axios](https://axios-http.com/)

## Publicação

O pacote é publicado automaticamente no npm via GitHub Actions a cada push na branch `main`.

## Licença

MIT
