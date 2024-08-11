/** @type {import("tailwindcss/types/config").PluginCreator} */
module.exports = ({ addUtilities, matchUtilities, theme }) => {
  addUtilities({
    "@keyframes shadow": theme("keyframes.shadow"),
    ".animate-shadow": {
      animationName: "shadow",
      animationTimingFunction: theme("animationTimingFunction.DEFAULT"),
      animationDuration: theme("animationDuration.DEFAULT"),
    },
  });
  matchUtilities(
    {
      "shadow-from": (value) => ({ "--tw-box-shadow-from": value }),
      "shadow-to": (value) => ({ "--tw-box-shadow-to": value }),
    },
    { values: theme("boxShadow") },
  );
};
