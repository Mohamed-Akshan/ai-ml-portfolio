# Mohamed Akshan — AI/ML Portfolio

React + Vite, based on the supplied v9 portfolio. Existing section reveals, parallax, Lenis smooth scrolling, scroll progress, cards and animated project walkthroughs are preserved. The hero has been revised to the requested editorial layout with the original supplied colour portrait.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run dev
npm run build
```

## Publish to GitHub and Vercel

1. Push this folder as a GitHub repository. Do **not** commit `.env` files, secret tokens or `node_modules`.
2. Import the repository into Vercel. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. For functioning email delivery, sign up at https://resend.com, verify a domain you control and create an API key. Set **RESEND_API_KEY** and **CONTACT_FROM_EMAIL** in Vercel Environment Variables. The sender must be authorized in Resend. Redeploy after changing them.
4. Submitting a name, email and message sends an email to `mohamedakshan.dev@gmail.com`. The sender's address is set as the reply-to. A CV request using the **Request my CV** button prefills a clear request, and its email is marked accordingly. You must manually reply with your CV. **The site does not automatically send CV attachments.**
5. Test on the deployed Vercel URL. `vite dev` alone cannot run `api/contact.js`; use `vercel dev` with environment variables to test the endpoint locally.

**Important:** No email API key or domain verification can be completed inside a static ZIP. Until those settings are entered in Vercel, form submissions correctly show an error rather than falsely claiming delivery. SMTP from a personal Gmail account is not used. The email destination is set in `api/contact.js` and is not a secret.

## Project integrity

- Project data and text: `src/data.js`. Resume-derived statistics are preserved.
- ZIPRO workflow is presented as an architectural overview (ingestion/indexing separately from runtime agent orchestration and retrieval); individual repository-level branching should be checked against actual source code before claiming an exact execution trace.
- The old credit risk **illustrative simulator** was removed. It used hard-coded coefficients unrelated to the trained model.
- No fake live demos or repository URLs are included. Add verified links in `src/data.js` when ready.
- Portrait is the user's supplied transparent colour portrait at `public/portrait.webp`.
- Monogram at `public/logo.svg`.

## Structure

```text
api/contact.js           Vercel serverless email handler
public/                  portrait, SVG monogram
src/App.jsx              all page sections, hero, routes
src/Project.jsx          detail pages with sequential architecture view
src/ContactForm.jsx      validated message form
src/data.js              case studies, experience, skills and links
src/styles.css           original theme, motion and editorial hero overrides
src/hooks.jsx            original scroll and motion helpers
src/Visuals.jsx          original SVG thumbnails
src/Icons.jsx            technology chips
```

## Safety and maintenance

Input length checks and HTML escaping are implemented on the server. A hidden honeypot discourages simple spam. For high-traffic public deployment, add a durable IP-based rate limiter and a privacy-friendly challenge (e.g. Cloudflare Turnstile). Review `npm audit` and update dependencies as needed; a clean audit does not guarantee zero future vulnerabilities.


## Link policy (v4)
Direct GitHub and Vercel URLs are used for ZIPRO; LinkedIn shortened URLs have been removed. Credit Risk includes direct GitHub and live-demo links. Samsung includes its public Tableau dashboard link. Fill in `gh` and `live` in `src/data.js` once known. Some deployments may be asleep or require backend configuration.

## Story text
The author-provided story lives verbatim in `src/story.js`. This is a personal narrative of a widely reported case, not a claim that the case has been independently verified here.

## Project links (verified November 16, 2026)

- ZIPRO live demo: https://zipro-frontend.vercel.app/ (site page returned successfully in public lookup; application functions must be tested in browser).
- ZIPRO repository: https://github.com/Mohamed-Akshan/Zipro-Voice-of-Customer-Copilot
- GitHub profile: https://github.com/Mohamed-Akshan
- LinkedIn profile: https://www.linkedin.com/in/akshan-mohamed-ashraf (not independently verified due to LinkedIn automated-access restrictions).
- Credit Risk GitHub: https://github.com/Mohamed-Akshan/credit-risk-prediction

## Project demo links (updated November 16, 2026)

- ZIPRO: https://zipro-frontend.vercel.app/
- Credit Risk Prediction: https://credit-risk-prediction-orcin.vercel.app/
- Samsung Tableau: https://public.tableau.com/app/profile/mohamed.akshan/viz/SamsungSalesDashboard_17733325342200/ExecutiveOverview?publish=yes

The project pages open these destinations in a new browser tab. External providers may require JavaScript or block automated clients; test interactive features in a normal browser.
