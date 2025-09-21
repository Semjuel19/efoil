# Forms Setup Guide - Netlify Forms + Mailchimp

This guide explains how to complete the setup for your contact form (Netlify) and newsletter (Mailchimp) integrations.

## ✅ Already Implemented

- Contact form configured for Netlify Forms
- Newsletter forms prepared for Mailchimp integration
- Form validation and success messages
- Spam protection (honeypot fields)

## 🚀 Setup Steps

### 1. Netlify Forms Setup (Contact Form)

**Requirements:** Your site must be deployed on Netlify

**Steps:**
1. Deploy your site to Netlify
2. The contact form will automatically work once deployed
3. Form submissions will appear in your Netlify dashboard under "Forms"
4. Configure email notifications:
   - Go to Netlify Dashboard → Site Settings → Forms
   - Add notification emails under "Form notifications"
   - Set up email templates if desired

**Form fields captured:**
- Name
- Email
- Subject (dropdown)
- Message
- Privacy consent
- Source tracking

### 2. Mailchimp Setup (Newsletter)

**Steps:**

1. **Create Mailchimp Account** (free tier: 500 contacts, 1,000 emails/month)
   - Go to https://mailchimp.com
   - Sign up for free account

2. **Create Audience/List**
   - Dashboard → Audience → Create Audience
   - Fill in your organization details

3. **Get Embedded Form Code**
   - Audience → Signup forms → Embedded forms
   - Choose "Naked" or "Condensed" form
   - Copy the form action URL

4. **Update Your Website**
   Replace these lines in `index.html`:

   **Newsletter Section Form (line ~1582):**
   ```html
   <!-- Replace action="#" with your Mailchimp URL -->
   <form class="newsletter-form" action="YOUR_MAILCHIMP_ACTION_URL" method="post">
   ```

   **Popup Form (line ~1750):**
   ```html
   <!-- Replace action="#" with your Mailchimp URL -->
   <form class="popup-form" action="YOUR_MAILCHIMP_ACTION_URL" method="post">
   ```

5. **Remove Setup Note**
   Delete this section after setup:
   ```html
   <div class="mailchimp-setup-note" style="...">
     <strong>Pre administrátora:</strong> Nahraďte action="#" skutočnou Mailchimp URL po nastavení účtu.
   </div>
   ```

## 📧 Managing Your Newsletter

### Sending Newsletters via Mailchimp:

1. **Create Campaign**
   - Dashboard → Campaigns → Create Campaign
   - Choose "Email" campaign type

2. **Select Audience**
   - Choose your created audience/list

3. **Design Email**
   - Use templates or drag-and-drop builder
   - Add your content about eFoil events, news, etc.

4. **Send or Schedule**
   - Preview and test
   - Send immediately or schedule for later

### Analytics Available:
- Open rates
- Click-through rates
- Subscriber growth
- Audience insights

## 🔧 Testing

### Test Contact Form:
1. Deploy to Netlify
2. Fill out contact form on live site
3. Check Netlify Dashboard → Forms for submission
4. Verify email notifications

### Test Newsletter:
1. Complete Mailchimp setup
2. Test subscribe with your own email
3. Check Mailchimp audience for new subscriber
4. Send test campaign

## 📱 Mobile Optimization

Both forms are mobile-responsive and work well on all devices.

## 🛡️ Security Features

- **Contact Form:**
  - Honeypot spam protection
  - Netlify's built-in spam filtering
  - Client-side validation

- **Newsletter:**
  - Email validation
  - Mailchimp's spam protection
  - Double opt-in (configurable in Mailchimp)

## 💰 Cost Breakdown

- **Netlify Forms:** Free (100 submissions/month)
- **Mailchimp:** Free (500 contacts, 1,000 emails/month)
- **Total:** $0/month for low traffic

## 🚨 Important Notes

1. **Netlify Forms only work on deployed sites** - not on localhost
2. **Test thoroughly** after each setup step
3. **GDPR Compliance:** Both solutions help with EU compliance
4. **Backup:** Export subscriber lists regularly from Mailchimp

## 📞 Support

- **Netlify Forms:** https://docs.netlify.com/forms/setup/
- **Mailchimp:** https://mailchimp.com/help/
- **Site Issues:** Check browser console for JavaScript errors

---

**Next Steps:**
1. Deploy to Netlify
2. Set up Mailchimp account
3. Update form action URLs
4. Test both integrations
5. Start collecting subscribers!