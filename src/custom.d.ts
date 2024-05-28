// custom.d.ts
// To declare .png and .svg files as module so the project can view them

declare module "*.png" {
    const value: any;
    export = value;
}

declare module "*.svg" {
    const value: any;
    export = value;
}

