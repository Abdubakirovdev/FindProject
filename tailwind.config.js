module.exports = {
    important: true,
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            screens: {
                "768": "100%"
            }
        },
        extend: {},
        screens: {
            "450": {"max": "451px"},
            "576": {"min": "451px","max": "576px"},
            "640": {"min": "577px","max": "640px"},
            "768": {"min": "641px","max": "768px"},
            "max-768": {"max": "768px"},
            "992": {"min": "769px", "max": "992px"},
            "max-992": {"max": "992px"},
            "1024": {"min": "993px", "max": "1024px"},
            "1200": {"min": "1025px","max": "1200px"},
            "1440": {"min": "1201px", "max": "1440px"}
        }
    },
    plugins: []
}