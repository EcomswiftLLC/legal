# Footlight support form: Wix build spec

This spec describes the native Wix form that sits between `footlight-support-top.html` and `footlight-support-bottom.html` on the Footlight support page (`https://www.ecomswiftllc.com/footlight-support`).

## Page order

1. HTML embed: `footlight-support-top.html` (h1, "Read the guide first", "What to include", and the h2 "Send us a message").
2. Native Wix form (fields below). Form background: transparent or paper `#F6F2EA`, so the seam with the embeds is invisible.
3. HTML embed: `footlight-support-bottom.html` ("After you send it", "Quick checks before you write", disclaimer).

Embed notes:

- The top block adds `padding-top: 150px` at 760px and below, to clear the Wix mobile header. If the header stops overlapping, remove the last rule in its `<style>` block.
- Both embeds use `target="_top"` links, so they open in the full window and not inside the embed frame.
- The documentation link points to `https://www.ecomswiftllc.com/footlight-documentation`. The policy link points to `https://ecomswiftllc.github.io/legal/footlight/footlight-support-policy.html`. This works only after GitHub Pages serves the `footlight` folder. If a Wix policy page exists, swap the URL in `footlight-support-bottom.html`.
- Set the embed heights to fit the content, with no inner scroll. Re-check the heights on a 390px wide screen.

## Form fields

Use these labels exactly. Labels sit above the fields (visible labels, not placeholders only). Sentence case.

| # | Label | Field type | Required | Notes |
|---|-------|-----------|----------|-------|
| 1 | Name | Short text | Yes | Autocomplete: name. |
| 2 | Email | Email | Yes | Autocomplete: email. Helper text: "We reply to this address." |
| 3 | Store URL | URL or short text | Yes | Placeholder: `https://your-store.myshopify.com`. Helper text: "The address of the store that uses Footlight." |
| 4 | Theme name | Short text | Yes | Prefilled with `Footlight`. Leave editable, so people with a renamed copy can correct it. |
| 5 | Theme version | Short text | No | Helper text: "Shown in the theme editor under Theme settings." |
| 6 | Problem description | Long text | Yes | Helper text: "What you expected, what you saw instead, and the steps that lead to it. Include the address of a page where it shows, such as an example product page. Do not include passwords or customer data." |
| 7 | Attach screenshots or a screen recording | File upload | No | Allow images (PNG, JPG, WebP, GIF) and video (MP4, MOV). Allow up to 5 files if the Wix plan allows it. |
| 8 | Consent | Checkbox | Yes | Label: "I agree that Ecom Swift LLC may contact me by email about this request." Unchecked by default. |

Optional addition if Wix allows it and you want it: a short text field labeled "Browser and device" (for example Safari on an iPhone). It is also in the top block's "What to include" list. If you skip the field, people can write it in the problem description.

## Buttons and states

- Submit button label: **Send message**
- Success message: "Thank you. We received your message and sent a confirmation to your email. We reply within 2 business days."
- Error message for a missing required field: "Fill in this field to continue."
- Error message for an invalid email: "Enter a valid email address, for example name@example.com."
- Error message for an invalid store URL: "Enter your store address, for example https://your-store.myshopify.com."
- Error message for the consent checkbox: "Check this box so we can reply to you by email."

## Notifications

- Send each submission to `support@ecomswiftllc.com`.
- Set the form's reply-to to the submitter's Email field, so the team can answer directly.
- Email subject for the team: "Footlight support: [Name]" (use the Wix field placeholder for Name).

## Auto-responder (email to the person who sent the form)

Send from: `support@ecomswiftllc.com`

Subject: We received your Footlight support request

Body:

> Hello [Name],
>
> Thank you for contacting Footlight support. We received your message and will reply within 2 business days. Business days are Monday to Friday, except public holidays in the United States.
>
> To help us answer in one reply, make sure we have:
>
> - The address of your store
> - The address of a page where the problem shows
> - The Footlight version from the theme editor (Theme settings)
> - Your browser and device
> - A screenshot or screen recording, if you have one
>
> If you forgot something, reply to this email and add it.
>
> Please do not send passwords or customer data by email. If we need to look inside your store, we will ask you to send a staff account request that you control.
>
> In the meantime, the Footlight documentation describes every setting by the name shown in the theme editor: https://www.ecomswiftllc.com/footlight-documentation
>
> Ecom Swift LLC
> support@ecomswiftllc.com

## Copy rules for this form

- American English, plain words, sentence case, no em dashes, no urgency or hype.
- Use the same terms as the pages: "Store URL" in the form, "store address" in prose. "Theme version" is the same term everywhere.
- The reply promise is exactly: within 2 business days. Do not shorten it in the form or the emails.

## Accessibility checklist for the Wix form

- Every field has a visible label. Required fields are marked in the label or helper text, and not by color alone.
- Text contrast is at least 4.5:1 against the form background. Field borders are at least 3:1 against it.
- The focus ring is visible on every field and on the Send message button.
- Touch targets are at least 44 by 44 pixels, including the checkbox.
- Error messages appear next to the field and are not shown in color alone.
- Check the finished page at 360px wide with the keyboard only: Tab moves top to bottom, and the form can be sent without a mouse.
