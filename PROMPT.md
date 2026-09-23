# One-Page Landing Page — Prompt | Estilo: Corporate Professional Premium

Create a ONE-PAGE LANDING PAGE in the **Corporate Professional** style — conceive an innovative business or service concept worthy of this aesthetic for a single, cohesive scrolling experience. This style should evoke quiet confidence, established trust, and refined authority — the feeling of entering a space where competence is assumed and excellence is standard. Visitors should immediately feel reassured, respected, and in capable hands, with a visual hierarchy and flow that feels intentional, orderly, and effortlessly guiding, leading the eye downward with clarity and purpose rather than noise or haste. Incorporate colorful elements as appropriate to enhance emotional impact — use restrained, sophisticated accents of deep color to signal credibility and distinction without breaking the composed, executive atmosphere.

Design with a philosophy of calm authority and understated precision, where every element earns its place through purpose and polish. Typography should feel authoritative yet welcoming — confident, highly legible, and precisely kerned, balancing executive gravitas with approachable clarity to communicate leadership without intimidation. Interactions and animations should create a sensation of smooth, measured responsiveness — snappy yet refined, subtle lifts, restrained fades, and precise transitions that feel engineered rather than decorative, reinforcing reliability and attention to detail. Architect the single-page journey as a complete narrative arc in one continuous scroll: open with a powerful, trust-establishing first impression that commands respect, deepen belief through structured proof and composed storytelling in the middle, and resolve with a final call-to-action that feels like a natural, confident decision rather than a push.

Draw inspiration from the abstract essence of this aesthetic — the feeling of a sunlit modernist corporate atrium, a meticulously crafted executive boardroom, a precision-engineered headquarters of glass, steel, and warm wood, or the timeless principles of modern corporate architecture where form serves distinguished function. Channel the cultural memory of mid-century corporate modernism, the quiet luxury of bespoke tailoring and refined craftsmanship, and the sophisticated calm of premium hospitality environments where every material, proportion, and detail whispers quality and permanence. Let these references of established institutions, curated professionalism, and enduring design excellence inform the emotional quality and visual sophistication of the final single-page design — creating an atmosphere of credible, premium, and timeless trust that feels both contemporary and enduringly established, without imitating any specific brand or platform.

---

## Adaptação Sala Soluções — Nível Premium

**Empresa:** Sala Soluções — Ideias em Soluções Digitais  
**Posicionamento:** Criação de sites profissionais de alta performance + e-mails corporativos  
**Público:** Empresas em Angola e Portugal que precisam presença digital que converte

### Seções obrigatórias (ordem do scroll):
1. **Topbar** — contato rápido (telefone, e-mail, WhatsApp, horário)
2. **Navbar fixa** — transparente fundida ao hero no topo; ao rolar >24px vira branca com blur/sombra; topbar recolhe suavemente (altura zero)
3. **Hero** — fundo real (Unsplash) + overlay suave; mocks laptop/phone interativos; headline "Leve o seu negócio para o mundo digital com quem entende de performance"; CTAs "Começar agora" / "Ver como funciona"; prova social (avatares + 4.9/5)
4. **Benefícios** — 3 cards: Domínio/hospedagem .co.ao, Design + WhatsApp, E-mails profissionais
5. **Processo** — 3 passos (Briefing & Estratégia, Design & Build, Lançamento & Suporte) em fundo navy
6. **Planos** — 2 cards lado a lado:
   - **Essencial One-Page** (vitrine para profissionais/prestadores)
   - **Ecossistema Pro** (multipáginas até 5 + e-mails até 10 + suporte contínuo) — badge "MAIS PEDIDO"
7. **E-mails Profissionais** — seção dedicada com curva elíptica superior (`clip-path: ellipse(58% 100% at 50% 0%)`), mock webmail desktop+mobile, compatibilidade (Gmail/Outlook/Webmail/iOS/Android), CTA gradiente
8. **Testimonials/Prova Social** — depoimento real + 3 KPIs (98% entregas no prazo, <48h primeira versão, 24/7 suporte)
9. **FAQ** — acordeão 4 perguntas
9. **CTA Final** — gradiente azul, WhatsApp + E-mail
10. **Footer Premium** — curva superior idêntica à de E-mails; 4 colunas (brand+social, navegação, contacto, newsletter); selos de confiança; tagline manuscrita; copyright + links

### Paleta:
- Navy: `#0b2d7a` (texto principal, fundos escuros)
- Blue: `#044ac8` (primário, CTAs, acentos)
- Light: `#eef4ff`, `#e6efff` (cards claros)
- Muted: `#b9c7e8` (texto secundário escuro)
- White: `#fff` (texto em fundos escuros)

### Fontes:
- **Poppins** 400/600/700/800 — corpo, UI
- **Caveat** 700 — detalhes manuscritos rotacionados (taglines)

### Técnicas:
- Tailwind CSS v4 via `@tailwindcss/vite`
- Vite 6 + React 18
- Componentes isolados em `src/components/`
- `clip-path: ellipse(...)` para curvas elípticas características
- Navbar: `fixed top-0`, estado `scrolled` via `useEffect` (threshold 24px)
- Topbar: `max-h-8` + `opacity` transition ao rolar
- Assets `public/logo.png` e `public/fav.png` recortados (sem espaço branco, 608×373 e 512×512)
- Favicon vinculado em `index.html`

### Contatos reais:
- Telefone: `+244 936 356 778`
- E-mail: `geral@salasolucoes.com`
- WhatsApp: `https://wa.me/244936356778`
- Local: Luanda, Angola