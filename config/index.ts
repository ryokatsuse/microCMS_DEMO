const dev = process.env.NODE_ENV !== 'production';

export const server = dev ?  'https://spice.microcms.io/api/v1' : 'http://localhost:3000'