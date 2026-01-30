export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium">Are your products safe for daily use?</h3>
          <p className="text-gray-600 text-sm">
            Yes. All our products are dermatologically tested and safe for daily use.
          </p>
        </div>

        <div>
          <h3 className="font-medium">Are your products cruelty-free?</h3>
          <p className="text-gray-600 text-sm">
            Yes. We do not test on animals.
          </p>
        </div>

        <div>
          <h3 className="font-medium">How can I track my order?</h3>
          <p className="text-gray-600 text-sm">
            You will receive a tracking number via email after your order is shipped.
          </p>
        </div>
      </div>
    </main>
  );
}
