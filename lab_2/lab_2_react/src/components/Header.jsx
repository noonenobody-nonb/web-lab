export default function Header() {
  return (
    <header className="bg-neutral-900 border-b border-purple-500/30 p-6 rounded-t-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-purple-400 mb-1">
        Волошко Владислав Віталійович
      </h1>
      <p className="text-emerald-400 font-medium mb-4">
        Студент спеціальності «Кібербезпека»
      </p>
      <nav className="flex flex-wrap gap-4 text-sm font-semibold">
        <a href="#experience" className="text-purple-400 hover:text-emerald-400 transition-colors">
          Досвід роботи
        </a>
        <a href="#education" className="text-purple-400 hover:text-emerald-400 transition-colors">
          Освіта
        </a>
        <a href="#contact" className="text-purple-400 hover:text-emerald-400 transition-colors">
          Контакти
        </a>
      </nav>
    </header>
  );
}