import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Grow',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$6000', '2': '' },
    description: 'Continuous Technical Content',
    features: [
      '4 blog posts per month',
      'Keyword research through SEO tools, SME input, and community analysis',
      'Images, system diagrams, and code snippets',
      'Editing',
      'Social media collateral',
      'Link building',
    ],
    featured: false,
    highlighted: false,
    cta: 'Book a call',
  },
  {
    name: 'Grow & Scale',
    id: 'tier-2',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': 'Custom', '2': '$27000' },
    description: 'A custom plan to scale your content output',
    features: [
      '5+ blog posts per month',
      'Technical ebooks',
      'Same as included in Grow',
    ],
    featured: false,
    highlighted: false,
    cta: 'Book a call',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '18be633e-9bdf-48ab-a2d2-dc85578c0b34',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
];
