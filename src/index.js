const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  ({ addUtilities, matchUtilities, theme }) => {
    addUtilities({
      "@keyframes transform": theme("keyframes.transform"),
      ".animate-transform": {
        animationName: "transform",
        animationTimingFunction: theme("animationTimingFunction.DEFAULT"),
        animationDuration: theme("animationDuration.DEFAULT"),
        "--tw-translate-x-from": "0",
        "--tw-translate-x-to": "0",
        "--tw-translate-y-from": "0",
        "--tw-translate-y-to": "0",
        "--tw-rotate-from": "0",
        "--tw-rotate-to": "0",
        "--tw-skew-x-from": "0",
        "--tw-skew-x-to": "0",
        "--tw-skew-y-from": "0",
        "--tw-skew-y-to": "0",
        "--tw-scale-x-from": "1",
        "--tw-scale-x-to": "1",
        "--tw-scale-y-from": "1",
        "--tw-scale-y-to": "1",
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
        "rotate-to": (value) => ({ "--tw-translate-rotate-to": value }),
      },
      { values: theme("rotate") },
    );
  },
  {
    theme: {
      extend: {
        animationDelay: ({ theme }) => ({ ...theme("transitionDelay") }),
        animationDuration: ({ theme }) => ({ ...theme("transitionDuration") }),
        animationTimingFunction: ({ theme }) => ({
          ...theme("transitionTimingFunction"),
        }),
        keyframes: {
          transform: {
            from: {
              transform:
                "translateX(var(--tw-translate-x-from)) translateY(var(--tw-translate-y-from)) rotate(var(--tw-rotate-from)) skewX(var(--tw-skew-x-from)) skewY(var(--tw-skew-y-from)) scaleX(var(--tw-scale-x-from)) scaleY(var(--tw-scale-y-from))",
            },
            to: {
              transform:
                "translateX(var(--tw-translate-x-to)) translateY(var(--tw-translate-y-to)) rotate(var(--tw-rotate-to)) skewX(var(--tw-skew-x-to)) skewY(var(--tw-skew-y-to)) scaleX(var(--tw-scale-x-to)) scaleY(var(--tw-scale-y-to))",
            },
          },
        },
      },
    },
  },
);
