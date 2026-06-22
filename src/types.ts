/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  englishTitle: string;
  icon: string; // Lucide icon identifier
  description: string;
  outcomes: string[];
  metrics: string;
  processSteps: { title: string; desc: string }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  metrics: string;
  metricLabel: string;
  description: string;
  image: string;
  technologies: string[];
  beforeAfter?: { before: string; after: string };
}

export interface Course {
  id: string;
  title: string;
  englishTitle: string;
  tag: string;
  duration: string;
  chapters: number;
  rating: number;
  originalPrice: number;
  salePrice: number;
  features: string[];
  description: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  growthMetric: string;
  avatar: string;
}
