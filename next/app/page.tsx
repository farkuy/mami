export default function Home() {
  return (
    <main className="stage-page">
      <section className="stage-card" aria-labelledby="stage-title">
        <p className="stage-label">Next.js migration</p>
        <h1 id="stage-title" className="stage-title">
          НижнийГид
        </h1>
        <p className="stage-text">
          Базовое Next.js приложение запущено. Следующий шаг - перенести общую основу,
          навигацию и страницы из текущего Vite frontend.
        </p>
      </section>
    </main>
  );
}
