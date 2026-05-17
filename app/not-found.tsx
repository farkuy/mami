import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{ padding: 'calc(var(--header-height) + 80px) 20px 96px' }}>
      <div className="container">
        <p style={{ color: 'var(--color-accent)', fontWeight: 700, marginBottom: 12 }}>
          404
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1.05, marginBottom: 20 }}>
          Страница не найдена
        </h1>
        <p style={{ color: 'var(--color-text-light)', maxWidth: 560, marginBottom: 28 }}>
          Возможно, адрес изменился или страница была удалена. Вернитесь к экскурсиям
          или на главную.
        </p>
        <Link href="/tours" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>
          Смотреть экскурсии
        </Link>
      </div>
    </section>
  );
}
