/** @type {import("tailwindcss/types/config").PluginCreator} */
module.exports = ({ addUtilities, matchUtilities, theme }) => {
  addUtilities({
    "@keyframes opacity": theme("keyframes.opacity"),
    ".animate-opacity": {
      animationName: "opacity",
      animationTimingFunction: theme("animationTimingFunction.DEFAULT"),
      animationDuration: theme("animationDuration.DEFAULT"),
    },
  });
  matchUtilities(
    {
      "opacity-from": (value) => ({ "--tw-opacity-from": value }),
      "opacity-to": (value) => ({ "--tw-opacity-to": value }),
    },
    { values: theme("opacity") },
  );
};
