"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-pattern pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(63,130,255,0.25),transparent_55%),radial-gradient(circle_at_bottom,rgba(195,110,46,0.3),transparent_50%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-24 pt-12 md:flex-row md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl space-y-6"
        >
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
            Bộ sưu tập mới
          </span>
          <h1 className="text-4xl font-display font-semibold tracking-tight text-white md:text-6xl">
            Dép thời trang,
            <span className="block text-transparent drop-shadow-lg [background-clip:text] [background-image:linear-gradient(120deg,#3f82ff,#c36e2e)]">
              nhẹ như mây - bền như bạn cần
            </span>
          </h1>
          <p className="text-base leading-relaxed text-white/75 md:text-lg">
            Sandaluxe mang đến trải nghiệm di chuyển êm ái với công nghệ đệm CloudFlow và vật liệu thân
            thiện môi trường. Hoàn hảo cho những ai yêu phong cách tối giản, sống động và bền vững.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#san-pham"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-brand-500/50 transition hover:-translate-y-0.5 hover:bg-sky-100"
            >
              Khám phá sản phẩm
            </Link>
            <Link
              href="#bo-suu-tap"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
            >
              Bộ sưu tập 2024
            </Link>
          </div>
          <dl className="grid gap-4 text-sm text-white/70 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/50">Khách hàng</dt>
              <dd className="text-lg font-semibold text-white">+32.000</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/50">Đánh giá</dt>
              <dd className="text-lg font-semibold text-white">4.9/5</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/50">Vật liệu tái chế</dt>
              <dd className="text-lg font-semibold text-white">70%</dd>
            </div>
          </dl>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative mx-auto flex max-w-md flex-col items-center"
        >
          <div className="relative h-[480px] w-full overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 shadow-2xl shadow-sky-900/60">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800&q=80"
            >
              <source src="https://cdn.coverr.co/videos/coverr-a-stylish-woman-trying-on-shoes-9867/1080p.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="-mt-8 w-full rounded-3xl border border-white/5 bg-slate-900/80 p-6 shadow-2xl shadow-brand-500/30 backdrop-blur">
            <p className="text-sm text-white/70">
              &ldquo;&nbsp;Cảm giác bước đi nhẹ như không mà vẫn giữ được sự sang trọng trong từng chi tiết.&nbsp;&rdquo;
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full border border-white/20 bg-white/10" />
              <div>
                <p className="text-sm font-semibold text-white">Châu An</p>
                <p className="text-xs text-white/50">Fashion Blogger</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
