
import React from 'react';
import { Home, Key, UserCheck, Briefcase, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Property, Service } from './types';

export const COLORS = {
  primary: '#0F172A', // Deep Navy
  secondary: '#166534', // Forest Green
  accent: '#B45309', // Warm Amber/Gold
  background: '#F8FAFC',
};

export const CONTACT_INFO = {
  phone: '+964 07803091767',
  Telegram: 'https://t.me/Ahmadd8787',
  address: ' مكتب باب الحارة للعقار , بغداد حي الجهاد مقابل جامع النور',
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'بيع العقارات',
    description: 'نساعدك في تسويق عقارك بأفضل الطرق للوصول إلى المشتري المناسب وبأعلى سعر.',
    iconName: 'Home',
  },
  {
    id: '2',
    title: 'شراء العقارات',
    description: 'نبحث لك عن العقار المثالي الذي يلبي تطلعاتك وميزانيتك في أفضل المواقع.',
    iconName: 'Key',
  },
  {
    id: '3',
    title: 'تأجير المنازل والشقق',
    description: 'حلول تأجيرية متكاملة تضمن حقوق المالك وراحة المستأجر بمهنية عالية.',
    iconName: 'UserCheck',
  },
  {
    id: '4',
    title: 'استشارات عقارية',
    description: 'دراسات سوقية وتقييمات دقيقة لمساعدتك في اتخاذ القرار الاستثماري الصحيح.',
    iconName: 'Briefcase',
  },
];

export const PROPERTIES: Property[] = [
  {
    id: 'p1',
    title: 'فيلا فاخرة مودرن',
    type: 'sale',
    location: 'حي الملقا، الرياض',
    price: '3,500,000 ريال',
    bedrooms: 5,
    bathrooms: 6,
    area: '450 م²',
    image: 'https://picsum.photos/seed/villa1/800/600',
    tags: ['جديد', 'مسبح'],
  },
  {
    id: 'p2',
    title: 'شقة فاخرة للإيجار',
    type: 'rent',
    location: 'حي النرجس، الرياض',
    price: '65,000 ريال / سنة',
    bedrooms: 3,
    bathrooms: 2,
    area: '160 م²',
    image: 'https://picsum.photos/seed/apartment1/800/600',
    tags: ['مؤثث جزئياً'],
  },
  {
    id: 'p3',
    title: 'أرض سكنية تجارية',
    type: 'sale',
    location: 'حي الياسمين، الرياض',
    price: '2,800,000 ريال',
    bedrooms: 0,
    bathrooms: 0,
    area: '900 م²',
    image: 'https://picsum.photos/seed/land1/800/600',
    tags: ['فرصة استثمارية'],
  },
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'Home': return <Home className={className} />;
    case 'Key': return <Key className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'Phone': return <Phone className={className} />;
    case 'MessageCircle': return <MessageCircle className={className} />;
    default: return <Home className={className} />;
  }
};
