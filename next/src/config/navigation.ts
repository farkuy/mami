export type NavItem = {
  label: string;
  to: string;
};

export const navItems: NavItem[] = [
  { label: 'Экскурсии', to: '/tours' },
  { label: 'Услуги', to: '/about' },
  { label: 'Отзывы', to: '/reviews' },
  { label: 'Оплата', to: '/payment' },
];
