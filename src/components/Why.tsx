const reasons = [
  { icon: '⚡', title: 'Atendimento rápido', desc: 'Buscamos e entregamos seu extintor em Torres e região. Sem enrolação.' },
  { icon: '✅', title: 'Certificado INMETRO', desc: 'Todos os produtos e serviços seguem normas ABNT e INMETRO rigorosamente.' },
  { icon: '🤝', title: 'Atendimento pessoal', desc: 'Fale direto com Paulo Matos — sem call center, sem intermediários.' },
  { icon: '💰', title: 'Preço justo', desc: 'Orçamento transparente e sem surpresas. Melhor custo-benefício da região.' },
  { icon: '📋', title: 'Documentação completa', desc: 'Emitimos todos os laudos e certificados necessários para fiscalizações.' },
  { icon: '🔁', title: 'Contrato de manutenção', desc: 'Nunca mais esqueça de recarregar. Avisamos antes do prazo vencer.' },
]

export default function Why() {
  return (
    <section id="porque" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[#C41E1E] text-xs font-semibold tracking-widest uppercase">Diferenciais</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Por que escolher a Globo?</h2>
          <p className="text-gray-500 text-base max-w-lg">
            Mais de uma década atendendo Torres com seriedade e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 p-5 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="text-3xl flex-shrink-0">{r.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
