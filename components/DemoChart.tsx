'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const demoData = [
  { name: "Pzt", tahsilat: 820000 },
  { name: "Sal", tahsilat: 930000 },
  { name: "Çar", tahsilat: 970000 },
  { name: "Per", tahsilat: 880000 },
  { name: "Cum", tahsilat: 1040000 },
];

export default function DemoChart() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">🎮 Demo Simülasyonu</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={demoData}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="tahsilat" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}