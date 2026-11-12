
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Architecture",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nProject details:\n${form.message}`
    );

    window.location.href =
      `mailto:hello@archastu.com?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "mt-2 w-full border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-[#69785b]";

  return (
    <main>
      <section className="bg-[#e9ebe3] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#69785b]">
            Contact / Let's Connect
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-5xl leading-tight sm:text-7xl">
            Let's talk about your next project.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#686b61]">
            Tell us about your vision, your space and what you would
            like to create.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#69785b]">
            Start a Conversation
          </p>
          <h2 className="font-display mt-4 text-4xl">
            Tell us about your idea.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#73746c]">
            Share a few details about your requirements. We can then
            discuss the next steps for your project.
          </p>

          <div className="mt-10 border-t border-black/15 pt-5">
            <p className="text-xs uppercase tracking-widest text-[#73746c]">
              Email
            </p>
            <a
              href="mailto:hello@archastu.com"
              className="mt-2 inline-block text-lg hover:text-[#69785b]"
            >
              hello@archastu.com
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Your name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label htmlFor="service" className="text-sm font-medium">
              Service you're interested in
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={inputClass}
            >
              <option>Architecture</option>
              <option>Interior Design</option>
              <option>Construction</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} min-h-36 resize-y`}
              placeholder="Your ideas, requirements and timeline..."
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#30382b] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#59664a] sm:w-auto"
          >
            Prepare Email ↗
          </button>

          <p className="text-xs leading-6 text-[#85867d]">
            This demo opens your default email application. It does not
            save or send form data to a server.
          </p>
        </form>
      </section>
    </main>
  );
}
