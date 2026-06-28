const types = [
  { color: '#DC2626', name: 'Pó ABC', use: 'Uso geral — sólidos, líquidos e gases', tag: 'mais vendido' },
  { color: '#1D4ED8', name: 'CO₂', use: 'Equipamentos elétricos e eletrônicos', tag: '' },
  { color: '#15803D', name: 'Água', use: 'Materiais sólidos — Classe A', tag: '' },
  { color: '#D97706', name: 'Espuma', use: 'Líquidos inflamáveis — Classe B', tag: '' },
  { color: '#7C3AED', name: 'Pó BC', use: 'Gases e líquidos inflamáveis', tag: '' },
  { color: '#0E7490', name: 'Halotron', use: 'Ambientes especiais e museus', tag: '' },
]

export default function Types() {
  return (
    <section id="tipos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[#C41E1E] text-xs font-semibold tracking-widest uppercase">Tipos</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Extintores disponíveis</h2>
          <p className="text-gray-500 text-base max-w-lg">
            Trabalhamos com todos os tipos e classes. Não sabe qual você precisa? Nos consulte!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {types.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: t.color }} />
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  {t.tag && (
                    <span className="text-xs bg-red-100 text-[#C41E1E] font-medium px-2 py-0.5 rounded-full">
                      {t.tag}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-500 text-sm">{t.use}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-[#C41E1E]/5 border border-[#C41E1E]/15 rounded-2xl text-center">
          <p className="text-gray-600 text-sm">
            Não sabe qual extintor é o ideal para o seu caso?{' '}
            <a href="https://wa.me/5551991330027?text=Olá%20Paulo,%20preciso%20de%20ajuda%20para%20escolher%20o%20extintor%20certo!"
              target="_blank" rel="noopener noreferrer"
              className="text-[#C41E1E] font-semibold hover:underline">
              Fale com Paulo Matos →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
