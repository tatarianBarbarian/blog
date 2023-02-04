import type { Theme } from 'theme-ui'

const colors = {
  ablue: '#1A90D9',
}

export const mediaSizes = {
  mobile: '(max-width: 1023px)',
  desktop: '(min-width: 1024px)',
}

const headerNavStyles = {
  base: {
    color: 'primary',
    marginRight: 7,
    ':visited': {
      color: 'primary',
    },
    textDecoration: 'none',
    fontSize: 3,
  },
  active: {
    '::first-letter': {
      fontWeight: 'bold',
      color: 'accent',
    },
  },
}

export const theme: Theme = {
  space: [0, 2, 3, 5, 8, 13, 21, 34, 55, 89],
  fonts: {
    body: '"Raleway", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  colors: {
    text: '#000',
    background: '#f8f8f8',
    primary: '#123123',
    accent: colors.ablue,
  },
  breakpoints: [
    `@media screen and ${mediaSizes.desktop}`,
    `@media screen and ${mediaSizes.mobile}`,
  ],
  styles: {
    root: {
      fontFamily: 'body',
      backgroundColor: 'background',
      fontSize: 3,
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    a: {
      textDecoration: 'none',
      color: 'text',
      borderBottom: '2px solid',
      borderColor: 'accent',
      ':hover': { color: 'accent' },
      transition: 'one',
      fontWeight: 'normal',
      display: 'inline',
      lineHeight: 1.5,
    },
    h1: {
      fontSize: 6,
    },
    h2: {
      fontSize: 5,
    },
    h3: {
      fontSize: 4,
    },
    h4: {
      fontSize: 3,
    },
    h5: {
      fontSize: 2,
    },
    h6: {
      fontSize: 1,
    },
    p: {
      lineHeight: 1.5,
    },
    li: {
      marginBottom: 4,
    },
    pre: {
      borderRadius: 8,
      padding: 6,
    },
    code: {
      fontSize: '16px',
    },
  },
  links: {
    nav: {},
    headerNav: {
      ...headerNavStyles.base,
    },
    headerNavCurrent: {
      ...headerNavStyles.base,
      ...headerNavStyles.active,
    },
    postPreview: {
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
      border: '1px solid',
      borderColor: '#D6D6D6',
      borderRadius: '6px',
      mb: 5,
      py: 3,
      px: 6,
      transition: 'one',
      '&:hover h3': {
        transition: 'one',
        color: 'accent',
      },
      ':hover': {
        borderColor: 'accent',
      },
    },
  },
  sizes: {
    container: 1280,
  },
  layout: {
    container: {
      px: [6, null],
    },
  },
  transitions: {
    one: 'all .2s ease',
  },
  buttons: {
    ghost: {
      background: 'none',
      border: 'none',
      display: 'inline-flex',
      margin: 0,
      padding: 0,
    },
  },
}
