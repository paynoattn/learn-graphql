export const APP_PORT = process.env.APP_PORT && !isNaN(parseInt(process.env.APP_PORT, 10)) ? 
  parseInt(process.env.APP_PORT, 10) : 
  8000;

export const APP_ENV = process.env.NODE_ENV || 'development';
