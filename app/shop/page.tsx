import Link from "next/link";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8a4d0d]">Shop</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Defiant STEM kits for every curious learner.
          </h1>
        </div>
        <Link
          href="/cart"
          className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-[#1e293b]"
        >
          View cart
        </Link>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700">
                  {product.category}
                </span>
                <span className="text-lg font-black text-slate-900">${product.price}</span>
              </div>
              <h2 className="mt-4 text-2xl font-black text-slate-900">{product.name}</h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">{product.age}</p>
              <p className="mt-4 text-base leading-7 text-slate-600">{product.description}</p>
              <div className="mt-6 flex gap-3">
                <Link
                  href={`/product/${product.slug}`}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Details
                </Link>
                <Link
                  href={`/product/${product.slug}`}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-[#0f172a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1e293b]"
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
