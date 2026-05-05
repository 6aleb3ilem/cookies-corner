import { Product } from '@/data/products';

const NUMERIC_PRICE = /(\d[\d\s.,]*)/;

export function parsePrice(price: string): number | null {
  const match = price.match(NUMERIC_PRICE);
  if (!match) return null;
  const cleaned = match[1].replace(/[\s,]/g, '');
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

export function unitPriceFor(product: Product, qty: number): number | null {
  if (product.tiers && product.tiers.length > 0) {
    const sorted = [...product.tiers].sort((a, b) => a.qty - b.qty);
    const tier = [...sorted].reverse().find((t) => qty >= t.qty) ?? sorted[0];
    const tierPrice = parsePrice(tier.price);
    if (tierPrice == null || tier.qty <= 0) return null;
    return tierPrice / tier.qty;
  }
  return parsePrice(product.price);
}

export function lineTotal(product: Product, qty: number): number | null {
  const unit = unitPriceFor(product, qty);
  if (unit == null) return null;
  return Math.round(unit * qty);
}

export function formatMRU(amount: number): string {
  return `${amount.toLocaleString('en-US')} MRU`;
}
