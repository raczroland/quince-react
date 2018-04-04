# QuinceAngular

## Used technologies

 * React
 * Redux
 * Bootstrap
 * Font Awesome
 * react-native-svg-charts

## Notes

These are some decisions for the simplicity (or because it was not specified).

 * The app is mocking the backend.
 * In the form the only required input is the name.
 * The JSON contains an entry with a string age (":)"). For this reason and because the mockup shows a text input for the age:
   * The input has a text type. In a real-world scenario it should have a number type with a validator.
   * The chart gets a filtered data set.

## Development mode

To run the app in development mode, first you need to install the required packages:

`npm install`

Then you can start the application:

`npm start`

If you are using the default settings, navigate to `http://localhost:3000/`.

## Production mode

To build the application, you have to use (after `npm install`):

`npm run build`

After this, the files that you need will be in the `build` folder. Simply copy all of these files to a server, or you can use a command-line server in `build`:

`http-server`

You have to install this package first globally: `npm install http-server -g`