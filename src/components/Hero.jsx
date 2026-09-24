export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f0f4ff] pt-[106px] lg:pt-[114px]">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={(e) => {
          e.currentTarget.style.background = '#dbe6ff'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/45 to-transparent lg:via-white/25 pointer-events-none" />
      <div className="relative max-w-[1160px] mx-auto px-5 pt-6 lg:pt-10 pb-8">
        <div className="grid lg:grid-cols-[1.05fr_1.2fr] gap-8 lg:gap-6 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-[#d6e2ff] rounded-full pl-1 pr-3 py-1 shadow-sm text-xs font-semibold">
              <span className="bg-[#0b2d7a] text-white text-[10px] px-2.5 py-1 rounded-full font-extrabold tracking-widest">
                NOVO
              </span>
              <span className="text-[#0b2d7a]">Domínio .co.ao + hospedagem 1 ano inclusos</span>
            </div>
            <h1 className="mt-5 text-[32px] sm:text-[38px] lg:text-[44px] font-extrabold leading-[0.98] tracking-[-0.03em] text-[#0b2d7a]">
              Leve o seu negócio
              <br />
              para o mundo digital
              <br />
              com quem entende de
              <br />
              <span className="relative inline-block text-[#044ac8]">
                performance.
                <span className="absolute left-0 right-0 -bottom-2 h-[10px] bg-gradient-to-r from-[#0a7bff] to-[#4da0ff] rounded-full -skew-x-6 -z-10 opacity-90" />
              </span>
            </h1>
            <p className="mt-6 text-[15px] leading-6 text-[#4a5a7a] max-w-[440px]">
              Transforme visitantes em clientes com um website moderno, rápido e otimizado para
              telemóvel. Estratégia, design e conversão — tudo num só parceiro.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#planos"
                className="bg-[#044ac8] hover:bg-[#0339a8] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-[0_12px_28px_rgba(4,74,200,0.28)] transition inline-flex items-center gap-2"
              >
                Começar agora{' '}
                <span className="bg-white/20 rounded-full w-6 h-6 grid place-items-center text-xs">
                  →
                </span>
              </a>
              <a
                href="#processo"
                className="bg-white border border-[#d6e2ff] hover:border-[#0b2d7a] text-[#0b2d7a] font-semibold text-sm px-6 py-3.5 rounded-full inline-flex items-center gap-2"
              >
                Ver como funciona
              </a>
            </div>
            <div className="mt-7 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[11, 32, 14, 29].map((n) => (
                  <img
                    key={n}
                    src={`https://i.pravatar.cc/100?img=${n}`}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    alt=""
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <span className="text-[#f59e0b]">★★★★★</span>{' '}
                  <span className="text-[#0b2d7a]">4.9/5</span>{' '}
                  <span className="font-medium text-[#4a5a7a]">· 180+ projetos entregues</span>
                </div>
                <div className="text-[11px] text-[#6b7a9a]">
                  Empresas em Angola e Portugal confiam na Sala
                </div>
              </div>
            </div>
            <div className="script hidden lg:block absolute left-[46%] top-[18px] text-[#044ac8] text-[26px] leading-none -rotate-6 select-none">
              Seu negócio
              <br />
              no próximo
              <br />
              nível!
              <div className="h-[3px] bg-[#044ac8] rounded-full mt-1 w-[120px] ml-2" />
            </div>
          </div>
          <div className="relative flex items-end justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              <div className="bg-[#0c1b3a] rounded-[18px] p-2.5 pb-0 shadow-[0_24px_60px_rgba(0,30,80,0.28)] border border-[#1a2f5a]">
                <div className="bg-white rounded-[12px] rounded-b-none overflow-hidden border border-[#dfe6f5]">
                  <div className="h-8 flex items-center justify-between px-3 bg-[#f7f9ff] border-b border-[#e6ecfa]">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#0b2d7a] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#044ac8] inline-block" /> SALA
                      SOLUÇÕES
                    </span>
                    <a
                      href="#planos"
                      className="text-[10px] font-bold bg-[#044ac8] text-white px-3 py-1 rounded-full"
                    >
                      Peça Orçamento
                    </a>
                  </div>
                  <div className="bg-gradient-to-br from-[#001a4d] via-[#0a2a6a] to-[#0e3a9a] text-white p-4 flex gap-3 items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(280px_160px_at_85%_90%,rgba(62,160,255,0.45),transparent_70%)]" />
                    <div className="relative flex-1">
                      <div className="text-[13px] font-bold leading-tight">
                        O seu negócio
                        <br />
                        merece mais.
                      </div>
                      <div className="text-[10px] text-[#b9c7e8] mt-1 leading-snug">
                        Soluções digitais que impulsionam o seu crescimento.
                      </div>
                      <span className="mt-2 inline-block bg-[#0a7bff] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                        Vamos começar →
                      </span>
                    </div>
                    <div className="relative w-[96px] h-[64px] rounded-lg bg-gradient-to-b from-[#3ea0ff] to-[#001342] grid place-items-center text-white text-xl shrink-0 border border-white/20">
                      ▅▃▆
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-2.5 bg-white">
                    {[
                      { i: '⊕', t: 'Sites Modernos', s: 'Design que converte' },
                      { i: '⚡', t: 'Alta Performance', s: 'Mais velocidade' },
                      { i: '♡', t: 'Suporte Contínuo', s: 'Sempre consigo' },
                    ].map((f) => (
                      <div
                        key={f.t}
                        className="text-center bg-[#f7f9ff] rounded-lg py-2.5 border border-[#e6ecfa]"
                      >
                        <div className="w-7 h-7 bg-[#e8efff] rounded-lg grid place-items-center mx-auto text-[#044ac8] text-xs">
                          {f.i}
                        </div>
                        <div className="text-[10px] font-bold text-[#0b2d7a] mt-1 leading-none">
                          {f.t}
                        </div>
                        <div className="text-[9px] text-[#6b7a9a]">{f.s}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-3.5 -mx-2.5 bg-gradient-to-b from-[#cdd5e6] to-[#a8b4c8] rounded-b-[12px] mt-0" />
              </div>
              <div className="hidden sm:block absolute -right-2 -bottom-2 w-[148px] bg-[#111] rounded-[22px] p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.35)] border-2 border-[#333]">
                <div className="bg-white rounded-[16px] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#111] rounded-b-lg z-10" />
                  <div className="h-6 bg-[#f7f9ff] flex items-center justify-between px-2.5 border-b border-[#e6ecfa] text-[9px]">
                    <b className="text-[#0b2d7a]">⧉ SALA</b> ☰
                  </div>
                  <div className="bg-gradient-to-br from-[#001a4d] to-[#0c3a9a] text-white p-2.5">
                    <div className="text-[10px] font-bold leading-tight">
                      O seu negócio
                      <br />
                      merece mais.
                    </div>
                    <div className="text-[8px] text-[#b9c7e8] mt-1">
                      Soluções digitais que impulsionam...
                    </div>
                    <span className="mt-1.5 inline-block bg-[#0a7bff] text-white text-[8px] font-bold px-2 py-1 rounded-full">
                      Vamos começar →
                    </span>
                  </div>
                  <div className="flex gap-1.5 justify-center py-2">
                    {['⊕', '▅', '♡'].map((x) => (
                      <span
                        key={x}
                        className="w-6 h-6 bg-[#eef4ff] rounded-full grid place-items-center text-[10px]"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
