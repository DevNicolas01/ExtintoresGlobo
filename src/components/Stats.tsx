const stats = [
  { value: '+10 anos', label: 'de experiência' },
  { value: 'INMETRO', label: 'certificado' },
  { value: 'Torres', label: 'e região norte gaúcha' },
  { value: '24h', label: 'atendimento rápido' },
]

export default function Stats() {
  return (
    <div className="bg-[#9B1515]">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-white font-bold text-xl">{s.value}</div>
            <div className="text-white/60 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
