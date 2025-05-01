const paypal =  require("paypal-rest-sdk")



paypal.configure({
    mode : 'sandbox',
    client_id : 'AYYeHT4nc8VVovq31QW-_DnoLK38W66NxIUmQrUHeckjhBQzmlhp72_O3C0O321H6Bd8dTo_3H9tnyNs',
    client_secret :'EII5-JEryBF7FxyeAJ0rPrbppPdHeORdX81ft5emy76IzVHTchxJjEszw-GbTlrON_uNoq9dayeb9XzC',
});

module.exports = paypal;

