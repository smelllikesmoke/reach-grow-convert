

# Ready to Implement - Trust & Conversion Enhancement Plan

The plan has been approved. I have reviewed all the files and I'm ready to implement the following changes:

---

## Changes to Implement

### 1. New Components to Create

**`src/components/CountdownTimer.tsx`**
- Reusable countdown timer with days, hours, minutes, seconds
- Uses `useState` and `useEffect` for real-time countdown
- Styled to match the navy/gold theme

**`src/components/ToolLogos.tsx`**
- Grid of marketing tool logos (Google Analytics, SEMrush, HubSpot, Mailchimp, Meta Ads, Google Ads)
- Grayscale-to-gold hover effect
- Reusable on Home and Course pages

---

### 2. Home Page (`src/pages/Index.tsx`)

- **Swap headline/subheadline**: "Get Job-Ready in 12 Weeks" becomes the main headline
- **Add secondary CTA**: "View Curriculum" button next to "Enroll Now"
- **Add Tool Logos section**: Below the curriculum features
- **Add Syllabus Download button**: "Download Free Syllabus" with Download icon

---

### 3. Course Page (`src/pages/Course.tsx`)

- **Add Tool Logos section**: After the "What You'll Learn" modules
- **Add Syllabus Download button**: Prominent download CTA
- **Add "Who This Is NOT For" section**: Below "Who Is This Course For?"
  - Red X icons instead of checkmarks
  - 4 filtering statements (get-rich-quick, time commitment, effort, experienced marketers)

---

### 4. Instructor Page (`src/pages/Instructor.tsx`)

- **Update bio text**: Add "Currently managing $2M+/month in ad spend"
- **Update credentials**: Replace "MBA from Harvard" with "Currently Managing $2M+/mo in Ad Spend"
- **Reorder credentials**: Prioritize hands-on experience over academic credentials

---

### 5. Pricing Page (`src/pages/Pricing.tsx`)

- **Replace static scarcity**: Remove "Only 23 seats left"
- **Add CountdownTimer**: Show "Offer ends February 10, 2026" with live countdown
- **More believable urgency**: Time-based instead of fake seat limits

---

## Summary

| File | Action |
|------|--------|
| `src/components/CountdownTimer.tsx` | CREATE |
| `src/components/ToolLogos.tsx` | CREATE |
| `src/pages/Index.tsx` | UPDATE |
| `src/pages/Course.tsx` | UPDATE |
| `src/pages/Instructor.tsx` | UPDATE |
| `src/pages/Pricing.tsx` | UPDATE |

Once I'm switched to implementation mode, I'll create these components and make all the updates.

