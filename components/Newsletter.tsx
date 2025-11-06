"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="lien-he" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24">
      <div className="mx-auto max-w-4xl rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl shadow-black/40 backdrop-blur">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            Đăng ký
          </span>
          <h2 className="mt-4 text-3xl font-display font-semibold text-white md:text-4xl">
            Nhận ưu đãi & ra mắt độc quyền
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/65">
            Đăng ký email để nhận thông tin về bộ sưu tập mới, ưu đãi thành viên và những sự kiện cộng đồng
            do Sandaluxe tổ chức.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-3"
          >
            <input
              type="email"
              required
              placeholder="Email của bạn"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white/80 placeholder:text-white/40 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-600/40"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-400"
            >
              Đăng ký ngay
            </button>
          </form>
          {status === "success" ? (
            <p className="mt-4 text-sm font-medium text-brand-200">
              Cảm ơn bạn! Chúng tôi sẽ gửi thông tin mới nhất tới email của bạn.
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
