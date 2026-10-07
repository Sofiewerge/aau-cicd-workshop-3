require('dotenv').config()
// Settings for the page analytics.
export const analytics = {
  endpoint: "https://analytics.example.com/v1/events",
  api_key: process.env.API_KEY,
};

