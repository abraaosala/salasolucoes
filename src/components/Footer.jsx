export default function Footer() {
  return (
    <footer className="mt-0 bg-[#0b2d7a] text-white relative overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-10 bg-white pointer-events-none"
        style={{ clipPath: 'ellipse(58% 100% at 50% 0%)' }}
      />
      <div className="absolute inset-0 top-6 bg-[radial-gradient(600px_300px_at_85%_0%,rgba(62,160,255,0.15),transparent_70%)]" />
      <div className="absolute inset-0 top-6 bg-gradient-to-b from-transparent to-[#001342]/60" />
      <div className="relative max-w-[1160px] mx-auto px-5 pt-14 pb-6">
        <div className="grid lg:grid-cols-[1.4fr_0.9fr_0.9fr_1fr] gap-8">
          <div>
            <img
              src="/logo.png"
              alt="Sala Soluções"
              className="h-9 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-3 text-sm leading-relaxed text-[#b9c7e8]">
              Ideias em soluções digitais que transformam visitantes em clientes. Sites rápidos,
              e-mails profissionais e suporte que não abandona.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href="https://wa.me/244936356778"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 grid place-items-center hover:bg-white hover:text-[#0b2d7a] transition"
              >
                ✆
              </a>
              <a
                href="mailto:geral@salasolucoes.com"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 grid place-items-center hover:bg-white hover:text-[#0b2d7a] transition"
              >
                ✉
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 grid place-items-center hover:bg-white hover:text-[#0b2d7a] transition"
              >
                ◎
              </a>
            </div>
          </div>
          <div>
            <div className="text-xs font-extrabold tracking-[0.14em] text-white/60">NAVEGAÇÃO</div>
            <ul className="mt-3 grid gap-2 text-sm">
              <li>
                <a href="#beneficios" className="text-[#b9c7e8] hover:text-white transition">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#planos" className="text-[#b9c7e8] hover:text-white transition">
                  Planos
                </a>
              </li>
              <li>
                <a href="#emails" className="text-[#b9c7e8] hover:text-white transition">
                  E-mails profissionais
                </a>
              </li>
              <li>
                <a href="#processo" className="text-[#b9c7e8] hover:text-white transition">
                  Processo
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#b9c7e8] hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-extrabold tracking-[0.14em] text-white/60">CONTACTO</div>
            <ul className="mt-3 grid gap-2.5 text-sm">
              <li>
                <a
                  href="tel:+244936356778"
                  className="inline-flex items-center gap-2 text-[#b9c7e8] hover:text-white transition"
                >
                  <span className="w-7 h-7 rounded-full bg-white/10 border border-white/15 grid place-items-center text-xs">
                    📞
                  </span>{' '}
                  936 356 778
                </a>
              </li>
              <li>
                <a
                  href="mailto:geral@salasolucoes.com"
                  className="inline-flex items-center gap-2 text-[#b9c7e8] hover:text-white transition"
                >
                  <span className="w-7 h-7 rounded-full bg-white/10 border border-white/15 grid place-items-center text-xs">
                    ✉
                  </span>{' '}
                  geral@salasolucoes.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-[#b9c7e8]">
                <span className="w-7 h-7 rounded-full bg-white/10 border border-white/15 grid place-items-center text-xs">
                  📍
                </span>{' '}
                Luanda, Angola
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-4 text-[#0b2d7a]">
            <div className="text-xs font-extrabold tracking-[0.14em] text-[#044ac8]">
              NEWSLETTER
            </div>
            <div className="mt-1 text-sm font-bold leading-tight">Receba dicas de performance</div>
            <div className="text-xs text-[#4a5a7a] mt-1">1 e-mail por mês. Sem spam.</div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const f = e.target
                f.reset()
                const b = f.querySelector('button')
                const t = b.textContent
                b.textContent = '✓ Inscrito!'
                setTimeout(() => (b.textContent = t), 2000)
              }}
              className="mt-3 flex gap-2"
            >
              <input
                required
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 min-w-0 bg-[#f7f9ff] border border-[#e6ecfa] rounded-full px-3.5 py-2.5 text-sm outline-none focus:border-[#044ac8] placeholder:text-[#6b7a9a]"
              />
              <button className="bg-[#044ac8] hover:bg-[#033bb0] text-white font-bold text-sm px-5 py-2.5 rounded-full transition shrink-0">
                →
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 text-white">
              <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white text-xs">
                ♡
              </span>{' '}
              Segurança
            </span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" />
            <span className="inline-flex items-center gap-1.5 text-white">
              <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white text-xs">
                ⚡
              </span>{' '}
              Performance
            </span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" />
            <span className="inline-flex items-center gap-1.5 text-white">
              <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white text-xs">
                ♥
              </span>{' '}
              Suporte
            </span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" />
            <span className="inline-flex items-center gap-1.5 text-white">
              <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white text-xs">
                ◎
              </span>{' '}
              Resultados
            </span>
          </div>
          <div className="script text-white/90 text-[16px] leading-none text-center -rotate-3">
            A sua presença online
            <br />
            faz toda a diferença!
          </div>
        </div>
        <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-white/55 border-t border-white/10 pt-4">
          <span>© 2026 Sala Soluções — Ideias em Soluções Digitais · Luanda, Angola</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Privacidade
            </a>
            <a href="#" className="hover:text-white transition">
              Termos
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
