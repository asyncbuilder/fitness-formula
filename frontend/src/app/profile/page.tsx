export default function ProfilePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f5f5f1', padding: 32, color: '#171717' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ background: '#fff', border: '1px solid #dbd9d4', borderRadius: 28, padding: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#676761' }}>Profile</div>
              <h1 style={{ fontSize: 36, marginTop: 8 }}>Anna Petrovna</h1>
            </div>
            <button style={{ border: '1px solid #d5d3cf', borderRadius: 999, padding: '12px 18px', background: '#f4f4f2' }}>Edit</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 18, marginTop: 28 }}>
            {[
              ['Email', 'member@fitnessformula.local'],
              ['Phone', '+7 (900) 100-20-30'],
              ['Status', 'Active'],
              ['Membership', 'Unlimited 8'],
            ].map(([label, value]) => (
              <div key={label} style={{ background: '#f6f6f3', borderRadius: 18, padding: 18 }}>
                <div style={{ color: '#6a6965', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
                <div style={{ marginTop: 8, fontSize: 18, fontWeight: 600 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
