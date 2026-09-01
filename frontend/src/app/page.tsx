export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f6f6f3', color: '#171717' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'grid', gap: 20 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              width: 'fit-content',
              border: '1px solid #d7d7d3',
              borderRadius: 999,
              padding: '8px 14px',
              background: '#ffffff',
              letterSpacing: '0.08em',
              fontSize: 12,
              textTransform: 'uppercase',
            }}
          >
            Fitness Formula
          </div>

          <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '-0.06em', fontWeight: 700 }}>
            Smarter studio operations.
          </h1>

          <p style={{ maxWidth: 620, fontSize: 19, lineHeight: 1.75, color: '#4a4a46' }}>
            A monochrome sports club platform for coaching, subscriptions, booking, trials,
            promotions, and admin oversight in one streamlined system.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button
              style={{
                border: 'none',
                background: '#111111',
                color: '#ffffff',
                padding: '14px 24px',
                borderRadius: 999,
                fontSize: 15,
                cursor: 'pointer',
              }}
            >
              Войти через Яндекс
            </button>
            <button
              style={{
                border: '1px solid #d7d7d3',
                background: '#ffffff',
                color: '#151515',
                padding: '14px 24px',
                borderRadius: 999,
                fontSize: 15,
                cursor: 'pointer',
              }}
            >
              Посмотреть расписание
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 18,
            marginTop: 56,
          }}
        >
          {[
            ['Dashboard', 'Admin analytics and sales overview'],
            ['Subscriptions', 'Packages, trials, and usage tracking'],
            ['Coaches', 'Profiles, schedules, and class ownership'],
            ['Bookings', 'Capacity validation and member flow'],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                border: '1px solid #dddcd6',
                background: '#ffffff',
                borderRadius: 24,
                padding: 24,
                boxShadow: '0 10px 30px rgba(16,16,16,0.03)',
              }}
            >
              <div style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#676761' }}>
                Module
              </div>
              <h2 style={{ fontSize: 26, marginTop: 14, marginBottom: 8 }}>{title}</h2>
              <p style={{ lineHeight: 1.7, color: '#4d4d48' }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
