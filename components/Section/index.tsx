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
        'md:flex w-screen hidden overflow-hidden relative',
        classname,
      ].join(' ')}
      {...props}
    >
      {children}
    </section>
  );
}
