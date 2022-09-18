module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontSize: {
        links: [
          "16px", //font size
          {
            lineHeight: "20px", //line height
            letterSpacing: "-0.6px" //letter spacing
          }
        ]
      }
    }
  },
  plugins: []
};
