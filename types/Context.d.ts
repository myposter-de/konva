import { Canvas } from './Canvas';
import { Shape } from './Shape';
export declare class Context {
    canvas: Canvas;
    _context: CanvasRenderingContext2D;
    traceArr: Array<String>;
    constructor(canvas: Canvas);
    fillShape(shape: Shape): void;
    _fill(shape: any): void;
    strokeShape(shape: Shape): void;
    _stroke(shape: any): void;
    fillStrokeShape(shape: Shape): void;
    getTrace(relaxed: any): string;
    clearTrace(): void;
    _trace(str: any): void;
    reset(): void;
    getCanvas(): Canvas;
    clear(bounds?: any): void;
    _applyLineCap(shape: any): void;
    _applyOpacity(shape: any): void;
    _applyLineJoin(shape: Shape): void;
    setAttr(attr: any, val: any): void;
    arc(a0: any, a1: any, a2: any, a3: any, a4: any, a5: any): void;
    arcTo(a0: any, a1: any, a2: any, a3: any, a4: any): void;
    beginPath(): void;
    bezierCurveTo(a0: any, a1: any, a2: any, a3: any, a4: any, a5: any): void;
    clearRect(a0: any, a1: any, a2: any, a3: any): void;
    clip(): void;
    closePath(): void;
    createImageData(a0: any, a1: any): ImageData;
    createLinearGradient(a0: any, a1: any, a2: any, a3: any): CanvasGradient;
    createPattern(a0: any, a1: any): CanvasPattern;
    createRadialGradient(a0: any, a1: any, a2: any, a3: any, a4: any, a5: any): CanvasGradient;
    drawImage(a0: CanvasImageSource, a1: number, a2: number, a3?: number, a4?: number, a5?: number, a6?: number, a7?: number, a8?: number): void;
    ellipse(a0: number, a1: number, a2: number, a3: number, a4: number, a5: number, a6: number, a7?: boolean): void;
    isPointInPath(x: any, y: any): boolean;
    fill(): void;
    fillRect(x: any, y: any, width: any, height: any): void;
    strokeRect(x: any, y: any, width: any, height: any): void;
    fillText(a0: any, a1: any, a2: any): void;
    measureText(text: any): TextMetrics;
    getImageData(a0: any, a1: any, a2: any, a3: any): ImageData;
    lineTo(a0: any, a1: any): void;
    moveTo(a0: any, a1: any): void;
    rect(a0: any, a1: any, a2: any, a3: any): void;
    putImageData(a0: any, a1: any, a2: any): void;
    quadraticCurveTo(a0: any, a1: any, a2: any, a3: any): void;
    restore(): void;
    rotate(a0: any): void;
    save(): void;
    scale(a0: any, a1: any): void;
    setLineDash(a0: any): void;
    getLineDash(): number[];
    setTransform(a0: any, a1: any, a2: any, a3: any, a4: any, a5: any): void;
    stroke(): void;
    strokeText(a0: any, a1: any, a2: any, a3: any): void;
    transform(a0: any, a1: any, a2: any, a3: any, a4: any, a5: any): void;
    translate(a0: any, a1: any): void;
    _enableTrace(): void;
    _applyGlobalCompositeOperation(node: any): void;
}
export declare class SceneContext extends Context {
    _fillColor(shape: any): void;
    _fillPattern(shape: any): void;
    _fillLinearGradient(shape: any): void;
    _fillRadialGradient(shape: any): void;
    _fill(shape: any): void;
    _strokeLinearGradient(shape: any): void;
    _stroke(shape: any): void;
    _applyShadow(shape: any): void;
}
export declare class HitContext extends Context {
    _fill(shape: any): void;
    strokeShape(shape: Shape): void;
    _stroke(shape: any): void;
}
