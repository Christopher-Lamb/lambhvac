declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.jpg" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  const value: any;
  export default value;
}
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare namespace JSX {
  interface IntrinsicElements {
    "comfort-button": React.DetailedHTMLProps<{ guid: string }>;
  }
}
