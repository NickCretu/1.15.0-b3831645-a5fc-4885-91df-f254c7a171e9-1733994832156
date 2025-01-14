export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Company',
    links: [
      { href: '/', title: 'Home' },
      { href: '/pricing', title: 'Pricing' },
      { href: '/all-articles', title: 'Blog' },
      { href: '/all-articles', title: 'Blog' },
    ],
  },
  { columnName: 'Product', links: [] },
  { columnName: 'Docs', links: [] },
  { columnName: 'Support', links: [] },
];
