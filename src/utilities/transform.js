/** @type {import("tailwindcss/types/config").PluginCreator} */
module.exports = ({ addUtilities, matchUtilities, theme }) => {
  addUtilities({
    "@keyframes transform": theme("keyframes.transform"),
    ".animate-transform": {
      animationName: "transform",
      animationTimingFunction: theme("animationTimingFunction.DEFAULT"),
      animationDuration: theme("animationDuration.DEFAULT"),
    },
  });
  ["translate", "skew", "scale"].forEach((transform) => {
    matchUtilities(
      {
        [`${transform}-x-from`]: (value) => ({
          [`--tw-${transform}-x-from`]: value,
        }),
        [`${transform}-y-from`]: (value) => ({
          [`--tw-${transform}-y-from`]: value,
        }),
        [`${transform}-from`]: (value) => ({
          [`--tw-${transform}-x-from`]: value,
          [`--tw-${transform}-y-from`]: value,
        }),
        [`${transform}-x-to`]: (value) => ({
          [`--tw-${transform}-x-to`]: value,
        }),
        [`${transform}-y-to`]: (value) => ({
          [`--tw-${transform}-y-to`]: value,
        }),
        [`${transform}-to`]: (value) => ({
          [`--tw-${transform}-x-to`]: value,
          [`--tw-${transform}-y-to`]: value,
        }),
      },
      { values: theme(transform) },
    );
  });
  matchUtilities(
    {
      "rotate-from": (value) => ({ "--tw-rotate-from": value }),
      "rotate-to": (value) => ({ "--tw-rotate-to": value }),
    },
    { values: theme("rotate") },
  );
};
