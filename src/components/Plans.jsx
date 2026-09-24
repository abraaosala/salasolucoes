function Badge({ children, dark }) {
  return (
    <span
      className={`inline-flex items-center text-[10px] font-extrabold tracking-[0.1em] px-3 py-1.5 rounded-full ${dark ? 'bg-[#2ea0ff] text-white' : 'bg-[#044ac8] text-white'}`}
    >
      {children}
    </span>
  )
}
export default function Plans() {
  return (
    <section id="planos" className="max-w-[1160px] mx-auto px-5 mt-6 grid lg:grid-cols-2 gap-4">
      <div className="relative bg-[#e6efff] border border-[#d6e2ff] rounded-2xl p-6 overflow-hidden hover:shadow-[0_16px_40px_rgba(4,74,200,0.12)] transition-shadow">
        <Badge>PLANO 01</Badge>
        <h3 className="mt-3 text-[22px] font-extrabold text-[#044ac8]">Essencial One-Page</h3>
        <p className="text-[13px] text-[#4a5a7a] mt-1 leading-relaxed">
          A vitrine ideal para profissionais
          <br />e prestadores de serviços.
        </p>
        <ul className="mt-4 grid gap-2">
          {[
            'Design moderno e responsivo',
            'Apresentação do seu negócio/serviço',
            'Formulário de contacto / WhatsApp',
            'Domínio + Hospedagem (1 ano)',
            'E-mail profissional (1 conta)',
          ].map((i) => (
            <li key={i} className="flex gap-2 items-center text-[13px] text-[#0b2d7a]">
              <span className="w-5 h-5 rounded-full bg-[#044ac8] text-white grid place-items-center text-[10px] font-bold shrink-0">
                ✓
              </span>{' '}
              {i}
            </li>
          ))}
        </ul>
        <div className="mt-4 inline-flex items-center gap-2.5 bg-white/80 border border-[#d6e2ff] rounded-xl px-3 py-2.5">
          <span className="w-8 h-8 rounded-lg bg-[#044ac8] text-white grid place-items-center">
            🚀
          </span>
          <div className="leading-tight">
            <b className="text-xs text-[#0b2d7a]">Simples, profissional</b>
            <div className="text-xs text-[#4a5a7a]">e com resultados.</div>
          </div>
        </div>
        <a
          href="#contacto"
          className="mt-4 inline-flex bg-[#0b2d7a] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#0a245f] transition"
        >
          Escolher Essencial →
        </a>
        <div className="hidden xl:block absolute right-3 bottom-3 w-[92px] bg-[#111] rounded-[16px] p-1 border border-[#333] shadow-xl rotate-[2deg]">
          <div className="bg-white rounded-[12px] overflow-hidden">
            <div className="h-4 bg-[#f7f9ff] flex items-center justify-between px-1.5 text-[7px] border-b border-[#e6ecfa]">
              <b>⧉</b> ☰
            </div>
            <div className="bg-gradient-to-br from-[#001a4d] to-[#0c3a9a] text-white p-2">
              <div className="text-[7px] font-bold leading-tight">
                Seu serviço
                <br />
                em destaque.
              </div>
              <span className="mt-1 inline-block bg-[#0a7bff] text-white text-[6px] px-1.5 py-0.5 rounded-full font-bold">
                Fale connosco
              </span>
            </div>
            <div className="h-8 bg-[url('https://i.pravatar.cc/100?img=15')] bg-cover bg-center" />
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-br from-[#001342] via-[#0a2460] to-[#0e368a] border border-[#12307a] rounded-2xl p-6 text-white overflow-hidden hover:shadow-[0_16px_40px_rgba(0,19,66,0.35)] transition-shadow">
        <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest bg-white/10 border border-white/15 px-2.5 py-1 rounded-full">
          ★ MAIS PEDIDO
        </div>
        <Badge dark>PLANO 02</Badge>
        <h3 className="mt-3 text-[22px] font-extrabold">
          Ecossistema <span className="text-[#3ea0ff]">Pro</span>
        </h3>
        <p className="text-[13px] text-[#b9c7e8] mt-1 leading-relaxed">
          Estrutura completa multipáginas
          <br />
          para empresas em expansão.
        </p>
        <ul className="mt-4 grid gap-2">
          {[
            'Até 5 páginas (Home, Sobre, Serviços, Portfólio, Contacto)',
            'Design personalizado e responsivo',
            'Integração com WhatsApp e redes sociais',
            'Domínio + Hospedagem (1 ano)',
            'E-mails corporativos (até 10 contas)',
            'Suporte técnico contínuo',
          ].map((i) => (
            <li key={i} className="flex gap-2 items-center text-[13px] text-[#dbe6ff]">
              <span className="w-5 h-5 rounded-full bg-[#3ea0ff] text-[#001342] grid place-items-center text-[10px] font-bold shrink-0">
                ✓
              </span>{' '}
              {i}
            </li>
          ))}
        </ul>
        <div className="mt-4 inline-flex items-center gap-2.5 bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 backdrop-blur">
          <span className="w-8 h-8 rounded-lg bg-white/15 border border-white/15 grid place-items-center text-sm">
            ▅
          </span>
          <div className="leading-tight">
            <b className="text-xs">Mais páginas. Mais alcance.</b>
            <div className="text-xs text-[#b9c7e8]">Mais oportunidades.</div>
          </div>
        </div>
        <a
          href="#contacto"
          className="mt-4 inline-flex bg-[#3ea0ff] hover:bg-[#2a90f0] text-[#001342] text-sm font-extrabold px-6 py-3 rounded-full transition"
        >
          Escolher Pro →
        </a>
        <div className="hidden xl:block absolute right-3 bottom-[72px] w-[46%] opacity-95">
          <div className="bg-[#0c1b3a] rounded-lg p-1.5 pb-0 border border-[#1a3a6a] shadow-xl">
            <div className="bg-white rounded-md rounded-b-none overflow-hidden">
              <div className="h-5 bg-[#f7f9ff] flex items-center justify-between px-2 text-[7px] border-b border-[#e6ecfa]">
                <b>⧉ SALA</b>
                <span className="bg-[#044ac8] text-white px-2 py-0.5 rounded-full">Orçamento</span>
              </div>
              <div className="bg-gradient-to-br from-[#001a4d] to-[#0c3a6a] text-white p-2 flex justify-between items-center gap-2">
                <b className="text-[7px] leading-tight">
                  Grandes projetos
                  <br />
                  começam com
                  <br />
                  boas ideias.
                </b>
                <div className="w-9 h-7 rounded bg-gradient-to-b from-[#3ea0ff] to-[#001342] shrink-0" />
              </div>
            </div>
            <div className="h-1.5 -mx-1.5 bg-gradient-to-b from-[#cdd5e6] to-[#98a6be] rounded-b-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
