//=========================================================
// Import NPM modules
//=========================================================
const express = require("Express");
const actionsOnGoogleAdapter = require("bot-framework-actions-on-google");

const app = express();

app.use(actionsOnGoogleAdapter("PyobJbySYMU.cwA.X28.noEzQHXj9dnTMD5jD9vF0BaetnxJ3dRyj7Rr4tL6kUM").router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ActionsOnGoogle demo listening on port ${PORT}!`));