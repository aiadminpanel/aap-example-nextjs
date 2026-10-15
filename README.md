# aap-example-nextjs

A minimal **Next.js (App Router, server-rendered)** app, kept as a deploy example for [AI Admin Panel](https://aiadminpanel.com).

AI Admin Panel deploys it from this repository with **Git Deploy** (and **AI Deploy**) and checks
the result regularly: the page at `/` must contain the marker `aap-example:nextjs`. Use it to see how
your own Next.js (App Router, server-rendered) project is built, or as a starting point.

Shaped like what v0 generates: the App Router with a page rendered on every request. `next start` serves it and honours `$PORT`.

- The app listens on `$PORT` (default 8080).
- No secrets in this repository.
- License: MIT.
