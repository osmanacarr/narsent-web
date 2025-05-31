import Hero from "@/components/Hero";
import DemoChart from "@/components/DemoChart";
import ChatBot from "@/components/ChatBot";
import ROICalculator from "@/components/ROICalculator";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <DemoChart />
      <ROICalculator />
      <ChatBot />
    </main>
  );
}