
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
