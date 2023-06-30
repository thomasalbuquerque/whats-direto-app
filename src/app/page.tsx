'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import countryEmoji from 'country-emoji';
const countriesData = require('country-codes-list');

const { flag } = countryEmoji;

const countryCodeAndCalling = countriesData.customList(
  'countryCode',
  '+{countryCallingCode}'
);

interface CountryOption {
  value: string;
  label: any;
}

let options: CountryOption[];
let array: {
  id: number;
  countryCode: string;
  countryCalling: string;
}[] = [
  {
    id: -1,
    countryCode: `AA`,
    countryCalling: `+00`,
  },
];
let countriesKeys: string[] = Object.keys(countryCodeAndCalling);
let countriesCalling: string[] = Object.values(countryCodeAndCalling);
for (let i = 0; i < countriesKeys.length; i++) {
  array.push({
    id: i,
    countryCode: countriesKeys[i],
    countryCalling: countriesCalling[i],
  });
}
const array2 = array.filter((a) => flag(a.countryCode) !== undefined);
const flag211 = flag('SS');
array2.sort((a, b) => {
  const callingA = parseInt(a.countryCalling.replace('+', ''));
  const callingB = parseInt(b.countryCalling.replace('+', ''));
  return callingA - callingB;
});

options = array2.map((country) => ({
  value: country.countryCalling,
  label: (
    <div>{`${flag(country.countryCode)} ${country.countryCalling} ${
      country.countryCode
    }`}</div>
  ),
}));

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    console.log('array2');
    console.log(array2);
    console.log('flag211');
    console.log(flag211);
    console.log('countryCodeAndCalling');
    console.log(countryCodeAndCalling);
    console.log('flag(`US`)');
    console.log(flag(`US`));

    console.log('countriesData');
    console.log(countriesData);
    console.log('options');
    console.log(options);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-cen ter p-24 bg-darkGray">
      {/* <div>{Object.keys(countries).join(', ')}</div> */}
      <div>{flag(`US`)}</div>
      <Select
        options={options}
        className="country-selector"
        defaultValue={selectedOption}
      />
    </main>
  );
}
