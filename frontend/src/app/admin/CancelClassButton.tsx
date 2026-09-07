'use client';

import { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

type CancelState = 'idle' | 'cancelling' | 'cancelled' | 'error';

export default function CancelClassButton({ classId, title }: { classId: string; title: string }) {
  const [state, setState] = useState<CancelState>('idle');

  async function cancelClass() {
    const reason = window.prompt(`Reason for cancelling "${title}" (optional, e.g. trainer is sick):`);
    if (reason === null) {
      return;
    }

    setState('cancelling');
    try {
      const response = await fetch(`${API_URL}/api/admin/classes/${classId}/cancel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: reason.trim() || 'Cancelled by administrator' }),
      });
      if (!response.ok) {
        throw new Error(`API responded with ${response.status}`);
      }
      setState('cancelled');
    } catch {
      setState('error');
    }
  }

  if (state === 'cancelled') {
    return <span style={{ color: '#8a8880', fontSize: 14 }}>Cancelled</span>;
  }

  return (
    <button
      onClick={cancelClass}
      disabled={state === 'cancelling'}
      style={{
        borderRadius: 999,
        border: '1px solid #d9d7d2',
        background: '#fff',
        padding: '8px 16px',
        fontSize: 14,
        color: '#141414',
        cursor: state === 'cancelling' ? 'wait' : 'pointer',
      }}
    >
      {state === 'cancelling' ? 'Cancelling…' : state === 'error' ? 'Retry cancel' : 'Cancel class'}
    </button>
  );
}
