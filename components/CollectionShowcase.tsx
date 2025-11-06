"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { collections } from "@/lib/products";

export default function CollectionShowcase() {
  return (
    <section id="bo-suu-tap" className="bg-slate-950 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
              Bộ sưu tập
            </span>
            <h2 className="mt-4 text-3xl font-display font-semibold text-white md:text-4xl">
              Nguồn cảm hứng của từng bộ sưu tập
            </h2>
          </div>
          <p className="max-w-xl text-sm text-white/60">
            Khám phá câu chuyện đằng sau mỗi thiết kế, nơi chúng tôi hòa quyện cảm hứng từ thiên nhiên,
            nhịp sống đô thị và di sản thủ công.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.03] shadow-xl shadow-black/40"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Sandaluxe</p>
                <h3 className="mt-2 text-2xl font-semibold">{collection.title}</h3>
                <p className="mt-3 text-sm text-white/70">{collection.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
