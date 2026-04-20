// Reads Stripe configuration from Vite env vars (prefixed VITE_).
// See .env.example at the repo root.

type EnvMap = Record<string, string | undefined>;

const env = (import.meta as unknown as { env: EnvMap }).env ?? {};

export const STRIPE_CONFIG = {
  publishableKey: env.VITE_STRIPE_PUBLISHABLE_KEY ?? '',
  genericPaymentLink: env.VITE_STRIPE_PAYMENT_LINK ?? '',
  perTierPaymentLinks: {
    '25': env.VITE_STRIPE_PAYMENT_LINK_25 ?? '',
    '50': env.VITE_STRIPE_PAYMENT_LINK_50 ?? '',
    '100': env.VITE_STRIPE_PAYMENT_LINK_100 ?? '',
    '250': env.VITE_STRIPE_PAYMENT_LINK_250 ?? '',
    '500': env.VITE_STRIPE_PAYMENT_LINK_500 ?? '',
  } as Record<string, string>,
};

export const CONTACT = {
  email: env.VITE_CONTACT_EMAIL ?? 'info@chipatagirlsfc.org',
  phone: env.VITE_CONTACT_PHONE ?? '+260 XXX XXX XXX',
  facebook:
    env.VITE_FACEBOOK_URL ??
    'https://www.facebook.com/p/Chipata-Girls-FC-61554761447142/',
};

// Returns the best Stripe Payment Link URL for a given donation amount, or
// an empty string when Stripe has not been configured yet. A tier-specific
// link takes priority; otherwise the generic link is appended with a custom
// amount suggestion so a single link can cover every option.
export function getPaymentLink(amount?: string): string {
  const tierLink = amount ? STRIPE_CONFIG.perTierPaymentLinks[amount] : '';
  if (tierLink) return tierLink;
  return STRIPE_CONFIG.genericPaymentLink;
}

export function isStripeConfigured(): boolean {
  return Boolean(STRIPE_CONFIG.genericPaymentLink) ||
    Object.values(STRIPE_CONFIG.perTierPaymentLinks).some(Boolean);
}
