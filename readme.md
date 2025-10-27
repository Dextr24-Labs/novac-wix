# 🪙 Novac Wix Plugin

[![Wix](https://img.shields.io/badge/Built%20for-Wix-blue?logo=wix&logoColor=white)](https://www.wix.com/)
[![Novac](https://img.shields.io/badge/Novac-Payments-purple)](https://novacpay.com)
[![License](https://img.shields.io/badge/license-MIT-green)](#)

> Official Wix plugin for **Novac Payment Gateway**.  
> Accept payments in **NGN**, **USD**, and **GBP** directly from your Wix store.

---

## 🧩 Requirements

Before you begin, make sure you have:

1. ✅ A **Novac Business Account** (preferably approved for live transactions)  
2. ✅ A **Wix account** with a **Premium subscription**

---

## ⚙️ Integration Overview

This guide is divided into three easy sections:

1. [General Plugin Setup](#1-general-plugin-setup)  
2. [Site Installation](#2-site-installation)  
3. [Testing Your Integration](#3-testing-your-integration)

---

## 1. General Plugin Setup

### Turn On Developer Mode

1. Open your **Wix Editor**.  
2. Click **Dev Mode** at the top.  
3. Select **Turn on Dev Mode**.  

> This enables code editing for your site.

---

### Add the Payment Provider Plugin

1. In the left panel, click the **{ } Code Files** icon.  
2. Under **Service Plugins**, click the **( + )** button and select **Payment**.  
3. When asked to name your plugin, enter:  
   ```text
   novac
   ```
4. Add **Add & Edit Code**

Wix will create the following folders
```text
/service-plugins/novac/
  ├── novac.js
  └── novac-config.js

```

---

### Add Novac plugin code
You'll need to update both the `novac.js` and `novac-config.js` files. Start with the `novac.js` file:
1. Open novac.js.
2. Delete any sample code.
3. Copy and paste the code from our GitHub repository.

Repeat the same process for `novac-config.js`. Quickly access the code snippet for both files here:
- [novac.js](#)
- [novac-config.js](#)

---

### Add Backend Function

This backend function handles callback from Novac and processes your webhooks for each transactions.
1. Go to your Backend folder in the Wix Editor.
2. Click **( + ) → Expose Site API**, this creates an http-functions.js file.
3. If this file already exists, proceed to edit it.
4. Add the code from our `http-functions.js` to your backend function.

> **Editing Backend functions**
If your backend file has existing code, append the Novac callback function at the end.
If it’s a new file, remove the template code and paste in the Novac code.

---

### Publish Your Site

Once all files are added and saved, click **Publish** in the top-right corner of the Wix Editor. This makes the plugin active on your live site.

## 2. Site Installation
### Configure Novac in Wix Dashboard

1. Go to your Wix Dashboard.
2. Navigate to **Settings → Accept Payments**. You should now see Novac as a payment provider. If not, refresh the page to clear Wix’s cache.
3. Click Connect next to Novac.
4. Enter your `public_key`, `secret_key` and `logo_url` to confugure your integration on your wix store.

---

### Set Up Your Webhook

1. In your Novac Dashboard, go to **Settings → API settings**.
2. Add your webhook URL to your settings. It usually takes this format:

```text
https://yourwixdomain.com/_functions/post_novacWebhook
```


> Replace `yourwixdomain.com` with your actual Wix store domain.

3. Save your webhook in Novac.
4. Go back to your Wix dashboard and click Connect to finish setup.

---

## 3. Testing Your Integration

Before you start collecting live transaction, test your integration to ensure that it works properly:

1. Use your Novac test keys to configure your integration.
2. Make a mock payment, we provide test mode credentials in your dashboard and on the API documentation.
3. Confirm that:
   - The payment appears in your Novac dashboard.
   - The order status updates correctly in your Wix store.

Once everything works, update your keys to production keys in your wix settings.

## 🧠 Tips & Troubleshooting

- Always publish after updating code files.
- Double-check your Webhook URL, it must match your Wix domain exactly.
- If Novac doesn’t appear under payment options, refresh or clear your Wix cache.
- Test with sandbox credentials before switching to live keys.
- If issues persist, check the Wix Dev Console logs and contact support.

## Final Folder Structure
```text
/backend
  └── http-functions.js
/service-plugins
  └── novac
       ├── novac.js
       └── novac-config.js

```

## Support
Please reach out to our support team if you experience persistent error when using this guide. You can contact us via email at [support@novacpay.com](mailto:support@novacpay.com)