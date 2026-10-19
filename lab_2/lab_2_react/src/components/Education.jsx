export default function Education() {
  return (
    <section id="education" className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md hover:border-purple-500/50 transition-all flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-emerald-400 mb-4 border-b border-neutral-800 pb-2">
          Освіта
        </h2>
        
        <article className="mb-6">
          <h3 className="text-xl font-semibold text-neutral-100 mb-1">
            Бакалавр, Кібербезпека
          </h3>
          <p className="text-sm text-neutral-400">
            Національний университет «Львівська політехніка» | 2025 — 2029 (очікуваний випуск)
          </p>
        </article>
      </div>

      <div className="border-t border-neutral-800 pt-4">
        <h3 className="text-lg font-semibold text-purple-400 mb-2">Навички</h3>
        <p className="text-neutral-300 text-sm mb-1">
          <strong className="text-neutral-100">Мови програмування:</strong> C#, Python, SQL
        </p>
        <p className="text-neutral-300 text-sm">
          <strong className="text-neutral-100">Вебтехнології:</strong> HTML5, React, Node.js
        </p>
      </div>
    </section>
  );
}