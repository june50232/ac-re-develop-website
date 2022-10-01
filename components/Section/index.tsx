import React from 'react';

interface SectionProps {
  children: any;
  classname?: string;
}

export default function Section({
  children,
  classname,
  ...props
}: SectionProps) {
  return (
    <section
      className={['lg:flex w-screen hidden h-screen', classname].join(' ')}
      {...props}
    >
      {children}
    </section>
  );
}
