export default function AdminPage() {
  return (
    <main style={{ background: '#f3f3f0', minHeight: '100vh', padding: 32, color: '#141414' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#676761' }}>Admin</div>
            <h1 style={{ fontSize: 42, marginTop: 8, marginBottom: 0 }}>Dashboard</h1>
          </div>
          <button style={{ borderRadius: 999, border: '1px solid #d9d7d2', background: '#fff', padding: '12px 20px' }}>
            Export clients
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: 18 }}>
          {[
            ['Clients', '1,284'],
            ['Active passes', '412'],
            ['Upcoming classes', '26'],
            ['Sales', '₽1.24M'],
          ].map(([label, value]) => (
            <div key={label} style={{ background: '#fff', border: '1px solid #dfe0dc', borderRadius: 24, padding: 20 }}>
              <div style={{ color: '#66645f', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</div>
              <div style={{ marginTop: 12, fontSize: 36, fontWeight: 700 }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 18 }}>
          <div style={{ background: '#fff', border: '1px solid #dfe0dc', borderRadius: 24, padding: 24 }}>
            <h2 style={{ fontSize: 24 }}>Schedule</h2>
            <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
              {['Power Flow', 'Strength Lab', 'Mobility Reset'].map((item, index) => (
                <div key={item} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 14px', borderRadius: 14, background: '#f5f5f2' }}>
                  <span>{item}</span>
                  <span style={{ color: '#66645f' }}>{['Tue 18:00', 'Wed 08:30', 'Thu 12:15'][index]}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #dfe0dc', borderRadius: 24, padding: 24 }}>
            <h2 style={{ fontSize: 24 }}>Quick actions</h2>
            <div style={{ display: 'grid', gap: 14, marginTop: 16 }}>
              {['Add subscription', 'Add trainer', 'Create class', 'Create promotion'].map((action) => (
                <button key={action} style={{ background: '#141414', color: '#fff', borderRadius: 999, border: 'none', padding: '12px 16px', textAlign: 'left' }}>{action}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
