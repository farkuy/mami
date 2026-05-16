export default function Home() {
  return (
    <section className="stage-hero" aria-labelledby="stage-title">
      <div className="container stage-hero-inner">
        <p className="stage-label">Next.js migration</p>
        <h1 id="stage-title" className="stage-title">
          НижнийГид
        </h1>
        <p className="stage-text">
          Общая основа Next.js версии подключена: глобальные стили, Header, Footer,
          контакты и навигация. Следующий шаг - перенос страниц.
        </p>
      </div>
    </section>
  );
}
