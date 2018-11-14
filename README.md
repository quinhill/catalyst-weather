# Catalyst UI Take Home Test

Here are a list of guidelines for the take home test.

An app is required to display the weather conditions and forecast for any given zipcode or city (US only).

The app must include:
* Weather data from https://openweathermap.org/api
* Search to get data for any given zip code or city
* Chart the 5 day forecast

You may use any libraries or tools that you deem fit. This is a test to see how you solve a problem. This should take approximately 2 hours to complete.

Once complete, please upload the project to a GitHub account, and provide us with the URL of your repo.

---

Bonus points 

1. Plot the data using the D3 chart lib. Any charting library will do, but we make use of D3 and it is free to use.
2. Add state management to the application. For instance, cache the data returned by the API so you don't make duplicate requests for the same cities.
3. Make use of the built-in ability of the browser to keep a history of pages. Update the URL to track the search value(s) entered. If the user navigates back or forward, have the application reload the data based on the search/query parameters in the page URL.
4. Unit Tests