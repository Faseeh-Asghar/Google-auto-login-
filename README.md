# AutoLogin • Made by Faseeh

A lightweight, fully automated Chrome Extension (Manifest V3) that quietly and seamlessly reconnects you to university Google portals when sessions time out.

## ✨ Features

- **End-to-End Automation**: Automatically detects the Google sign-in page, selects your account, fills the email and password, and clicks "Next".
- **Session Keep-Alive**: Runs a continuous, stealthy background process to ping key Google services every 15 minutes, drastically reducing the occurrence of unexpected session expirations. 
- **Auto-Refresh**: Once re-authentication is successful, all your open Google service tabs (Classroom, Gmail, Drive, Docs, Meet, etc.) are automatically reloaded so you don't skip a beat. 
- **Privacy & Security First**: Credentials are encrypted inside your own browser's local storage. The extension’s source code is aggressively obfuscated to prevent reverse-engineering and tampering, ensuring maximum security when deploying among fellow students. 

## ⚙️ How It Works

1. Once installed, go to the extension's **Options**.
2. Enter your university Google Email and Password. 
3. Click **Save Credentials**. The interface validates input securely.
4. That's it! Leave it running. If Google kicks you out after 3-4 hours, the moment you interact with an expired Google service, AutoLogin will intercept the sign-in sequence and handle it in less than 2 seconds. 

## 🚀 Installation (Developer Mode)

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer mode** toggle in the top right.
3. Click **Load unpacked**.
4. Select the folder containing this extension.
5. The extension will appear in your extensions list. Remember to pin it and configure your credentials.

## 🔒 Security & Privacy Notice
- **Local Storage Only:** Passwords never leave your computer. They are stored securely inside your browser profile.
- **Do not share your browser profile.** Sharing the physical extension files is safe (since the code is obfuscated and contains no personal data), but never share a zipped copy of your entire Chrome profile.
- **Limitations:** This extension will not bypass 2FA, CAPTCHA, or external university-specific SSO portals. 

## 🔧 Permissions Used

- `storage`: Required to securely save and read credentials locally.
- `tabs`: Required to detect and refresh inactive Google tabs once autologin completes. 
- `alarms`: Required to maintain the Google session keep-alive loop in the background.
- `host_permissions`: Accesses `*://*.google.com/*` exclusively.

---
**Version:** 1.2  
**Author:** Made by Faseeh
