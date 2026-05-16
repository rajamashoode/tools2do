# Tools2Do Redirect Rules for Cloudflare/GitHub Pages

GitHub Pages does not support Apache `.htaccess`. Use Cloudflare Redirect Rules or Bulk Redirects in front of GitHub Pages.

## Exact redirects
- https://tools2do.com/index.html -> https://tools2do.com/
- https://tools2do.com/blog/index.html -> https://tools2do.com/blog/
- https://tools2do.com/about-us.html -> https://tools2do.com/about/
- https://tools2do.com/contact-us.html -> https://tools2do.com/contact/
- https://tools2do.com/privacy-policy.html -> https://tools2do.com/privacy-policy/
- https://tools2do.com/terms-and-conditions.html -> https://tools2do.com/terms-and-conditions/
- https://tools2do.com/petrol-subsidy.html -> https://tools2do.com/petrol-subsidy/
- https://tools2do.com/editorial-policy.html -> https://tools2do.com/editorial-policy/

## Pattern rules
1. Redirect any path ending `/index.html` to the same path without `index.html`.
2. Redirect `.html` pages to clean trailing-slash URLs.
3. Redirect extensionless URLs without a trailing slash to the trailing-slash version.

Use status code: 301 Permanent Redirect.
Preserve query string: Yes.
