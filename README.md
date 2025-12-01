# Hapabox Clone

This project is a clone of the Hapabox website, built using Next.js and TypeScript. It aims to replicate the core features and design of the original site while providing a solid foundation for further development and customization.

## Project Structure

The project is organized as follows:

```
hapabox-clone
├── src
│   ├── pages
│   │   ├── index.tsx         # Main landing page
│   │   ├── about.tsx         # About page
│   │   ├── products
│   │   │   └── index.tsx     # Products listing page
│   │   └── contact.tsx       # Contact page
│   ├── components
│   │   ├── Header.tsx        # Header component with navigation
│   │   ├── Footer.tsx        # Footer component with copyright info
│   │   ├── Hero.tsx          # Hero component for the landing page
│   │   ├── ProductCard.tsx    # Component for displaying individual products
│   │   └── Testimonials.tsx   # Component for showcasing customer reviews
│   ├── styles
│   │   ├── globals.css        # Global CSS styles
│   │   └── components.module.css # Scoped styles for components
│   ├── lib
│   │   └── api.ts             # API functions for data fetching
│   ├── hooks
│   │   └── useFetch.ts        # Custom hook for data fetching
│   └── types
│       └── index.ts           # TypeScript interfaces and types
├── public
│   └── robots.txt             # Instructions for web crawlers
├── package.json                # NPM configuration file
├── tsconfig.json              # TypeScript configuration file
├── next.config.js             # Next.js configuration file
├── .eslintrc.json             # ESLint configuration file
├── .prettierrc                # Prettier configuration file
├── .gitignore                 # Git ignore file
└── README.md                  # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd hapabox-clone
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Features

- Responsive design that adapts to various screen sizes.
- Dynamic product listing with individual product details.
- About and Contact pages for user engagement.
- Testimonials section to showcase customer feedback.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.