export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">How is x0platform so affordable?</h3>
          <p>
            We use efficient infrastructure, automation, and simplified offerings to keep costs ultra-low. You only pay for what you need, with no hidden charges.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Do I need to know how to code?</h3>
          <p>
            No! x0platform is 100% no-code. If you can fill out a form, you can launch your business online.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Can I upgrade my plan later?</h3>
          <p>
            Absolutely. You can upgrade at any time and only pay the difference.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">How do I get support?</h3>
          <p>
            Email our support team at <a href="mailto:hi@x0platform.com" className="text-primary underline">hi@x0platform.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}