import { COMMUNITY_PRICE, MEMBERSHIP_INCLUDES } from '@/constants';

export const metadata = {
  title: 'Pricing',
  description: `$${COMMUNITY_PRICE}/month. ${MEMBERSHIP_INCLUDES} Cancel anytime. One membership for all courses and community.`,
};

export default function PricingLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
