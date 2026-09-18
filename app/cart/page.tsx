import Link from "next/link";
import { cartItems } from "@/lib/products";

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 8 : 0;
  const total = subtotal + shipping;

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8a4d0d]">Cart</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
          Your Defiant STEM box selection
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {cartItems.map(({ product, quantity }) => (
            <div key={product.slug} className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
              <img src={product.image} alt={product.name} className="h-28 w-28 rounded-2xl object-cover" />
              <div className="flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">{product.name}</h2>
                    <p className="text-sm text-slate-500">{product.age}</p>
                  </div>
                  <p className="text-lg font-bold text-slate-900">${product.price * quantity}</p>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                  <span>Qty: {quantity}</span>
                  <button className="font-semibold text-slate-700 hover:text-slate-900">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Order summary</h2>
          <div className="mt-6 space-y-4 text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-4 text-lg font-bold text-slate-900">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <button className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#0f172a] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1e293b]">
            Checkout
          </button>
          <Link
            href="/shop"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}
