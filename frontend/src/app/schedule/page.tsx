const classes = [
  { name: 'Power Flow', trainer: 'Elena', date: 'Tue 18:00', spots: 4, type: 'Group' },
  { name: 'Strength Lab', trainer: 'Mikhail', date: 'Wed 08:30', spots: 1, type: 'Group' },
  { name: 'Mobility Reset', trainer: 'Alicia', date: 'Thu 12:15', spots: 7, type: 'Recovery' },
];

export default function SchedulePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f1', padding: 32, color: '#171717' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#66645f' }}>Schedule</div>
            <h1 style={{ fontSize: 42, marginTop: 8 }}>Available classes</h1>
          </div>
          <button style={{ borderRadius: 999, background: '#171717', color: '#fff', border: 'none', padding: '12px 20px' }}>Book a session</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
          {classes.map((item) => (
            <div key={item.name} style={{ background: '#fff', border: '1px solid #dbd9d4', borderRadius: 24, padding: 22 }}>
              <div style={{ color: '#696861', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.type}</div>
              <h2 style={{ marginTop: 12, marginBottom: 8, fontSize: 28 }}>{item.name}</h2>
              <p style={{ margin: 0, color: '#40403c' }}>Trainer: {item.trainer}</p>
              <p style={{ margin: '12px 0 0', color: '#40403c' }}>When: {item.date}</p>
              <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#43413d' }}>Spots left: {item.spots}</span>
                <button style={{ borderRadius: 999, border: '1px solid #d5d3cf', background: '#f5f5f2', padding: '10px 14px' }}>Join</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
