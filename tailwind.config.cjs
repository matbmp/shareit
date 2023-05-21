import path from 'path';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    './src/**/*.{html,js,svelte,ts}',
  path.join(require.resolve(
    '@skeletonlabs/skeleton'),
    '../**/*.{html,js,svelte,ts}'
  )
],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    ...skeleton(),
  ],

  darkMode: 'class',
}

