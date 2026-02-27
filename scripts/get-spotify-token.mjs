/**
 * One-time script to obtain a Spotify refresh token.
 *
 * Usage:
 *   node scripts/get-spotify-token.mjs
 *
 * Steps:
 *   1. Opens the Spotify authorization URL in your browser.
 *   2. You log in and grant access.
 *   3. Spotify redirects to http://localhost:8888/callback with an auth code.
 *   4. This script exchanges the code for tokens and prints the refresh token.
 *   5. Paste the refresh token into .env.local as SPOTIFY_REFRESH_TOKEN.
 */

import http from 'node:http';
import { execSync } from 'node:child_process';
import { URL, URLSearchParams } from 'node:url';

// ── Configuration ──────────────────────────────────────────────────────
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '0ade11485db140a8bf382266d41867c0';
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || 'fc20f794d1904175b697bf02507d92b5';
const REDIRECT_URI = 'http://127.0.0.1:8888/callback';
const SCOPES = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-top-read',
  'user-read-email',
  'user-read-private',
].join(' ');

// ── Build the authorization URL ────────────────────────────────────────
const authUrl = new URL('https://accounts.spotify.com/authorize');
authUrl.searchParams.set('client_id', CLIENT_ID);
authUrl.searchParams.set('response_type', 'code');
authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
authUrl.searchParams.set('scope', SCOPES);

console.log('\n🎵  Spotify Refresh Token Helper\n');
console.log('Opening your browser to authorize the app...\n');
console.log('If it does not open automatically, visit:\n');
console.log(authUrl.toString());
console.log('');

// Open the URL in the default browser (macOS)
try {
  execSync(`open "${authUrl.toString()}"`);
} catch {
  // Non-fatal – user can open the URL manually
}

// ── Start a tiny HTTP server to catch the redirect ─────────────────────
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname !== '/callback') {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error || !code) {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end('<h1>Authorization failed</h1><p>' + (error || 'No code received') + '</p>');
    server.close();
    process.exit(1);
  }

  // Exchange the authorization code for tokens
  try {
    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      }).toString(),
    });

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok) {
      throw new Error(JSON.stringify(tokenData));
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(
      '<h1>Success! ✅</h1><p>You can close this tab and return to the terminal.</p>'
    );

    console.log('✅  Authorization successful!\n');
    console.log('Your refresh token:\n');
    console.log(tokenData.refresh_token);
    console.log('\nPaste this value into your .env.local file as SPOTIFY_REFRESH_TOKEN.\n');
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('<h1>Token exchange failed</h1><pre>' + err.message + '</pre>');
    console.error('Token exchange failed:', err);
  }

  server.close();
});

server.listen(8888, () => {
  console.log('Waiting for Spotify callback on http://127.0.0.1:8888/callback ...\n');
});

