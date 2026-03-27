# Faseeh Auto Login Extension

A lightweight Chrome Extension (Manifest V3) that helps auto-fill Google account login fields and continue the sign-in flow.

## What It Does

- Stores your Google email and password in extension local storage.
- Watches Google sign-in pages (`accounts.google.com`).
- Auto-fills:
  - Email on the identifier step
  - Password on the password step
- Clicks the "Next" buttons automatically when fields are filled.

## Project Structure

```text
.
├─ manifest.json
├─ content.js
├─ popup/
│  └─ popup.html
├─ options/
│  ├─ options.html
│  └─ options.js
└─ src/
   ├─ images/
   ├─ options/
   └─ popup/
```

## How It Works

1. Open extension options and save credentials.
2. When you are on `accounts.google.com`, the content script runs.
3. The script observes DOM updates (dynamic Google login UI).
4. It fills fields and triggers Next buttons when available.

## Installation (Developer Mode)

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select this folder:
   - `faseeh_auto_login_extension`
5. The extension will appear in your extensions list.

## Configuration

1. Open the extension details page in `chrome://extensions/`.
2. Click **Extension options**.
3. Enter:
   - Google Email
   - Google Password
4. Click **Save Credentials**.

## Permissions Used

From [manifest.json](manifest.json):

- `storage`: Save and read credentials.
- Host permissions:
  - `*://*.google.com/*`
- Content script matches:
  - `*://accounts.google.com/*`

## Notes and Limitations

- This extension is currently designed for Google login pages only.
- It may stop working if Google significantly changes its login form structure.
- It does not bypass MFA, CAPTCHA, or security challenges.

## Security Warning

Credentials are saved using Chrome extension local storage.

- Keep this extension private and use only on trusted devices.
- Do not share this extension package with stored credentials.
- For stronger security, consider replacing password storage with OAuth/session-based approaches.

## Development

If you make changes:

1. Update files.
2. Go to `chrome://extensions/`.
3. Click **Reload** on the extension card.
4. Re-test login flow on Google sign-in pages.

## Version

- Current extension version: `1.0`

## Author

- Made by Faseeh
