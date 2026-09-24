export default function Benefits() {
  return (
    <section id="beneficios" className="max-w-[1160px] mx-auto px-5">
      <div className="bg-[#eef4ff] border border-[#d6e2ff] rounded-2xl grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c9d8ff] overflow-hidden">
        {[
          {
            icon: '⊕',
            title: 'Domínio próprio e hospedagem de alta velocidade',
            sub: '(.co.ao, .com)',
            extra: '◷ Sites rápidos, seguros e sempre online.',
          },
          {
            icon: '✆',
            title: 'Design focado em conversão e integração com WhatsApp',
            sub: 'Mais interação, mais leads, mais clientes.',
            extra: null,
          },
          {
            icon: '✉',
            title: 'E-mails corporativos profissionais inclusos',
            sub: 'Mais credibilidade e profissionalismo para o seu negócio.',
            extra: null,
          },
        ].map((b) => (
          <div key={b.title} className="flex gap-3 p-5 items-start">
            <div className="w-11 h-11 rounded-full bg-[#044ac8] text-white grid place-items-center text-lg shrink-0 shadow-[0_6px_16px_rgba(4,74,200,0.3)]">
              {b.icon}
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#0b2d7a] leading-tight">{b.title}</div>
              <div className="text-xs text-[#4a5a7a] mt-1 leading-snug">{b.sub}</div>
              {b.extra && (
                <div className="text-[11px] text-[#6b7a9a] mt-2 flex items-center gap-1">
                  {b.extra}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
