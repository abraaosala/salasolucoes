export default function Emails() {
  return (
    <section id="emails" className="max-w-[1160px] mx-auto px-5 mt-8">
      <div className="relative">
        <div className="hidden lg:block script absolute -top-2 right-2 text-[#044ac8] text-[22px] leading-none text-right -rotate-6 select-none">
          Mais profissionalismo
          <br />
          para o seu negócio!
          <div className="h-[3px] bg-[#044ac8] rounded-full mt-1 w-[160px] ml-auto" />
        </div>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-center">
          <div>
            <h2 className="text-[30px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#0b2d7a]">
              Deixe de usar
              <br />
              e-mails comerciais
              <br />
              <span className="text-[#044ac8] relative inline-block">
                genéricos!
                <span className="absolute left-0 right-0 -bottom-1.5 h-[8px] bg-gradient-to-r from-[#0a7bff] to-[#4da0ff] rounded-full -skew-x-6" />
              </span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#4a5a7a]">
              Transmita a seriedade e a segurança
              <br className="hidden sm:block" />
              que o mercado exige com o seu próprio
              <br className="hidden sm:block" />
              domínio{' '}
              <span className="inline-flex items-center bg-[#044ac8] text-white text-xs font-extrabold px-3 py-1 rounded-full ml-1">
                @suaempresa.
              </span>
            </p>
          </div>
          <div className="relative">
            <div
              className="relative rounded-[20px] overflow-hidden border border-[#e6ecfa] shadow-[0_20px_50px_rgba(0,30,80,0.18)] h-[280px] lg:h-[300px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent" />
              <div className="absolute right-3 top-4 grid gap-2">
                {[
                  'contato@suaempresa.co.ao',
                  'comercial@suaempresa.com',
                  'suporte@suaempresa.co.ao',
                ].map((m) => (
                  <div
                    key={m}
                    className="bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.18)] border border-[#e6ecfa] px-3 py-2 flex items-center gap-2 text-[11px] font-medium text-[#0b2d7a]"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#eef4ff] grid place-items-center text-[#044ac8] text-[11px]">
                      ✉
                    </span>{' '}
                    {m}{' '}
                    <span className="w-4 h-4 rounded-full bg-[#0a7bff] text-white grid place-items-center text-[9px] ml-1">
                      ✓
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid md:grid-cols-3 bg-white border border-[#e6ecfa] rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#e6ecfa]">
        {[
          {
            ic: '✉',
            t: 'Caixas de e-mail profissionais personalizadas',
            d: 'Tenha e-mails com o nome da sua empresa e mais credibilidade no seu negócio.',
          },
          {
            ic: '🛡',
            t: 'Filtro anti-spam avançado e alta entregabilidade',
            d: 'Seus e-mails chegam com segurança e sem interrupções.',
          },
          {
            ic: '▭',
            t: 'Acesso e sincronização em tempo real',
            d: 'No computador, telemóvel e em qualquer lugar. Sempre conectado.',
          },
        ].map((f) => (
          <div key={f.t} className="p-5 flex gap-3.5">
            <span className="w-11 h-11 rounded-full bg-[#eef4ff] border border-[#d6e2ff] text-[#044ac8] grid place-items-center text-lg shrink-0">
              {f.ic}
            </span>
            <div>
              <div className="text-[13px] font-extrabold text-[#0b2d7a] leading-tight">{f.t}</div>
              <div className="text-xs text-[#4a5a7a] mt-1.5 leading-relaxed">{f.d}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 relative bg-gradient-to-br from-[#001a5a] via-[#002b8f] to-[#0050d0] rounded-[20px] overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-10 bg-white"
          style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }}
        />
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 p-6 lg:p-7 items-center relative">
          <div className="text-white pt-6 lg:pt-2">
            <ul className="grid gap-3">
              {[
                'Mais credibilidade perante clientes e parceiros.',
                'Comunicação segura e profissional.',
                'Fortaleça a identidade da sua marca.',
                'Tenha controlo total das suas mensagens.',
              ].map((t) => (
                <li key={t} className="flex gap-3 items-center text-sm font-medium">
                  <span className="w-6 h-6 rounded-full bg-[#0a7bff] text-white grid place-items-center text-[11px] font-bold shrink-0">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-end justify-center gap-2">
            <div className="flex-1 max-w-[520px] bg-[#0c1b3a] rounded-xl p-2 pb-0 border border-white/15 shadow-2xl">
              <div className="bg-white rounded-lg rounded-b-none overflow-hidden">
                <div className="h-7 flex items-center justify-between px-3 bg-[#f7f9ff] border-b border-[#e6ecfa]">
                  <span className="text-[10px] font-bold text-[#0b2d7a] flex items-center gap-1">
                    <span className="w-5 h-5 rounded bg-[#0b2d7a] text-white grid place-items-center text-[8px] font-extrabold">
                      S
                    </span>{' '}
                    SALA SOLUÇÕES
                  </span>
                  <span className="text-[9px] text-[#6b7a9a] flex gap-2">◎ 👤</span>
                </div>
                <div className="grid grid-cols-[110px_1fr] text-[10px]">
                  <div className="bg-[#f7f9ff] border-r border-[#e6ecfa] p-2 grid gap-1.5">
                    <div className="bg-[#044ac8] text-white rounded-lg px-2 py-1.5 font-bold flex justify-between">
                      ▸ Caixa de entrada{' '}
                      <span className="bg-white text-[#044ac8] rounded-full w-4 h-4 grid place-items-center text-[9px]">
                        3
                      </span>
                    </div>
                    <div className="px-2 py-1 text-[#4a5a7a] flex gap-1.5">› Enviados</div>
                    <div className="px-2 py-1 text-[#4a5a7a] flex gap-1.5">▭ Rascunhos</div>
                    <div className="px-2 py-1 text-[#4a5a7a] flex gap-1.5">⊘ Spam</div>
                    <div className="px-2 py-1 text-[#4a5a7a] flex gap-1.5">🗑 Lixeira</div>
                    <div className="px-2 py-1 text-[#4a5a7a] flex gap-1.5">⚙ Configurações</div>
                  </div>
                  <div className="p-2">
                    <div className="font-bold text-[#0b2d7a] text-[11px]">Caixa de entrada</div>
                    <div className="mt-1.5 bg-[#f7f9ff] border border-[#e6ecfa] rounded-lg px-2 py-1 text-[9px] text-[#6b7a9a]">
                      ⌕ Pesquisar e-mails...
                    </div>
                    <div className="mt-2 grid gap-1.5">
                      {[
                        { e: 'contato@suaempresa.co.ao', s: 'Proposta Comercial', t: '10:24' },
                        { e: 'suporte@suaempresa.co.ao', s: 'Suporte Técnico', t: '09:17' },
                        { e: 'comercial@suaempresa.com', s: 'Reunião de Negócios', t: 'Ontem' },
                        { e: 'info@suaempresa.co.ao', s: 'Novos Projetos', t: 'Ontem' },
                      ].map((m) => (
                        <div
                          key={m.e}
                          className="flex items-center gap-2 bg-white border border-[#e6ecfa] rounded-lg px-2 py-1.5"
                        >
                          <span className="w-6 h-6 rounded-full bg-[#eef4ff] grid place-items-center text-[#044ac8] text-[9px]">
                            ✉
                          </span>
                          <div className="leading-tight flex-1">
                            <div className="text-[9px] font-semibold text-[#0b2d7a]">{m.e}</div>
                            <div className="text-[9px] text-[#6b7a9a]">{m.s}</div>
                          </div>
                          <span className="text-[8px] text-[#6b7a9a]">{m.t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-b from-[#cdd5e6] to-[#8ea0bd] rounded-b-lg -mx-2 w-[calc(100%+16px)]" />
            </div>
            <div className="hidden sm:block w-[122px] shrink-0 bg-[#111] rounded-[18px] p-1.5 border-2 border-[#333] shadow-xl -mb-1">
              <div className="bg-white rounded-[12px] overflow-hidden">
                <div className="h-5 flex items-center justify-between px-2 text-[8px] border-b border-[#e6ecfa]">
                  <span className="font-bold">9:41</span>
                  <span className="flex gap-1">◧ ◎</span>
                </div>
                <div className="px-2 py-1.5 flex justify-between items-center">
                  <b className="text-[10px] text-[#0b2d7a]">Caixa de entrada</b>
                  <span className="text-[9px]">↗</span>
                </div>
                <div className="grid gap-1 px-1.5 pb-2">
                  {[
                    { e: 'contato@suaempresa.co.ao', s: 'Proposta Comercial', t: '10:24' },
                    { e: 'suporte@suaempresa.co.ao', s: 'Suporte Técnico', t: '09:17' },
                    { e: 'comercial@suaempresa.com', s: 'Reunião', t: 'Ontem' },
                    { e: 'info@suaempresa.co.ao', s: 'Novos Projetos', t: 'Ontem' },
                  ].map((m) => (
                    <div
                      key={m.e}
                      className="flex gap-1.5 items-center border border-[#e6ecfa] rounded-lg px-1.5 py-1"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#eef4ff] grid place-items-center text-[7px] text-[#044ac8]">
                        ✉
                      </span>
                      <div className="leading-tight">
                        <div className="text-[7px] font-semibold">{m.e}</div>
                        <div className="text-[7px] text-[#6b7a9a]">{m.s}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-around py-1.5 border-t border-[#e6ecfa] text-[10px] text-[#044ac8]">
                  ✉ ▭ 👤
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mx-2 lg:mx-3 mb-2 rounded-xl flex items-center justify-center divide-x divide-[#e6ecfa] py-3 px-2">
          {[
            { k: 'M', l: 'Gmail' },
            { k: '◧', l: 'Outlook' },
            { k: '⊕', l: 'Webmail' },
            { k: '▭', l: 'iOS / Android' },
          ].map((i) => (
            <div
              key={i.l}
              className="flex-1 flex items-center justify-center gap-2 text-[#0b2d7a] font-bold text-xs"
            >
              <span className="w-7 h-7 rounded-lg bg-white border border-[#e6ecfa] grid place-items-center text-[#044ac8]">
                {i.k}
              </span>
              {i.l}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 bg-gradient-to-r from-[#001342] via-[#0030a0] to-[#0070ff] rounded-full flex flex-col lg:flex-row items-center justify-between gap-4 px-6 py-4 text-white">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-white/15 border border-white/20 grid place-items-center -rotate-12">
            ➤
          </span>
          <div className="font-extrabold leading-tight text-sm lg:text-base">
            Profissionalize a sua
            <br />
            comunicação corporativa agora.
          </div>
        </div>
        <div className="hidden lg:block w-px h-10 bg-white/20" />
        <div className="text-sm font-bold grid gap-1">
          <span className="flex gap-2 items-center">📞 936 356 778</span>
          <span className="flex gap-2 items-center">✉ geral@salasolucoes.com</span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[#0b2d7a] border-t border-[#e6ecfa] pt-3">
        <span className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#eef4ff] grid place-items-center text-[#044ac8]">
            ♡
          </span>
          Segurança
          <span className="hidden sm:inline w-px h-4 bg-[#e6ecfa] mx-2" />⚡ Alta performance
          <span className="hidden sm:inline w-px h-4 bg-[#e6ecfa] mx-2" />◉ Suporte especializado
        </span>
        <span className="script text-[#044ac8] text-[16px] -rotate-3">
          O seu e-mail, o seu cartão de visita!
        </span>
      </div>
    </section>
  )
}
