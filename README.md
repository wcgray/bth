# Bree TH - Cash Advance Dashboard

A responsive React web application that displays a dashboard for users to request cash advances and view recent transactions.

## Key Features

- Real-time balance display with smooth animations
- Cash advance requests up to $1000
- Transaction history with status tracking
- Responsive design that works on mobile and desktop
- Modal forms with validation

## Technical Implementation Notes

### State Management
- Used React's built-in useState for local component state management
- Implemented a Transaction model class to encapsulate transaction logic and data
- Passed state updates through props to maintain unidirectional data flow

### UI/UX Considerations
- Added animated balance transitions to provide visual feedback
- Implemented form validation with clear error messages
- Used a modal overlay for the cash advance form to focus user attention
- Responsive grid layout adjusts seamlessly between mobile and desktop views

### Performance Optimizations
- Memoized balance calculations using useMemo to prevent unnecessary recalculations
- Implemented efficient animation using tailwind keyframe

### Design Decisions & Trade-offs

1. Local State vs Global State
   - Chose local state management since the app scope is relatively small

2. Animation Implementation
   - Used CSS transitions where possible for better performance

3. Form Validation
   - Implemented client-side validation for immediate feedback

4. Styling Approach
   - Used Tailwind CSS for rapid development and consistent styling
   - Kept look and feel minimalistic

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Run Unit Tests
```bash
npm run test
```

## Run Linter
```bash
npm run lint
```