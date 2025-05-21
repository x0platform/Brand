export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-4 text-lg">
        Have questions or ready to get started? Email us at <a href="mailto:hi@x0platform.com" className="text-primary underline">hi@x0platform.com</a>
      </p>
      <form className="space-y-4 max-w-xl" action="mailto:hi@x0platform.com" method="POST" encType="text/plain">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full p-3 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-primary text-white font-bold shadow hover:bg-accent transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}