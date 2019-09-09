import { Collection } from './Util';
import { Node } from './Node';
import { Container } from './Container';
import { Stage } from './Stage';
import { Layer } from './Layer';
import { FastLayer } from './FastLayer';
import { Group } from './Group';
import { Shape } from './Shape';
import { Animation } from './Animation';
import { Tween } from './Tween';
import { Context } from './Context';
import { Canvas } from './Canvas';
export declare const Konva: {
    _global: any;
    version: string;
    isBrowser: boolean;
    isUnminified: boolean;
    dblClickWindow: number;
    getAngle(angle: any): any;
    enableTrace: boolean;
    _pointerEventsEnabled: boolean;
    hitOnDragEnabled: boolean;
    captureTouchEventsEnabled: boolean;
    listenClickTap: boolean;
    inDblClickWindow: boolean;
    pixelRatio: any;
    dragDistance: number;
    angleDeg: boolean;
    showWarnings: boolean;
    dragButtons: number[];
    isDragging(): any;
    isDragReady(): boolean;
    UA: {
        browser: any;
        version: any;
        isIE: number | boolean;
        mobile: boolean;
        ieMobile: boolean;
    };
    document: any;
    _injectGlobal(Konva: any): void;
    _parseUA: (userAgent: any) => {
        browser: any;
        version: any;
        isIE: number | boolean;
        mobile: boolean;
        ieMobile: boolean;
    };
} & {
    Collection: typeof Collection;
    Util: {
        _isElement(obj: any): boolean;
        _isFunction(obj: any): boolean;
        _isPlainObject(obj: any): boolean;
        _isArray(obj: any): boolean;
        _isNumber(obj: any): boolean;
        _isString(obj: any): boolean;
        _isBoolean(obj: any): boolean;
        isObject(val: any): boolean;
        isValidSelector(selector: any): boolean;
        _sign(number: number): 1 | 0 | -1;
        requestAnimFrame(callback: Function): void;
        createCanvasElement(): HTMLCanvasElement;
        createImageElement(): HTMLImageElement;
        _isInDocument(el: any): boolean;
        _simplifyArray(arr: any[]): any[];
        _urlToImage(url: string, callback: Function): void;
        _rgbToHex(r: number, g: number, b: number): string;
        _hexToRgb(hex: string): {
            r: number;
            g: number;
            b: number;
        };
        getRandomColor(): string;
        get(val: any, def: any): any;
        getRGB(color: string): any;
        colorToRGBA(str: string): {
            r: any;
            g: any;
            b: any;
            a: number;
        };
        _namedColorToRBA(str: string): {
            r: any;
            g: any;
            b: any;
            a: number;
        };
        _rgbColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        _rgbaColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        _hex6ColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        _hex3ColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        _hslColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        haveIntersection(r1: import("./types").IRect, r2: import("./types").IRect): boolean;
        cloneObject<Any>(obj: Any): Any;
        cloneArray(arr: any[]): any[];
        _degToRad(deg: number): number;
        _radToDeg(rad: number): number;
        _capitalize(str: string): string;
        throw(str: string): never;
        error(str: string): void;
        warn(str: string): void;
        extend(child: any, parent: any): void;
        _getControlPoints(x0: any, y0: any, x1: any, y1: any, x2: any, y2: any, t: any): any[];
        _expandPoints(p: any, tension: any): any[];
        each(obj: any, func: any): void;
        _inRange(val: any, left: any, right: any): boolean;
        _getProjectionToSegment(x1: any, y1: any, x2: any, y2: any, x3: any, y3: any): any[];
        _getProjectionToLine(pt: import("./Util").Point, line: any, isClosed: any): import("./Util").Point;
        _prepareArrayForTween(startArray: any, endArray: any, isClosed: any): any[];
        _prepareToStringify(obj: any): any;
        _assign<T, U>(target: T, source: U): T & U;
        _getFirstPointerId(evt: any): any;
    };
    Node: typeof Node;
    ids: any;
    names: any;
    Container: typeof Container;
    Stage: typeof Stage;
    stages: Stage[];
    Layer: typeof Layer;
    FastLayer: typeof FastLayer;
    Group: typeof Group;
    DD: {
        readonly isDragging: boolean;
        justDragged: boolean;
        readonly node: Node<import("./Node").NodeConfig>;
        _dragElements: Map<number, {
            node: Node<import("./Node").NodeConfig>;
            startPointerPos: import("./types").Vector2d;
            offset: import("./types").Vector2d;
            pointerId?: number;
            dragStatus: "ready" | "dragging" | "stopped";
        }>;
        _drag(evt: any): void;
        _endDragBefore(evt: any): void;
        _endDragAfter(evt: any): void;
    };
    Shape: typeof Shape;
    shapes: {};
    Animation: typeof Animation;
    Tween: typeof Tween;
    Easings: {
        BackEaseIn(t: any, b: any, c: any, d: any): any;
        BackEaseOut(t: any, b: any, c: any, d: any): any;
        BackEaseInOut(t: any, b: any, c: any, d: any): any;
        ElasticEaseIn(t: any, b: any, c: any, d: any, a: any, p: any): any;
        ElasticEaseOut(t: any, b: any, c: any, d: any, a: any, p: any): any;
        ElasticEaseInOut(t: any, b: any, c: any, d: any, a: any, p: any): any;
        BounceEaseOut(t: any, b: any, c: any, d: any): any;
        BounceEaseIn(t: any, b: any, c: any, d: any): any;
        BounceEaseInOut(t: any, b: any, c: any, d: any): any;
        EaseIn(t: any, b: any, c: any, d: any): any;
        EaseOut(t: any, b: any, c: any, d: any): any;
        EaseInOut(t: any, b: any, c: any, d: any): any;
        StrongEaseIn(t: any, b: any, c: any, d: any): any;
        StrongEaseOut(t: any, b: any, c: any, d: any): any;
        StrongEaseInOut(t: any, b: any, c: any, d: any): any;
        Linear(t: any, b: any, c: any, d: any): any;
    };
    Context: typeof Context;
    Canvas: typeof Canvas;
};
