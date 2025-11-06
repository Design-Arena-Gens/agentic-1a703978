"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/products";

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            Khách hàng nói gì
          </span>
          <h2 className="mt-4 text-3xl font-display font-semibold text-white md:text-4xl">
            Những bước chân yêu Sandaluxe
          </h2>
          <p className="mt-4 text-sm text-white/60">
            Chúng tôi tự hào khi được đồng hành cùng hàng chục ngàn khách hàng trên hành trình phát triển
            phong cách cá nhân.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative flex flex-col gap-5 rounded-[2.4rem] border border-white/10 bg-white/[0.03] p-8 shadow-lg shadow-black/40"
            >
              <blockquote className="text-base text-white/70">{testimonial.quote}</blockquote>
              <figcaption className="mt-auto flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">{testimonial.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
