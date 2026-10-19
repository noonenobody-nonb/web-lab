export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 border border-neutral-800 rounded-b-xl p-6 mt-6 shadow-lg">
      <h2 className="text-2xl font-bold text-emerald-400 mb-3 border-b border-neutral-800 pb-2">
        Контакти
      </h2>
      <p className="text-neutral-400 text-sm mb-2">Зв'язатися зі мною:</p>
      <div className="space-y-1 text-sm text-neutral-300">
        <p>
          Email: <a href="mailto:vladyslav.voloshko.kb.2025@lpnu.ua" className="text-emerald-400 hover:underline">vladyslav.voloshko.kb.2025@lpnu.ua</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/noonenobody-nonb" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">github.com</a>
        </p>
      </div>
      <p className="text-xs text-neutral-500 mt-6 border-t border-neutral-800 pt-4 text-center">
        &copy; 2026 Лабораторна робота №2. Усі права захищено.
      </p>
    </footer>
  );
}