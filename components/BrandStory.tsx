"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sellingPoints } from "@/lib/products";

export default function BrandStory() {
  return (
    <section id="cau-chuyen" className="bg-slate-900 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.1fr_1fr] md:px-6 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            câu chuyện
          </span>
          <h2 className="text-3xl font-display font-semibold text-white md:text-4xl">
            Từ đôi dép thủ công ở Hội An đến thương hiệu toàn cầu
          </h2>
          <p className="text-base leading-relaxed text-white/70">
            Sandaluxe được khai sinh tại Hội An, nơi những nghệ nhân da truyền thống gửi gắm sự tinh xảo
            vào từng đường kim mũi chỉ. Chúng tôi kết hợp kỹ nghệ đó với công nghệ mới để mang đến trải nghiệm
            di chuyển nhẹ tênh nhưng vẫn giữ sự bền bỉ và thời trang hiện đại.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {sellingPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:bg-white/[0.08]"
              >
                <span className="text-2xl">{point.icon}</span>
                <h3 className="mt-4 text-base font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm text-white/65">{point.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/40"
        >
          <Image
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80"
            alt="Xưởng chế tác Sandaluxe"
            width={900}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-sm text-white/70 shadow-lg shadow-brand-500/30">
            &ldquo;Mỗi đôi dép là một câu chuyện về sự cân bằng giữa truyền thống và tương lai.&rdquo;
          </div>
        </motion.div>
      </div>
    </section>
  );
}
