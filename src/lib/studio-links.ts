// Links for the /studio offer page. Fill a Stripe Payment Link per SKU when
// it exists; an empty string makes the card's pay button fall back to the
// booking link with the label "Pay after the call", so the page never
// ships a dead button.

export const BOOKING_LINK = "https://cal.com/vladan/video-15";

export const STRIPE_LINKS = {
  assistant: "",
  receptionist: "",
  website: "",
  hardening: "",
} satisfies Record<string, string>;

export type StudioSku = keyof typeof STRIPE_LINKS;

export function payLink(sku: StudioSku): { href: string; label: string } {
  const href = STRIPE_LINKS[sku];
  if (href) return { href, label: "Pay and start" };
  return { href: BOOKING_LINK, label: "Pay after the call" };
}
