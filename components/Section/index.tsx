import React from 'react';

type SectionProps = any;

export default function Section({
  children,
  classname,
  ...props
}: SectionProps) {
  return (
    <section
      className={[
        'lg:flex w-screen hidden h-screen overflow-hidden relative',
        classname,
      ].join(' ')}
      {...props}
    >
      {children}
    </section>
  );
}
