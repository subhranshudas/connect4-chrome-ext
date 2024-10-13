# Connect-4 Chrome Extension

This Chrome extension allows users to play the classic Connect-4 game directly in their browser.

## Local Development

To set up the project for local development:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/connect-4-extension.git
   cd connect-4-extension
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Building for Production

To build the extension for production:

1. Run the build command:

   ```
   npm run build
   ```

   This creates a `build` folder with the production-ready files.

## Loading the Extension in Chrome

To load the extension in Chrome for testing:

1. Open Google Chrome and navigate to `chrome://extensions`.

2. Enable "Developer mode" by toggling the switch in the top right corner.

3. Click "Load unpacked" and select the `build` folder created by the production build.

4. The Connect-4 extension should now appear in your list of extensions and in the Chrome toolbar.

## Updating the Extension

After making changes to your code:

1. Run the build command again:

   ```
   npm run build
   ```

2. Go to `chrome://extensions` in Chrome.

3. Find the Connect-4 extension and click the refresh icon.

4. Your changes should now be reflected in the extension.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
