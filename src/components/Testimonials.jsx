export default function Testimonials() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 mt-6">
      <div className="bg-white border border-[#e6ecfa] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <div className="text-[11px] font-extrabold tracking-[0.14em] text-[#044ac8]">PROVA SOCIAL</div>
          <div className="script text-[#044ac8] text-xl -rotate-2 mt-1">Clientes que cresceram connosco</div>
          <div className="mt-4 bg-[#f7f9ff] border border-[#e6ecfa] rounded-xl p-4">
            <div className="text-[13px] leading-relaxed text-[#0b2d7a]">“Em 3 semanas tínhamos site novo, e-mails profissionais e o WhatsApp a gerar pedidos todos os dias. A Sala entende de <b className="text-[#044ac8]">conversão</b>, não só de design.”</div>
            <div className="mt-3 flex items-center gap-2.5">
              <img src="https://i.pravatar.cc/100?img=8" className="w-8 h-8 rounded-full object-cover" alt="" />
              <div><div className="text-xs font-bold text-[#0b2d7a]">Helena M. — Clínica Essence, Luanda</div><div className="text-[11px] text-[#6b7a9a]">Plano Ecossistema Pro · ★★★★★</div></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
          {[
            { k: '98%', l: 'entregas\nno prazo' },
            { k: '<48h', l: 'para primeira\nversão' },
            { k: '24/7', l: 'suporte\nvia WhatsApp' },
          ].map(s => (
            <div key={s.k} className="bg-[#0b2d7a] text-white rounded-xl p-4 text-center min-w-[110px]">
              <div className="text-xl font-extrabold">{s.k}</div><div className="text-[11px] text-[#b9c7e8] whitespace-pre-line leading-tight mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
