import { useState } from 'react'
export default function Faq() {
  const [open, setOpen] = useState(0)
  const items = [
    {
      q: 'Quanto tempo para ficar online?',
      a: 'One-Page em até 7 dias e Pro em até 14 dias após briefing e conteúdos. Primeira prévia em 48h.',
    },
    {
      q: 'O domínio e hospedagem estão inclusos?',
      a: 'Sim — 1 ano de domínio (.co.ao/.com) + hospedagem de alta velocidade + SSL já inclusos.',
    },
    {
      q: 'Consigo editar o site depois?',
      a: 'Sim. Entregamos com CMS simples e damos formação rápida. Suporte contínuo incluído.',
    },
    {
      q: 'Fazem integração com WhatsApp e redes sociais?',
      a: 'Sim — botão flutuante, links rastreáveis e integração com Instagram/Facebook.',
    },
  ]
  return (
    <section id="faq" className="max-w-[700px] mx-auto px-5 mt-8">
      <h2 className="text-center text-xl font-extrabold text-[#0b2d7a]">Perguntas frequentes</h2>
      <div className="mt-4 grid gap-2">
        {items.map((f, i) => (
          <div
            key={f.q}
            className={`border rounded-xl overflow-hidden ${open === i ? 'border-[#044ac8] bg-[#f7f9ff]' : 'border-[#e6ecfa] bg-white'}`}
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3"
            >
              <span className="text-sm font-semibold text-[#0b2d7a]">{f.q}</span>
              <span
                className={`w-7 h-7 rounded-full grid place-items-center text-sm shrink-0 border ${open === i ? 'bg-[#044ac8] text-white border-[#044ac8]' : 'bg-white text-[#044ac8] border-[#d6e2ff]'}`}
              >
                {open === i ? '−' : '+'}
              </span>
            </button>
            {open === i && (
              <div className="px-4 pb-3.5 text-sm text-[#4a5a7a] leading-relaxed">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
