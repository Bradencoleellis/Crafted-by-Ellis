import { ReactNode } from 'react';

interface CardProps {
  icon?: string | ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function Card({ icon, title, description, children }: CardProps) {
  return (
    <div className="bg-[#F9F9F9] dark:bg-[#1A1A1A] border border-[#EEEEEE] dark:border-[#333333] rounded-lg p-8 hover:border-[#FF8400] dark:hover:border-[#FF8400] transition">
      {icon && (
        <div className="text-4xl mb-4">
          {typeof icon === 'string' ? icon : icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-[#1A1A1A] dark:text-white mb-3">
        {title}
      </h3>
      
      <p className="text-[#666666] dark:text-[#CCCCCC] text-sm leading-relaxed mb-4">
        {description}
      </p>

      {children}
    </div>
  );
}
