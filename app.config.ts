export default defineAppConfig({
  ui: {
    primary: "red",
    gray: "zinc",
    tooltip: {
      default: {
        openDelay: 500,
      },
    },
    variables: {
      light: {
        background: "var(--color-gray-50)",
      },
      dark: {
        background: "var(--color-gray-950)",
      },
    },
    icons: {
      dynamic: true,
    },
    button: {
      rounded: "rounded",
      default: {
        size: "md",
        color: "black",
      },
    },
    input: {
      rounded: "rounded",
    },
    header: {
      wrapper: "bg-gray-50 dark:bg-gray-950",
      links: {
        wrapper:
          "ring-1 ring-gray-200 dark:ring-gray-800 px-3 gap-x-0 rounded-full",
        base: "py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity",
        active: "text-gray-900 dark:text-white after:opacity-100",
        inactive:
          "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
      },
    },
    Landinghero: {
      wrapper: "py-5 sm:py-10 md:py-10 relative",
      container: "gap-16 sm:gap-y-10 flex flex-col",
      base: "text-center",
      headline: "mb-10",
      title:
        "text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",
      description:
        "mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",
      links: "mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3",
    },
    pricing: {
      card: {
        highlight: "ring-gray-900 dark:ring-white",
        features: {
          item: {
            icon: {
              base: "text-gray-900 dark:text-white",
            },
          },
        },
      },
    },
  },
});
