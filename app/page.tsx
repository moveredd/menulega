'use client';
export default function MenuPage() {
  return (
    <div className="fixed inset-0 bg-gray-100">
      <iframe
        src="/menu.pdf"
        className="w-full h-full"
        title="Menu PDF"
        style={{ border: 'none' }}
      />
    </div>
  );
}
