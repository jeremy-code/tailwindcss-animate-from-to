const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  (api) => {
    require("./utilities/opacity")(api);
    require("./utilities/shadow")(api);
    require("./utilities/transform")(api);
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
          opacity: {
            from: { opacity: "var(--tw-opacity-from)" },
            to: { opacity: "var(--tw-opacity-to)" },
          },
          shadow: {
            from: { boxShadow: "var(--tw-box-shadow-from)" },
            to: { boxShadow: "var(--tw-box-shadow-to)" },
          },
          transform: {
            from: {
              transform:
                "translateX(var(--tw-translate-x-from, 0)) translateY(var(--tw-translate-y-from, 0)) rotate(var(--tw-rotate-from, 0)) skewX(var(--tw-skew-x-from, 0)) skewY(var(--tw-skew-y-from, 0)) scaleX(var(--tw-scale-x-from, 1)) scaleY(var(--tw-scale-y-from, 1))",
            },
            to: {
              transform:
                "translateX(var(--tw-translate-x-to, 0)) translateY(var(--tw-translate-y-to, 0)) rotate(var(--tw-rotate-to, 0)) skewX(var(--tw-skew-x-to, 0)) skewY(var(--tw-skew-y-to, 0)) scaleX(var(--tw-scale-x-to, 1)) scaleY(var(--tw-scale-y-to, 1))",
            },
          },
        },
      },
    },
  },
);
