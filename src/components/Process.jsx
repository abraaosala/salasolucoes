export default function Process() {
  return (
    <section id="processo" className="max-w-[1160px] mx-auto px-5 mt-6">
      <div className="bg-[#0b2d7a] rounded-2xl p-6 md:p-7 grid md:grid-cols-3 gap-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(500px_300px_at_90%_0%,rgba(62,160,255,0.18),transparent_70%)]" />
        {[
          { n: '01', t: 'Briefing & Estratégia', d: 'Entendemos o seu negócio e definimos a mensagem que converte.' },
          { n: '02', t: 'Design & Build', d: 'Criamos um site rápido, responsivo e pronto para vender.' },
          { n: '03', t: 'Lançamento & Suporte', d: 'Publicamos, configuramos domínio/e-mail e acompanhamos.' },
        ].map(s => (
          <div key={s.n} className="relative flex gap-3">
            <span className="text-3xl font-extrabold text-white/20 leading-none">{s.n}</span>
            <div><div className="font-bold text-sm">{s.t}</div><div className="text-xs text-[#b9c7e8] mt-1 leading-relaxed">{s.d}</div></div>
          </div>
        ))}
      </div>
    </section>
  )
}
