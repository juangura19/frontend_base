export const environment = {
  production: true,
  BASE_URL: '', //url del front
  
  BASE_URL_SERVICE_ADMIN: '', //url backend
  ALLOWED_HOST: [], //[url backend sin <http://> se puede poner varios seprado por coma]

  RECAPTCHA_SITE_KEY: '', //token recaptha
  ANALYTICS_ID: '', //token de google analtyis
  OTP_RESEND_TIME: 0, //duracion del codigo de verificacion
  CACHE_TTL: 0, //duracion -> pwa
};
