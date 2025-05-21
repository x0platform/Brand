import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 pt-32 text-center">
      {/* Logo */}
      <div className="mb-6">
        <Image src="/logo.svg" alt="x0platform" width={340} height={80} priority />
      </div>
      {/* Tagline */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary">
        Online, On Budget, On Point.
      </h1>
      <p className="mt-4 max-w-xl mx-auto text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
        Zero configuration. Zero monthly fee. Launch your business bio, portfolio, or catalog in minutes.
      </p>
      <a
        href="#pricing"
        className="mt-8 inline-block px-8 py-3 rounded-lg bg-primary text-white font-bold text-lg shadow hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900 transition"
      >
        See Pricing
      </a>
    </main>
  );
}