import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Extintores', href: '#tipos' },
    { label: 'Por que nós', href: '#porque' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#C41E1E] shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
            <rect x="10" y="1" width="8" height="4" rx="1.5" fill="white" opacity="0.9"/>
            <path d="M18 3 L24 3 L26 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M26 6 L28 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="6" y="5" width="16" height="30" rx="8" fill="white"/>
            <rect x="9" y="12" width="10" height="3" rx="1.5" fill="#C41E1E" opacity="0.3"/>
          </svg>
          <div>
            <div className="text-white font-bold text-lg leading-none tracking-wide">EXTINTORES</div>
            <div className="text-white/70 text-xs tracking-[4px] font-medium">GLOBO</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/5551991330027?text=Olá%20Paulo,%20gostaria%20de%20um%20orçamento!"
            target="_blank" rel="noopener noreferrer"
            className="bg-white text-[#C41E1E] text-sm font-semibold px-5 py-2 rounded-lg hover:bg-red-50 transition-colors">
            Orçamento grátis
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#9B1515] px-6 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="text-white/85 hover:text-white text-sm font-medium py-1">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/5551991330027" target="_blank" rel="noopener noreferrer"
            className="bg-white text-[#C41E1E] text-sm font-semibold px-4 py-2 rounded-lg text-center mt-1">
            Orçamento grátis
          </a>
        </div>
      )}
    </nav>
  )
}
