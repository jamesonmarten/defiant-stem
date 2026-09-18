import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="mb-8 flex items-center gap-3 text-sm font-medium text-slate-600">
        <Link href="/shop" className="hover:text-slate-900">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <img src={product.image} alt={product.name} className="h-[540px] w-full object-cover" />
        </div>

        <div>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700">
            {product.category}
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">{product.age}</p>
          <div className="mt-6 text-3xl font-black text-slate-900">${product.price}</div>
          <p className="mt-5 text-lg leading-8 text-slate-600">{product.longDescription}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1e293b]">
              Add to cart
            </button>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Continue shopping
            </Link>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-bold text-slate-900">What&apos;s inside</h2>
            <ul className="mt-4 space-y-3 text-base text-slate-600">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#f59e0b]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
