# Vyvora support form: Wix build spec

This spec describes the native Wix form that sits between `vyvora-support-top.html` and `vyvora-support-bottom.html` on the Vyvora support page (`https://www.ecomswiftllc.com/vyvora-support`).

## Page order

1. HTML embed: `vyvora-support-top.html` (volt title field with the h1 "Vyvora support" and the 2 business day reply line, "Check the documentation", "What to send us", and the h2 "Send us a message").
2. Native Wix form (fields below). Form background: transparent or Bone `#F1EFE8`, so the seam with the embeds is invisible.
3. HTML embed: `vyvora-support-bottom.html` ("What happens next", "Try these first", disclaimer).

Embed notes:

- The top block adds `padding-top: 150px` at 760px and below, to clear the Wix mobile header. If the header stops overlapping, remove the last rule in its `<style>` block.
- Both embeds use `target="_top"` links, so they open in the full window and not inside the embed frame.
- The documentation link points to `https://www.ecomswiftllc.com/vyvora-documentation`. The policy link points to `https://ecomswiftllc.github.io/legal/vyvora/vyvora-support-policy.html`. This works only after GitHub Pages serves the `vyvora` folder. If a Wix policy page is created, swap the URL in `vyvora-support-bottom.html`.
- Set the embed heights to fit the content, with no inner scroll. Re-check the heights on a 390px wide screen.

## Form fields

Use these labels exactly. Labels sit above the fields (visible labels, not placeholders only). Sentence case.

| # | Label | Field type | Required | Notes |
|---|-------|-----------|----------|-------|
| 1 | Name | Short text | Yes | Autocomplete: name. |
| 2 | Email | Email | Yes | Autocomplete: email. Helper text: "We reply to this address." |
| 3 | Store URL | URL or short text | Yes | Placeholder: `https://your-store.myshopify.com`. Helper text: "The address of the store that uses Vyvora." |
| 4 | Theme name | Short text | Yes | Prefilled with `Vyvora`. Leave editable, so people with a renamed copy can correct it. |
| 5 | Theme version | Short text | No | Helper text: "Listed in the theme editor under Theme settings." |
| 6 | Problem description | Long text | Yes | Helper text: "What you expected, what you saw instead, and the steps that lead to it. Include the address of a page where it shows. Do not include passwords or customer data." |
| 7 | Attach screenshots or a screen recording | File upload | No | Allow images (PNG, JPG, WebP, GIF) and video (MP4, MOV). Allow up to 5 files if the Wix plan allows it. |
| 8 | Consent | Checkbox | Yes | Label: "I agree that Ecom Swift LLC may contact me by email about this request." Unchecked by default. |

Optional addition if Wix allows it: a short text field labeled "Browser and device" (for example Chrome on Windows). It is also listed in the top block under "What to send us". If you skip the field, people can write it in the problem description.

## Buttons and states

- Submit button label: **Send message**
- Success message: "Message sent. We emailed you a confirmation and will reply within 2 business days."
- Error message for a missing required field: "Fill in this field to send your message."
- Error message for an invalid email: "Enter an email address like name@example.com."
- Error message for an invalid store URL: "Enter your store address, like https://your-store.myshopify.com."
- Error message for the consent checkbox: "Check this box so we can email you a reply."

## Notifications

- Send each submission to `support@ecomswiftllc.com`.
- Set the form's reply-to to the submitter's Email field, so the team can answer directly.
- Email subject for the team: "Vyvora support: [Name]" (use the Wix field placeholder for Name).

## Auto-responder (email to the person who sent the form)

Send from: `support@ecomswiftllc.com`

Subject: We received your Vyvora support request

Body:

> Hello [Name],
>
> Thanks for writing to Vyvora support. Your message reached us, and we will reply within 2 business days. Business days are Monday to Friday, except public holidays in the United States.
>
> We can usually answer in one reply when we have:
>
> - Your store URL
> - The address of a page where the problem shows
> - The Vyvora version, listed in the theme editor under Theme settings
> - Your browser and device
> - A screenshot or screen recording, if you have one
>
> If something is missing, reply to this email and add it.
>
> Please do not send passwords or customer data. If we need to see inside your store, we will ask you to approve a collaborator or staff request that you control.
>
> While you wait, the Vyvora documentation explains every setting by its label in the theme editor: https://www.ecomswiftllc.com/vyvora-documentation
>
> Ecom Swift LLC
> support@ecomswiftllc.com

## Copy rules for this form

- American English, plain words, sentence case, no em dashes, no urgency or hype.
- Use the same terms as the pages: "Store URL" in the form and the "What to send us" list. "Theme version" is the same term everywhere.
- The reply promise is exactly: within 2 business days. Do not shorten it in the form or the emails.
- Support is free for theme buyers. Do not mention prices or paid tiers in the form or the emails.

## Accessibility checklist for the Wix form

- Every field has a visible label. Required fields are marked in the label or helper text, and not by color alone.
- Text contrast is at least 4.5:1 against the Bone background (Graphite `#15161A` text gives 15.7:1; Secondary text `#55575E` gives 6.3:1). Field borders are at least 3:1 against it (use Graphite).
- Do not use Volt `#C6F432` or Tangerine `#FF6B1F` for text on Bone; both fail contrast.
- The focus ring is visible on every field and on the Send message button (Cobalt `#2342F5`, 3px, matches the embeds).
- Touch targets are at least 44 by 44 pixels, including the checkbox.
- Error messages appear next to the field and are not shown in color alone.
- Check the finished page at 360px wide with the keyboard only: Tab moves top to bottom, and the form can be sent without a mouse.
