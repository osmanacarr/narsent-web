'use client';
import { useState } from 'react';

export default function ROICalculator() {
  const [customers, setCustomers] = useState(100000);
  const [rate, setRate] = useState(80);

  const extraCollected = (customers * rate * 0.078).toFixed(0);

  return (
    <section className="p-8">
      <h2 className="text-xl font-bold mb-4">📈 ROI Hesaplayıcı</h2>
      <div className="grid gap-4 max-w-md">
        <input type="number" className="p-2 rounded bg-gray-800 text-white" value={customers} onChange={e => setCustomers(+e.target.value)} placeholder="Müşteri sayısı" />
        <input type="number" className="p-2 rounded bg-gray-800 text-white" value={rate} onChange={e => setRate(+e.target.value)} placeholder="Tahsilat oranı %" />
        <div className="text-green-400">🎯 Ek gelir: ₺{extraCollected}</div>
      </div>
    </section>
  );
}