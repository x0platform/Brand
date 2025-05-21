export default function Pricing() {
  return (
    <section id="pricing" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Pricing</h2>
      <div className="space-y-6">
        <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Starter Bio</h3>
          <p className="mb-2">Perfect for individuals, freelancers, and solopreneurs.</p>
          <div className="text-2xl font-bold mb-2">$5 / year</div>
          <ul className="list-disc list-inside">
            <li>Single-page bio/portfolio</li>
            <li>Custom contact link</li>
            <li>SEO & analytics</li>
          </ul>
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Business Catalog</h3>
          <p className="mb-2">For businesses needing a digital catalog or more advanced portfolio.</p>
          <div className="text-2xl font-bold mb-2">$12 / year</div>
          <ul className="list-disc list-inside">
            <li>Multi-page catalog/portfolio</li>
            <li>Contact forms</li>
            <li>Priority email support</li>
          </ul>
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Lifetime Access</h3>
          <p className="mb-2">One-time investment for a permanent online presence.</p>
          <div className="text-2xl font-bold mb-2">$15 one-time</div>
          <ul className="list-disc list-inside">
            <li>Everything in Business Catalog</li>
            <li>Free upgrades forever</li>
          </ul>
        </div>
      </div>
    </section>
  );
}