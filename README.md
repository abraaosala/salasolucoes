<p align="center">
  <img src="public/logo.png" alt="Sala Soluções — Ideias em Soluções Digitais" width="320"/>
</p>

# Sala Soluções — Landing Page

Landing page one-page premium para a **Sala Soluções — Ideias em Soluções Digitais**, inspirada fielmente nos flyers oficiais. Focada em conversão: sites de alta performance + e-mails profissionais.

## ✨ Destaques

- **Hero com fundo real** (Unsplash) + mocks laptop/phone
- **Navbar fixa** — transparente fundida ao hero no topo, branca com blur/sombra ao rolar; **topbar** recolhe ao rolar
- **Benefícios, Processo, Planos** (Essencial One-Page / Ecossistema Pro), **E-mails profissionais** (curva característica), FAQ, CTA e **footer premium** com curva superior
- **Tailwind CSS v4** + **Vite + React 18** — componentes em `src/components/`

## 🚀 Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview
```

## 🗂 Estrutura

```
public/
  logo.png        # marca (recortada, sem espaço branco)
  fav.png         # favicon 512×512 recortado
  fav.orig.png / logo.orig.png  # backups originais 1000×1000
src/
  App.jsx
  components/
    Navbar.jsx      # topbar + navbar fixa com estado scrolled
    Hero.jsx        # fundo + overlay suave + mocks
    Benefits.jsx / Process.jsx / Plans.jsx / Emails.jsx
    Testimonials.jsx / Faq.jsx / Cta.jsx / Footer.jsx / WhatsAppFloat.jsx
  index.css         # @import "tailwindcss"
index.html
vite.config.js    # @tailwindcss/vite + @vitejs/plugin-react
```

## 🎨 Design

- Paleta: `#0b2d7a` (navy), `#044ac8` (blue), `#eef4ff` / `#e6efff` (claros), `#b9c7e8` (muted)
- Fontes: **Poppins** (corpo), **Caveat** (detalhes manuscritos)
- Curvas elípticas (`clip-path: ellipse(...)`) em E-mails e Footer

## 📦 Assets

- Logo/fav originais preservados como `*.orig.png` caso precise reverter
- Favicon vinculado em `index.html` → `/fav.png`

## 📝 Notas

- Imagens externas: Unsplash (hero e-mail) e `i.pravatar.cc` (avatares prova social) — requer internet
- Contatos: `936 356 778` · `geral@salasolucoes.com`
