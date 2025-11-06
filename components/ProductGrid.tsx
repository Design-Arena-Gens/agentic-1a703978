"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { Sparkle } from "./icons";
import classNames from "classnames";

type ProductGridProps = {
  products: Product[];
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.12
    }
  })
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section id="san-pham" className="bg-slate-950 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            <Sparkle className="h-3 w-3 text-brand-300" />
            Sản phẩm nổi bật
          </span>
          <h2 className="mt-4 text-3xl font-display font-semibold text-white md:text-4xl">
            Bộ sưu tập được yêu thích nhất
          </h2>
          <p className="mt-4 text-base text-white/65">
            Chúng tôi tạo ra từng đôi dép với sự tỉ mỉ trong thiết kế và vật liệu, giúp bạn tự tin trên từng
            bước đi.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-lg shadow-black/40 transition hover:-translate-y-2 hover:border-brand-400/40 hover:bg-white/[0.05]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute left-4 top-4 flex flex-col gap-2">
                  {product.bestSeller ? (
                    <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-brand-500/40">
                      Best Seller
                    </span>
                  ) : null}
                  {product.eco ? (
                    <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-emerald-950 shadow-lg shadow-emerald-500/40">
                      Eco Friendly
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="mt-5 flex flex-1 flex-col gap-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <span className="text-sm font-medium text-brand-200">
                      {product.price.toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/60">{product.description}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/65"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/40">
                    <p>{product.tags.join(" • ")}</p>
                    <p>
                      <span className="text-brand-200">★</span> {product.rating}
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <button
                    className={classNames(
                      "w-full rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/80 transition",
                      "hover:border-brand-400/80 hover:bg-brand-500/80 hover:text-white"
                    )}
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
