import { useState } from "react";
import {
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import { SOCIAL_LINKS } from "@/lib/constants";

/* ================= CUSTOM ICONS ================= */

const TwitterIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
  </svg>
);

/* ================= SOCIAL DATA ================= */

const SOCIALS = [
  {
    label: "GitHub",
    handle: "@Incognitoanshh",
    href: SOCIAL_LINKS.github,
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "amritanshu1403",
    href: SOCIAL_LINKS.linkedin,
    icon: "linkedin",
  },
  {
    label: "Twitter / X",
    handle: "@_AmritAns7u",
    href: SOCIAL_LINKS.twitter,
    icon: "twitter",
  },
  {
    label: "Instagram",
    handle: "@annshh.x_",
    href: SOCIAL_LINKS.instagram,
    icon: "instagram",
  },
];

/* ================= ICON SWITCH ================= */

function SocialIcon({ type }: { type: string }) {
  if (type === "github") return <Github size={15} />;
  if (type === "linkedin") return <Linkedin size={15} />;
  if (type === "twitter") return <TwitterIcon size={15} />;
  if (type === "instagram") return <InstagramIcon size={15} />;
  return null;
}

/* ================= MAIN COMPONENT ================= */

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      "Portfolio Contact from " + form.name
    );
    const body = encodeURIComponent(
      "Hi Amritanshu,\n\n" +
        form.message +
        "\n\n— " +
        form.name +
        "\n" +
        form.email
    );

    window.location.href =
      "mailto:" +
      SOCIAL_LINKS.email +
      "?subject=" +
      subject +
      "&body=" +
      body;
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
      {/* HEADER */}
      <SectionWrapper>
        <div className="mb-16">
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">
            04 / Contact
          </span>

          <h2 className="font-display text-5xl md:text-7xl text-white mt-2 tracking-wider">
            LET'S TALK
          </h2>

          <div className="w-20 h-[1px] bg-gradient-to-r from-cyan to-transparent mt-4" />
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <SectionWrapper>
            <p className="text-text-secondary text-sm max-w-md">
              I am actively looking for opportunities in Full Stack &
              Cloud. Let’s connect.
            </p>
          </SectionWrapper>

          {/* EMAIL COPY */}
          <SectionWrapper delay={100}>
            <div className="glass border border-cyan/10 rounded-xl p-5">
              <p className="font-mono text-[10px] text-text-muted uppercase mb-2">
                // Email
              </p>

              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm break-all">
                  {SOCIAL_LINKS.email}
                </span>

                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 text-xs text-cyan border px-3 py-1 rounded hover:bg-cyan/10"
                >
                  {copied ? (
                    <>
                      <Check size={12} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </SectionWrapper>

          {/* SOCIAL LINKS */}
          <SectionWrapper delay={150}>
            <div className="space-y-3">
              {SOCIALS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass border rounded-xl p-4 hover:border-cyan transition"
                >
                  <div className="w-9 h-9 flex items-center justify-center border rounded-lg group-hover:bg-cyan/10">
                    <SocialIcon type={item.icon} />
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.handle}
                    </p>
                  </div>

                  <ExternalLink size={12} className="ml-auto" />
                </a>
              ))}
            </div>
          </SectionWrapper>
        </div>

        {/* RIGHT SIDE FORM */}
        <SectionWrapper delay={200}>
          <div className="glass border border-cyan/10 rounded-xl p-8">
            <p className="text-xs text-cyan mb-6">// Message</p>

            <div className="space-y-4">
              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full bg-transparent border px-4 py-3 rounded"
              />

              <input
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full bg-transparent border px-4 py-3 rounded"
              />

              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="w-full bg-transparent border px-4 py-3 rounded"
              />

              <button
                onClick={handleSubmit}
                disabled={
                  !form.name || !form.email || !form.message
                }
                className="w-full py-3 border border-cyan text-cyan hover:bg-cyan hover:text-black transition disabled:opacity-40"
              >
                <Send size={14} /> Send Message
              </button>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}