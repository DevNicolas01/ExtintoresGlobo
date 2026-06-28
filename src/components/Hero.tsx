export default function Hero() {
  return (
    <section className="relative bg-[#C41E1E] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Torres e região — RS
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Segurança contra<br />
            <span className="text-white/75 font-normal">incêndio que você</span><br />
            pode confiar
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Venda, recarga e manutenção de extintores para residências,
            empresas e indústrias. Atendimento direto com Paulo Matos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="https://wa.me/5551991330027?text=Olá%20Paulo,%20gostaria%20de%20um%20orçamento!"
              target="_blank" rel="noopener noreferrer"
              className="bg-white text-[#C41E1E] font-semibold px-7 py-3.5 rounded-xl hover:bg-red-50 transition-all text-sm shadow-lg">
              💬 Falar no WhatsApp
            </a>
            <a href="#servicos"
              className="border-2 border-white/40 text-white font-medium px-7 py-3.5 rounded-xl hover:border-white hover:bg-white/10 transition-all text-sm">
              Ver serviços
            </a>
          </div>
        </div>

        {/* Logo card */}
        <div className="flex-shrink-0">
          <div className="bg-white rounded-3xl p-10 shadow-2xl text-center">
            <img
  src="/logo_trial.png"
  alt="Extintores Globo"
  className="w-32 h-32 object-contain mx-auto mb-4"
  onError={(e) => {
    e.currentTarget.style.display = 'none'
  }}
/>
<div className="text-[#C41E1E] font-black text-2xl tracking-widest">EXTINTORES</div>
<div className="text-[#C41E1E]/60 text-sm tracking-[6px] font-medium mt-0.5">G L O B O</div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-gray-400 text-xs">
              Torres, RS · desde 2010
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
