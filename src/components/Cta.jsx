export default function Cta() {
  return (
    <section id="contacto" className="max-w-[1160px] mx-auto px-5 mt-6">
      <div className="bg-gradient-to-r from-[#001342] via-[#0030a0] to-[#0070ff] rounded-[24px] p-6 md:p-7 flex flex-col lg:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_20%,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="relative flex items-center gap-3.5">
          <span className="w-12 h-12 rounded-full bg-white/15 border border-white/20 grid place-items-center text-xl -rotate-12">➤</span>
          <div>
            <div className="text-xl md:text-2xl font-extrabold leading-none">Peça o seu orçamento<br /><span className="text-[#7cc4ff]">hoje mesmo!</span></div>
            <div className="text-xs text-white/80 mt-1.5">Resposta em até 2 horas úteis · Sem compromisso</div>
          </div>
        </div>
        <div className="hidden lg:block w-px h-12 bg-white/20 relative" />
        <div className="relative flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <a href="https://wa.me/244936356778" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#1ebe5a] text-white font-extrabold text-sm px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition">✆ WhatsApp — 936 356 778</a>
          <a href="mailto:geral@salasolucoes.com" className="bg-white hover:bg-[#eef4ff] text-[#0b2d7a] font-bold text-sm px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition">✉ geral@salasolucoes.com</a>
        </div>
      </div>
    </section>
  )
}
