export default function ShippingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">Shipping Information</h1>

      <p className="text-gray-600 mb-6">
        We ship across Indonesia with trusted courier partners.
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Processing time: 1–2 business days</li>
        <li>Delivery time: 2–5 business days</li>
        <li>Shipping cost calculated at checkout</li>
      </ul>
    </main>
  );
}