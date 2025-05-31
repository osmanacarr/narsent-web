export default function ContactPage() {
  return (
    <main className="p-12">
      <h1 className="text-4xl font-bold mb-4">📞 İletişim</h1>
      <form className="grid gap-4 max-w-lg">
        <input placeholder="Ad Soyad" className="p-2 rounded bg-gray-800 text-white" />
        <input placeholder="E-posta" className="p-2 rounded bg-gray-800 text-white" />
        <textarea placeholder="Mesajınız" className="rounded p-2 min-h-[100px] bg-gray-800 text-white"></textarea>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">Gönder</button>
      </form>
    </main>
  );
}