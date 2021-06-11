import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    /* inter-regular - latin */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: optional;
        src: local(''),
          url('/fonts/inter-v3-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('/fonts/inter-v3-latin-regular.woff') format('woff'), /* Modern Browsers */
          url('/fonts/inter-v3-latin-regular.ttf') format('truetype'); /* Safari, Android, iOS */\
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      /* inter-500 - latin */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: optional;
        src: local(''),
          url('/fonts/inter-v3-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
          url('/fonts/inter-v3-latin-500.woff') format('woff'), /* Modern Browsers */
          url('/fonts/inter-v3-latin-500.ttf') format('truetype'); /* Safari, Android, iOS */
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      /* inter-700 - latin */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: optional;
        src: local(''),
          url('/fonts/inter-v3-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
          url('/fonts/inter-v3-latin-700.woff') format('woff'), /* Modern Browsers */
          url('/fonts/inter-v3-latin-700.ttf') format('truetype'); /* Safari, Android, iOS */
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

export default Fonts;
