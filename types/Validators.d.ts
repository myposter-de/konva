export declare function RGBComponent(val: number): number;
export declare function alphaComponent(val: number): number;
export declare function getNumberValidator(): <T>(val: T, attr: string) => void | T;
export declare function getNumberOrAutoValidator(): <T extends string>(val: T, attr: string) => void | T;
export declare function getStringValidator(): (val: any, attr: string) => any;
export declare function getFunctionValidator(): (val: any, attr: string) => any;
export declare function getNumberArrayValidator(): (val: any, attr: string) => any;
export declare function getBooleanValidator(): (val: any, attr: string) => any;
export declare function getComponentValidator(components: any): (val: any, attr: string) => any;
