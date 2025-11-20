# BASH EMIR Website - Multi-Language Version

This repository contains the multi-language version of the BASH EMIR website, supporting Russian (RU), English (EN), Farsi (IR), and Turkish (TR).

## Language Implementation Strategy

The website uses a hybrid approach for multi-language support:

1.  **Server-Side Redirection (for SEO and initial load):**
    *   The main entry point is `index.html` (Russian version).
    *   The `.htaccess` file is configured to check the user's browser language (`Accept-Language` header) and redirect them to a language-specific file for better SEO and faster initial load.
        *   Users with English preference are redirected to `index_en.html`.
        *   Users with Farsi/Iranian preference are redirected to `index_fa.html`.
    *   All other users (including Turkish) are served the main `index.html` (Russian version).

2.  **Client-Side Translation (for dynamic switching):**
    *   The `script.js` file contains all translations and handles dynamic language switching between RU, EN, IR, and TR.
    *   The script also detects the initial language based on the loaded file (`index.html`, `index_en.html`, `index_fa.html`) and applies the correct translation.

## File Structure

*   `index.html`: Main entry point (Russian version).
*   `index_en.html`: Dedicated English version.
*   `index_fa.html`: Dedicated Farsi/Iranian version (Right-to-Left, RTL).
*   `script.js`: Contains all translation strings and the language switching/detection logic.
*   `.htaccess`: Server configuration for language-based redirection (requires Apache or similar server).
*   `style.css`, `animations.css`: Styling files.
*   `proposal*.pdf`: Commercial offer documents.
*   `1111.mp4`, `unnamed.jpg`: Media assets.

## Deployment Notes

For the language redirection to work, the `.htaccess` file must be deployed on a web server that supports **mod_rewrite** (like Apache).

**Redirection Logic in `.htaccess`:**

| User's Browser Language (`Accept-Language`) | Redirects to | Notes |
| :--- | :--- | :--- |
| `en`, `en-US`, etc. | `index_en.html` | Dedicated English file. |
| `fa`, `ir`, etc. | `index_fa.html` | Dedicated Farsi file (RTL). |
| `ru`, `tr`, or any other | `index.html` | Default Russian file. Client-side JS will then apply Turkish translation if selected. |
