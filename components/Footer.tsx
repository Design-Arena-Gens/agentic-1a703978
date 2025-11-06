import Link from "next/link";

const footerLinks = [
  {
    title: "Sandaluxe",
    links: [
      { label: "Về chúng tôi", href: "#" },
      { label: "Tuyển dụng", href: "#" },
      { label: "Truyền thông", href: "#" }
    ]
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Chính sách đổi trả", href: "#" },
      { label: "Chăm sóc khách hàng", href: "#" },
      { label: "Tra cứu đơn hàng", href: "#" }
    ]
  },
  {
    title: "Kết nối",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Tiktok", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-semibold uppercase tracking-[0.28em] text-white">
              Sandaluxe
            </Link>
            <p className="text-sm text-white/55">
              Chúng tôi chế tác những đôi dép bền vững, sang trọng, giúp bạn tự tin sải bước mỗi ngày.
            </p>
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">
              Made in Việt Nam
            </div>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white/80">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/55">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.3em] text-white/30">
          © {new Date().getFullYear()} Sandaluxe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
