import { Inter } from "next/font/google"

// We can import local fonts from next:
// import localFont from "next/font/local";

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: "./GreatVibes-Regular.ttf" });

// define your variable fonts
const inter = Inter({ subsets: ["latin"] })

export { inter }
