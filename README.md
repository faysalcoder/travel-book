# ✈️ Travel Booking Portal - Travalo

A modern travel booking platform built with **Next.js App Router**, **React**, **Firebase Authentication**, and **Tailwind CSS**. 

---

## 🌐 Live URL

[https://travel-book-yl4n.vercel.app/](https://travel-book-yl4n.vercel.app/)

---

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript
- **State Management:** React Context API
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth (Email/Password + Google)
- **API:** Flight search using public `https://api.tbp.travel/flights`

---

## ⚙️ Setup & Run Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/faysalcoder/travel-book.git
cd travel-booking-portal
```

2. **Install Dependencies**

```bash
npm install
```

3. **Start the Development Server**

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📄 Project Structure

```
app/
├── layout.jsx
├── page.jsx (Home)
├── search/page.jsx
├── booking/page.jsx
├── login/page.jsx
components/
├── BookingForm.jsx
├── FlightSearch.jsx
├── Footer.jsx
├── Hero.jsx
├── Login.jsx
├── PackageCard.jsx
├── PrivateRoute.jsx
├── SearchResult.jsx
context/
├── authContext.jsx
lib/
├── firebase.js
cotext/
├── authContext.js
public/
styles/
```

---

## ✅ Features & Functionality

### 1. 🏠 Home Page

- Hero section
- Functional search bar with:
  - Origin
  - Destination
  - Departure & Return Dates
  - Passengers (adults/children/infants)
- Popular Packages (static)
- Responsive Footer

### 2. 🔍 Search Page

- Parses search query from URL
- Fetches flight results using `POST https://api.tbp.travel/flights`
- Displays:
  - Airline name, origin & destination
  - Arrival , Departure time
  - Flight duration, stops
  - Price and Book Now button

### 3. 🔒 Booking Flow

- Clicking "Book Now" on any flight:
  - If user is **not logged in** → redirects to `/login?from=/booking`
  - If user **is logged in** → redirects to `/booking` with passenger query

### 4. 🧾 Booking Page

- Renders dynamic passenger forms based on query (`?adult=2&children=1`)
- Each form collects:
  - Name
  - Age
  - Passport Number (optional for children)

### 5. 🔐 Firebase Authentication

- Create Account with Name, Email, Password, Confirm Password
- Google Sign-In (OAuth)
- Auth state is globally managed with `Context API`

---

## 🔄 User Flow Summary

1. **Home** → user fills the form → redirects to `/search?origin=...&adult=...`
2. **Search Page** fetches and shows flight results
3. **Book Now**:
   - If not logged in → `/login?from=/booking`
   - After login → redirected to `/booking`
4. **Booking Page** renders passenger form dynamically
5. **On Submit** → displays success message and redirects to Home

---

## 📌 Assumptions & Limitations

- Backend database/storage not implemented (no real booking persistence)
- Flights API is assumed to be functional but may have limited coverage
- Booking flow ends at passenger submission (no payment integration)
- Minimal validation applied to passenger inputs

---

## 📤 Submission

**GitHub Repo:** [https://github.com/faysalcoder/travel-book](https://github.com/faysalcoder/travel-book)

---

## 👤 Author

- **Name:** Md Faysal Sikder
- **Role:** Frontend Developer
- **Email:** faysalsikder378486@gmail.com
- **LinkedIn:** https://linkedin.com/in/faysal-sikder

---

🧪 Tested with:  
✅ Chrome, Firefox  
✅ Desktop & Responsive  
✅ Light/Dark Mode ready with Tailwind (optional)
