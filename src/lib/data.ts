import type { LucideIcon } from 'lucide-react';
import { Wrench, Zap, Paintbrush, Car, Utensils, Sparkles, User, Construction, Shirt } from 'lucide-react';
import type { placeholderImages } from '@/lib/placeholder-images';

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export const skills: Skill[] = [
  { name: 'Plumbing', icon: Wrench },
  { name: 'Electrical', icon: Zap },
  { name: 'Painting', icon: Paintbrush },
  { name: 'Carpentry', icon: Construction },
  { name: 'Driving', icon: Car },
  { name: 'Cooking', icon: Utensils },
  { name: 'Cleaning', icon: Sparkles },
  { name: 'Laundry', icon: Shirt },
];

export interface Worker {
  id: string;
  name: string;
  avatarUrl: (typeof placeholderImages)[number]['imageUrl'];
  rating: number;
  reviews: number;
  distance: number; // in km
  skills: string[];
  phone: string;
  voiceIntroUrl?: string;
}

export const workers: Worker[] = [
    {
        id: '1',
        name: 'Rajesh Kumar',
        avatarUrl: 'https://picsum.photos/seed/w1/100/100',
        rating: 4.8,
        reviews: 124,
        distance: 0.5,
        skills: ['Plumbing', 'Electrical'],
        phone: '919876543210',
    },
    {
        id: '2',
        name: 'Sita Devi',
        avatarUrl: 'https://picsum.photos/seed/w2/100/100',
        rating: 4.9,
        reviews: 88,
        distance: 0.8,
        skills: ['Cooking', 'Cleaning'],
        phone: '919876543211',
    },
    {
        id: '3',
        name: 'Amit Singh',
        avatarUrl: 'https://picsum.photos/seed/w3/100/100',
        rating: 4.5,
        reviews: 75,
        distance: 1.2,
        skills: ['Painting', 'Carpentry'],
        phone: '919876543212',
    },
    {
        id: '4',
        name: 'Priya Sharma',
        avatarUrl: 'https://picsum.photos/seed/w4/100/100',
        rating: 4.7,
        reviews: 92,
        distance: 1.5,
        skills: ['Laundry', 'Cleaning'],
        phone: '919876543213',
    },
    {
        id: '5',
        name: 'Vikram Yadav',
        avatarUrl: 'https://picsum.photos/seed/w5/100/100',
        rating: 4.6,
        reviews: 65,
        distance: 2.1,
        skills: ['Driving', 'Electrical'],
        phone: '919876543214',
    },
];
