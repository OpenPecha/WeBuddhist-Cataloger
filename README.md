# WeBuddhist Cataloger

This is the frontend application for the Webuddhist Cataloger, designed to manage and publish pecha text to the Webuddhist Study Platform.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OpenPecha/WeBuddhist-Cataloger.git
   ```

2. Navigate to app-pecha-frontend directory:

   ```bash
   cd webuddhist-cataloger
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create your environment variables file:

   ```bash
   cp .env.example .env
   ```

## Development

1. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:5173](http://localhost:5173)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Tech Stack

- React 19
- React Router DOM
- Auth0 React
- Tanstack Query
- Vite

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
