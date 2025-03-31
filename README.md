# 🌐 Site Olabi

Este repositório contém o código do site da Olabi, um projeto hospedado via [Firebase Hosting](https://firebase.google.com/products/hosting), com build local e deploy automatizado.

## 📦 Requisitos

- [Node.js 16.x e 20.x (via NVM)](https://github.com/nvm-sh/nvm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Firebase CLI](https://firebase.google.com/docs/cli)

## 🚀 Scripts disponíveis

### ✅ Instalar dependências

```bash
nvm use 16
yarn install
```

### 🛠️ Rodar o build

```bash
nvm use 16
source .env            # ou use dotenv (veja abaixo)
yarn build
```

Se estiver usando `.env` no formato padrão (sem `export`), use:

```bash
npx dotenv -e .env -- yarn build
```

### 🧪 Rodar o projeto localmente (Firebase Hosting)

```bash
nvm exec 20 firebase emulators:start --only hosting
```

Depois, acesse: [http://localhost:5000](http://localhost:5000)

### 🚀 Deploy para produção (Firebase Hosting)

```bash
nvm exec 20 firebase deploy --only hosting
```

---

## 🔐 Variáveis de Ambiente

As variáveis sensíveis estão no `.env`, que **não deve ser versionado**.  
Exemplo de `.env.example`:

```env
# .env.example
FIREBASE_API_KEY=
FIREBASE_PROJECT_ID=
CLIENT_EMAIL=
PRIVATE_KEY=
```

---

## 📁 Estrutura do projeto

```
.
├── build/                # Build final (gerado por yarn build)
├── .env.example          # Variáveis de ambiente modelo
├── firebase.json         # Configuração do Firebase Hosting
├── .firebaserc           # Projeto ativo do Firebase
└── README.md             # Este arquivo :)
```

---

## 👨‍💻 Desenvolvimento

**Daniel Coronel**
Desenvolvedor do Site

### 👨‍💻 Manutenção e Correção da última versão

**Davi Santos**  
Gestor de Tecnologia @ Olabi & Instituto Fogo Cruzado  
🔗 [linkedin.com/in/davisaantos](https://www.linkedin.com/in/davisaantos)  

---

## Boas práticas

- Nunca suba `.env` ou arquivos com chaves privadas.
- Sempre use `.env.example` para facilitar onboarding da equipe.
- Mantenha o código limpo, com scripts definidos no `package.json`.