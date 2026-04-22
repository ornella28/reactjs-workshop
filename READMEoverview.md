# React Workshop 1 – Product Listing App

## 📌 Overview

This project is a React application built using:

* React + Vite
* TypeScript
* Tailwind CSS
* lucide-react

The goal was to recreate a product listing page from a static HTML file and convert it into a structured React application using reusable components and props.

---

## 🚀 How to Run the Project

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open in browser:

```
http://localhost:5173
```

---

## 🧱 Project Structure

```
src/
  components/
  data/
  types/
  App.tsx
  main.tsx
  index.css
```

### Explanation

* **components/** → All UI components
* **data/** → Static product data
* **types/** → TypeScript types
* **App.tsx** → Main layout of the page

---

## 🧩 Components

### 1. App.tsx

Responsible for composing the page layout.

It combines all main sections:

* Header
* SidebarFilters
* ProductSection
* Newsletter
* Footer

---

### 2. Header.tsx

Displays:

* Logo
* Navigation links
* Search input
* Cart and user icons

Uses icons from `lucide-react`.

---

### 3. SidebarFilters.tsx

Displays filter options:

* Categories
* Price range
* Availability
* Promotional card

Currently static (no filtering logic yet).

---

### 4. ProductSection.tsx

Main container for the product area.

Responsibilities:

* Displays title and sort dropdown
* Imports product data
* Renders products using `.map()`
* Includes pagination

---

### 5. ProductCard.tsx

Reusable component that displays a single product.

It receives product data via props and renders:

* Image
* Category
* Title
* Rating
* Price
* Badge (e.g. Discount, New)
* Action buttons

---

### 6. Pagination.tsx

Displays page navigation UI.

Currently static but separated for future logic.

---

### 7. Newsletter.tsx

Displays a subscription section with:

* Heading
* Description
* Email input
* Subscribe button

---

### 8. Footer.tsx

Displays:

* Brand section
* Navigation links
* Social icons
* Copyright

---

## 📦 Props Usage

Props are used to pass data into reusable components.

### Example: ProductCard

```tsx
<ProductCard product={product} />
```

The `ProductCard` receives a `product` object as a prop:

```ts
type ProductCardProps = {
  product: Product
}
```

This allows the same component to render different products dynamically.

---

## 📊 Data Handling

Product data is stored in:

```
src/data/products.ts
```

This separates data from UI and makes it easy to:

* add new products
* update content
* connect to an API in the future

---

## 🧠 TypeScript Usage

A `Product` type is defined in:

```
src/types/product.ts
```

This ensures:

* consistent data structure
* type safety
* better developer experience

Example:

```ts
export type Product = {
  id: number
  title: string
  category: string
  image: string
  rating: number
  price: number
  badge: string
}
```

---

## 🎨 Styling

Styling is done using Tailwind CSS.

Benefits:

* utility-first approach
* fast development
* no custom CSS needed for most styling

---

## 🎯 Key Concepts Learned

* Component-based architecture
* Props for passing data
* Reusable UI components
* Data-driven rendering using `.map()`
* TypeScript for type safety
* Tailwind for styling
* Using icon libraries in React

---

## ✅ Conclusion

This project demonstrates how to transform a static HTML layout into a structured React application using best practices such as component separation, props, and reusable UI patterns.
