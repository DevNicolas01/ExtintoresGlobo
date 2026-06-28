export default function Footer() {
  return (
    <footer className="bg-[#7A1010] py-6 px-6 text-center">
      <p className="text-white/50 text-sm">
        © {new Date().getFullYear()} Extintores Globo — Torres, RS. Todos os direitos reservados.
      </p>
      <p className="text-white/30 text-xs mt-1">
        Desenvolvido por Nicolas Souza
      </p>
    </footer>
  )
}
