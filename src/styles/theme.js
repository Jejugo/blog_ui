const commonStyles = {
  spacings: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "24px",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    small: "16px",
    medium: "24px",
    large: "32px",
  },
}

export const lightTheme = {
  colors: {
    primary: "#0070f3",
    background: "#ffffff",
    secondaryBackground: "#f8f8f8",
    text: "#000000",
  },
  button: {
    primary: {
      backgroundColor: "#ccc",
      backgroundColorHover: "#2a2a2a",
      color: "black",
      colorHover: "white",
    },
  },
  ...commonStyles,
}

export const darkTheme = {
  colors: {
    primary: "#0f172a",
    background: "#0f172a",
    secondaryBackground: "#010b22",
    text: "#ffffff",
  },
  button: {
    primary: {
      backgroundColor: "#2b2652",
      backgroundColorHover: "#ccc",
      color: "white",
      colorHover: "black",
    },
  },
  ...commonStyles,
}
