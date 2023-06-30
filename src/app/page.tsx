'use client';
import SelectCountryCode from '@/components/SelectCountryCode';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-cen ter p-24 bg-darkGray">
      <SelectCountryCode />
    </main>
  );
}
