const nextTranslate = require("next-translate")

/** @type {import("next").NextConfig} */
module.exports = nextTranslate({
    i18n: {
        locales: ["en", "pl"],
        defaultLocale: "en",
    },
    swcMinify: true,
    reactStrictMode: true,
})
