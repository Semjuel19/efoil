# Forms Setup Guide - Netlify Forms + Brevo

This guide explains how to complete the setup for your contact form (Netlify) and newsletter (Brevo) integrations.

## ✅ Already Implemented

- Contact form configured for Netlify Forms
- Newsletter forms prepared for Brevo integration
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

### 2. Brevo Setup (Newsletter)

**Steps:**

1. **Create Brevo Account** (free tier: 300 emails/day, unlimited contacts)
   - Go to https://brevo.com
   - Sign up for free account

2. **Create Contact List**
   - Dashboard → Contacts → Lists
   - Create new list for your newsletter subscribers
   - Fill in your organization details

3. **Get Embedded Form Code**
   - Go to Forms → Create a form
   - Choose "Subscription form"
   - Customize the form design
   - Get the form action URL from the HTML code

4. **✅ Website Already Updated**
   Your forms are now integrated with Brevo and include:
   - Proper form action URL
   - GDPR compliance checkbox
   - Slovak language support
   - Spam protection
   - Form validation

5. **✅ Setup Complete**
   Your newsletter forms are ready to use! Features included:
   - Email validation
   - GDPR consent requirement
   - Success/error messages in Slovak
   - Mobile-responsive design

## 📧 Managing Your Newsletter

### Sending Newsletters via Brevo:

1. **Create Campaign**
   - Dashboard → Campaigns → Create an email campaign
   - Choose "To a list" campaign type

2. **Select Contacts**
   - Choose your created contact list

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
3. **Check form submissions in Netlify:**
   - Go to Netlify Dashboard
   - Click on your site
   - Go to "Forms" tab in the left sidebar
   - You should see form submissions listed there
4. Verify email notifications

### Troubleshooting Form Issues:

**Form not appearing in Netlify Dashboard:**
- Make sure you deployed AFTER adding the Netlify form attributes
- Check that `data-netlify="true"` is present in the form tag
- Netlify needs to crawl the deployed HTML to detect forms

**404 Error after form submission:**
- Fixed with success page redirect (already implemented)
- Form now redirects to `/success.html` after submission

**Form submissions not visible:**
- Go to your Netlify site dashboard
- Click "Forms" in the left sidebar
- If no forms appear, redeploy your site
- Check that the form has `name="contact"` attribute

### Test Newsletter:
1. Complete Brevo setup
2. Test subscribe with your own email
3. Check Brevo contact list for new subscriber
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
  - Brevo's spam protection
  - Double opt-in (configurable in Brevo)

## 💰 Cost Breakdown

- **Netlify Forms:** Free (100 submissions/month)
- **Brevo:** Free (300 emails/day = 9,000/month, unlimited contacts)
- **Total:** $0/month for low traffic

## 🚨 Important Notes

1. **Netlify Forms only work on deployed sites** - not on localhost
2. **Test thoroughly** after each setup step
3. **GDPR Compliance:** Both solutions help with EU compliance
4. **Backup:** Export subscriber lists regularly from Mailchimp

## 📞 Support

- **Netlify Forms:** https://docs.netlify.com/forms/setup/
- **Brevo:** https://help.brevo.com/
- **Site Issues:** Check browser console for JavaScript errors

---

**Next Steps:**
1. Deploy to Netlify
2. Set up Brevo account (free)
3. Update form action URLs
4. Test both integrations
5. Start collecting subscribers!

## 🎯 **Why Brevo is Better than Mailchimp:**

- **Free tier:** 300 emails/day vs Mailchimp's 14-day trial only
- **No contact limits** vs Mailchimp's subscriber restrictions  
- **9,000 emails/month** (300 × 30 days) vs Mailchimp's paid plans
- **Professional features** included in free tier
- **Better value** for small organizations like yours