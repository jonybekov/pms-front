import InterRegular from "@app/assets/fonts/Inter-Regular.ttf";
import InterMedium from "@app/assets/fonts/Inter-Medium.ttf";
import InterSemiBold from "@app/assets/fonts/Inter-SemiBold.ttf";
import InterBold from "@app/assets/fonts/Inter-Bold.ttf";

export const globalStyles = [
  {
    ":root": {
      fontSynthesis: "none",
      "text-rendering": "optimizeLegibility",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      "-webkit-text-size-adjust": "100%",
    },
    "@font-face": {
      fontFamily: "Inter",
      src: `url('${InterRegular}') format("ttf")`,
      fontWeight: 400,
      fontStyle: "normal",
    },
  },
  {
    "@font-face": {
      fontFamily: "Inter",
      src: `url('${InterMedium}') format("ttf")`,
      fontWeight: 500,
      fontStyle: "normal",
    },
  },
  {
    "@font-face": {
      fontFamily: "Inter",
      src: `url('${InterSemiBold}') format("ttf")`,
      fontWeight: 600,
      fontStyle: "normal",
    },
  },
  {
    "@font-face": {
      fontFamily: "Inter",
      src: `url('${InterBold}') format("ttf")`,
      fontWeight: 700,
      fontStyle: "normal",
    },
  },
];
