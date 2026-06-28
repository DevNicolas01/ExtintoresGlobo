const services = [
  {
    icon: '🛒',
    name: 'Venda de Extintores',
    desc: 'Extintores novos de todos os tipos e capacidades, com nota fiscal e certificado.',
  },
  {
    icon: '🔄',
    name: 'Recarga',
    desc: 'Recarga rápida com carga original certificada. Buscamos e entregamos.',
  },
  {
    icon: '🔧',
    name: 'Manutenção',
    desc: 'Vistoria completa, teste hidrostático e manutenção preventiva e corretiva.',
  },
  {
    icon: '📄',
    name: 'Laudos e ART',
    desc: 'Documentação completa para AVCB e vistorias do Corpo de Bombeiros.',
  },
  {
    icon: '🏢',
    name: 'Atendimento Empresarial',
    desc: 'Contratos de manutenção periódica para empresas, condomínios e indústrias.',
  },
  {
    icon: '🚗',
    name: 'Atendimento em Domicílio',
    desc: 'Buscamos seu extintor, realizamos o serviço e devolvemos no prazo.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[#C41E1E] text-xs font-semibold tracking-widest uppercase">Serviços</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">O que fazemos</h2>
          <p className="text-gray-500 text-base max-w-lg">
            Atendemos residências, comércios e indústrias com agilidade, segurança e preço justo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.name}
              className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-red-50 hover:border-red-200 transition-all duration-200 cursor-default">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-gray-900 text-base mb-2 group-hover:text-[#C41E1E] transition-colors">
                {s.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
