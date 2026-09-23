import { useState, useEffect } from 'react'
function Topbar() {
  return (
    <div className="bg-[#0b2d7a] text-white text-[12px] leading-none">
      <div className="max-w-[1160px] mx-auto px-5 h-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <a href="tel:+244936356778" className="inline-flex items-center gap-1.5 font-semibold hover:text-[#7cc4ff] transition">
            <span className="w-6 h-6 rounded-full bg-white/15 border border-white/20 grid place-items-center text-[11px]">📞</span>
            <span className="hidden sm:inline">936 356 778</span>
            <span className="sm:hidden">936 356 778</span>
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <a href="mailto:geral@salasolucoes.com" className="hidden sm:inline-flex items-center gap-1.5 font-medium hover:text-[#7cc4ff] transition">
            <span className="w-6 h-6 rounded-full bg-white/15 border border-white/20 grid place-items-center text-[11px]">✉</span>
            geral@salasolucoes.com
          </a>
          <a href="mailto:geral@salasolucoes.com" className="sm:hidden inline-flex items-center gap-1.5 opacity-90">
            <span className="w-6 h-6 rounded-full bg-white/15 border border-white/20 grid place-items-center text-[11px]">✉</span>
            E-mail
          </a>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden md:inline-flex items-center gap-1.5 text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] animate-pulse" />
            Atendimento 8h–18h (Luanda)
          </span>
          <a href="https://wa.me/244936356778" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#1ebe5a] text-white font-extrabold px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 transition">
            ✆ <span className="hidden sm:inline">WhatsApp</span><span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default function Navbar() {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#planos', label: 'Planos' },
    { href: '#emails', label: 'E-mails' },
    { href: '#processo', label: 'Processo' },
    { href: '#faq', label: 'FAQ' },
  ]
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${scrolled ? 'max-h-0 opacity-0' : 'max-h-8 opacity-100'}`}>
        <Topbar />
      </div>
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white backdrop-blur-xl border-b border-[#e6ecfa] shadow-[0_4px_24px_rgba(0,30,80,0.08)]' : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-[1160px] mx-auto px-5 h-[62px] lg:h-[68px] flex items-center justify-between gap-4">
          <a href="#" className="flex items-center shrink-0">
            <img src="/logo.png" alt="Sala Soluções — Ideias em Soluções Digitais" className="h-[40px] lg:h-[46px] w-auto object-contain origin-left" />
          </a>
          <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#4a5a7a]">
            {links.map(l => <a key={l.href} href={l.href} className="hover:text-[#0b2d7a]">{l.label}</a>)}
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a href="tel:+244936356778" className="hidden xl:inline text-xs font-semibold text-[#4a5a7a]">936 356 778</a>
            <a href="#planos" className="bg-[#044ac8] hover:bg-[#033bb0] text-white text-[13px] font-bold px-5 py-2.5 rounded-full shadow-[0_8px_20px_rgba(4,74,200,0.3)] transition">Peça orçamento →</a>
          </div>
          <button onClick={() => setMenu(!menu)} className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-[#e6ecfa] bg-white">
            <span className="text-lg">{menu ? '✕' : '☰'}</span>
          </button>
        </div>
        {menu && (
          <div className="lg:hidden border-t border-[#e6ecfa] bg-white px-5 py-4 grid gap-3 text-sm">
            {links.map(l => <a key={l.href} href={l.href} onClick={() => setMenu(false)}>{l.label}</a>)}
            <a href="#planos" className="bg-[#044ac8] text-white text-center font-bold py-3 rounded-full mt-2">Peça orçamento</a>
          </div>
        )}
      </nav>
    </div>
  )
}
