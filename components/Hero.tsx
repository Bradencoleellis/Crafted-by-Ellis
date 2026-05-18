import Link from 'next/link';
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  children?: ReactNode;
  backgroundClass?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaHref = '#',
  children,
  backgroundClass = 'bg-[#F0EBE3]',
}: HeroProps) {
  return (
    <section className={`${backgroundClass} py-24 md:py-32 px-4`}>
      <div className="container max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] dark:text-white mb-6">
          {title}
        </h1>
        
        <p className="text-lg md:text-xl text-[#666666] dark:text-[#CCCCCC] mb-8 leading-relaxed">
          {subtitle}
        </p>

        {children}

        {ctaText && (
          <Link href={ctaHref}>
            <button className="bg-[#FF8400] hover:bg-[#E67C00] text-white px-8 py-3 rounded-lg font-semibold transition inline-block">
              {ctaText}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}
