/*
  Web3Forms access key.

  This is intentionally a public value — Web3Forms is a client-side service,
  the key ships in the browser bundle by design. Spam is handled by the
  service (rate limits + honeypot + optional hCaptcha).

  If it ever gets abused, rotate it at https://web3forms.com/ and replace
  the constant below.
*/
export const WEB3FORMS_ACCESS_KEY = '93b96071-e7e3-4d43-9975-db59fe4242b6'
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
