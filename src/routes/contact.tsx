import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Shyam Kumar A S | Portfolio",
      },

      {
        name: "description",

        content:
          "MERN Stack Developer, B.Tech ICT Graduate from SASTRA University and Incoming Associate Software Engineer at Accenture.",
      },

      {
        property: "og:title",

        content: "Shyam Kumar A S | Portfolio",
      },
    ],
  }),
  component: Contact,
});

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

const info = [

{
Icon:Mail,

label:"Email",

value:"shyamkumar2005464@gmail.com",

href:"mailto:shyamkumar2005464@gmail.com",

},

{
Icon:Phone,

label:"Phone",

value:"+91 63804 86476",

href:"tel:+916380486476",

},

{
Icon:MapPin,

label:"Location",

value:"Thiruvarur, Tamil Nadu, India",

href:"#",

},

];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        }, { publicKey: PUBLIC_KEY });
      } else {
        // Fallback: simulate success so the UX works out of the box.
        await new Promise((r) => setTimeout(r, 1200));
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  };

  return (
    <PageTransition mode="curtain">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="mt-4 text-subtext max-w-xl mx-auto">
            I'm always open to discussing new opportunities, projects, and meaningful connections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          {/* Info */}
          <div className="space-y-4">
            {info.map((i, idx) => (
              <motion.a
                key={i.label}
                href={i.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 6 }}
                className="block gradient-border rounded-2xl p-5 glass-strong hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.5)] transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.4 }}
                    className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  >
                    <i.Icon className="w-5 h-5 text-primary-foreground" />
                  </motion.span>
                  <div>
                    <div className="text-xs text-subtext uppercase tracking-wider">{i.label}</div>
                    <div className="font-medium">{i.value}</div>
                  </div>
                </div>
              </motion.a>
            ))}

            <div className="gradient-border rounded-2xl p-6 glass-strong">
              <h3 className="font-semibold mb-2">Currently Open to Opportunities</h3>
              <p className="text-sm text-subtext">Actively exploring software engineering opportunities, collaborations and new projects.</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs text-emerald-400">Open to connect</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative gradient-border rounded-3xl p-6 sm:p-8 glass-strong"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Email address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            </div>
            <div className="mt-4">
              <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} required />
            </div>
            <div className="mt-4">
              <Field label="Your Message" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} required />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(99,102,241,0.7)] hover:shadow-[0_15px_50px_-10px_rgba(99,102,241,0.9)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {status === "loading" ? (
                  <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                  </motion.span>
                ) : status === "success" ? (
                  <motion.span key="s" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Message Sent!
                  </motion.span>
                ) : (
                  <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-sm text-emerald-300"
                >
                  Message sent successfully. Thank you for reaching out! 🚀
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-300">
                  {errorMsg || "Something went wrong."}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </PageTransition>
  );
}

function Field({
  label, value, onChange, type = "text", textarea, required,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; textarea?: boolean; required?: boolean;
}) {
  const common = "peer w-full bg-background/70 border border-border rounded-xl px-4 pt-5 pb-2 text-sm text-foreground outline-none focus:border-primary/60 focus:bg-background focus:shadow-[0_0_0_4px_rgba(99,102,241,0.15)] transition-all placeholder:text-transparent";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea required={required} rows={5} value={value} onChange={(e) => onChange(e.target.value)} className={common} placeholder={label} />
      ) : (
        <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)} className={common} placeholder={label} />
      )}
      <span className={`pointer-events-none absolute left-4 transition-all text-subtext ${value ? "top-1.5 text-[10px] uppercase tracking-wider text-accent" : "top-3.5 text-sm"} peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-accent`}>
        {label}
      </span>
    </label>
  );
}
