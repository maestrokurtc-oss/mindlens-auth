# MindLens Auth

Static authentication pages for MindLens:

- `/auth/confirm/` holds the one-time Supabase confirmation URL until the user explicitly confirms, preventing email-link scanners from consuming it.
- `/auth/confirmed/` reports the verification result and offers a return link to the mobile app.

Static confirmation landing page for MindLens email verification.

- Production URL: `https://auth.getmindlens.app/auth/confirmed`
- Contains no application secrets or user data.
- Authentication query and fragment values are removed from the address bar immediately.
