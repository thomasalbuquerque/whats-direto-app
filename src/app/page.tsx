'use client';
import Select from 'react-select';
import countryEmoji from 'country-emoji';
const countriesData = require('country-codes-list');

const { flag } = countryEmoji;

const countryCodeAndCalling = countriesData.customList(
  'countryCode',
  '+{countryCallingCode}'
);

let arrayC: {
  countryCode: string;
  countryCalling: string;
}[] = [];
let countriesCodes: string[] = Object.keys(countryCodeAndCalling);
let countriesCalling: string[] = Object.values(countryCodeAndCalling);
for (let i = 0; i < countriesCodes.length; i++) {
  arrayC.push({
    countryCode: countriesCodes[i],
    countryCalling: countriesCalling[i],
  });
}
const filteredArrayC = arrayC.filter((a) => flag(a.countryCode) !== undefined);
const sorteredArrayC = filteredArrayC.sort((a, b) => {
  const callingA = parseInt(a.countryCalling.replace('+', ''));
  const callingB = parseInt(b.countryCalling.replace('+', ''));
  return callingA - callingB;
});

const options = sorteredArrayC.map((country) => ({
  value: country.countryCalling,
  label: <div>{`${flag(country.countryCode)} ${country.countryCalling}`}</div>,
  countryCode: country.countryCode,
}));

const defaultInitialCountry = options.filter((o) => o.countryCode === 'BR');

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-cen ter p-24 bg-darkGray">
      <Select
        options={options}
        className="country-selector"
        defaultValue={defaultInitialCountry}
      />
    </main>
  );
}
