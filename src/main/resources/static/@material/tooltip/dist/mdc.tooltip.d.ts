// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../@material/base/types
//   ../../@material/base/component
//   ../../@material/base/foundation

declare module '@material/tooltip' {
    /**
      * @license
      * Copyright 2020 Google Inc.
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      */
    export * from '@material/tooltip/adapter';
    export * from '@material/tooltip/component';
    export * from '@material/tooltip/foundation';
    export * from '@material/tooltip/constants';
    export * from '@material/tooltip/types';
}

declare module '@material/tooltip/adapter' {
    /**
        * @license
        * Copyright 2020 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { EventType, SpecificEventListener } from '@material/base/types';
    import { CssClasses } from '@material/tooltip/constants';
    /**
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCTooltipAdapter {
            /**
                * @return the attribute string if present on the root element, null
                * otherwise.
                */
            getAttribute(attr: string): string | null;
            /**
                * Sets an attribute on the root element.
                */
            setAttribute(attr: string, value: string): void;
            /**
                * Adds a class onto the root element.
                */
            addClass(className: CssClasses): void;
            /**
                * @return whether or not the root element has the provided className.
                */
            hasClass(className: CssClasses): boolean;
            /**
                * Removes a class from the root element.
                */
            removeClass(className: CssClasses): void;
            /**
                * @return the value of the given computed style property on the root element.
                */
            getComputedStyleProperty(propertyName: string): string;
            /**
                * Sets the property value of the given style property on the root element.
                */
            setStyleProperty(propertyName: string, value: string): void;
            /**
                * Sets the property value of the given style property on the tooltip's
                * surface element (indicated by the "mdc-tooltip__surface" class).
                */
            setSurfaceStyleProperty(propertyName: string, value: string): void;
            /**
                * @return the width of the viewport.
                */
            getViewportWidth(): number;
            /**
                * @return the height of the viewport.
                */
            getViewportHeight(): number;
            /**
                * @return the width and height of the tooltip element.
                */
            getTooltipSize(): {
                    width: number;
                    height: number;
            };
            /**
                * @return the ClientRect for the anchor element.
                */
            getAnchorBoundingRect(): ClientRect | null;
            /**
                * @return the ClientRect for the parent of the tooltip element.
                */
            getParentBoundingRect(): ClientRect | null;
            /**
                * @return the attribute string if present on the anchor element, null
                * otherwise.
                */
            getAnchorAttribute(attr: string): string | null;
            /**
                * Sets an attribute on the anchor element.
                */
            setAnchorAttribute(attr: string, value: string): void;
            /**
                * @return true if the text direction is right-to-left.
                */
            isRTL(): boolean;
            /**
                * Checks if element is contained within the anchor element.
                */
            anchorContainsElement(element: HTMLElement): boolean;
            /**
                * Checks if element is contained within the tooltip element.
                */
            tooltipContainsElement(element: HTMLElement): boolean;
            /**
                * Sets focus on the anchor element.
                */
            focusAnchorElement(): void;
            /**
                * Registers an event listener to the root element.
                */
            registerEventHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            /**
                * Deregisters an event listener to the root element.
                */
            deregisterEventHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            /**
                * Registers an event listener to the anchor element.
                */
            registerAnchorEventHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            /**
                * Deregisters an event listener to the anchor element.
                */
            deregisterAnchorEventHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            /**
                * Registers an event listener to the document body.
                */
            registerDocumentEventHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            /**
                * Deregisters an event listener to the document body.
                */
            deregisterDocumentEventHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            /**
                * Registers an event listener to the window.
                */
            registerWindowEventHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            /**
                * Deregisters an event listener to the window.
                */
            deregisterWindowEventHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            /**
                * Notification that the tooltip element has been fully hidden. Typically used
                * to wait for the hide animation to complete.
                */
            notifyHidden(): void;
            /**
                * @return the width and height of the tooltip caret element if it exists.
                */
            getTooltipCaretSize(): {
                    width: number;
                    height: number;
            } | null;
            /**
                * Sets the property value of the given style property on both the caret-top
                * and caret-bottom elements.
                */
            setTooltipCaretStyle(propertyName: string, value: string): void;
            /**
                * Clears all inline styles set on the caret-top and caret-bottom elements.
                */
            clearTooltipCaretStyles(): void;
    }
}

declare module '@material/tooltip/component' {
    /**
        * @license
        * Copyright 2020 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { MDCComponent } from '@material/base/component';
    import { EventType, SpecificEventListener } from '@material/base/types';
    import { AnchorBoundaryType, PositionWithCaret, XPosition, YPosition } from '@material/tooltip/constants';
    import { MDCTooltipFoundation } from '@material/tooltip/foundation';
    export class MDCTooltip extends MDCComponent<MDCTooltipFoundation> {
            static attachTo(root: Element): MDCTooltip;
            initialize(): void;
            initialSyncWithDOM(): void;
            destroy(): void;
            setTooltipPosition(position: {
                    xPos?: XPosition;
                    yPos?: YPosition;
                    withCaretPos?: PositionWithCaret;
            }): void;
            setAnchorBoundaryType(type: AnchorBoundaryType): void;
            hide(): void;
            isShown(): void;
            /**
                * Method that allows user to specify additional elements that should have a
                * scroll event listener attached to it. This should be used in instances
                * where the anchor element is placed inside a scrollable container (that is
                * not the body element), and will ensure that the tooltip will stay attached
                * to the anchor on scroll.
                */
            attachScrollHandler(addEventListenerFn: <K extends EventType>(event: K, handler: SpecificEventListener<K>) => void): void;
            /**
                * Must be used in conjunction with #attachScrollHandler. Removes the scroll
                * event handler from elements on the page.
                */
            removeScrollHandler(removeEventHandlerFn: <K extends EventType>(event: K, handler: SpecificEventListener<K>) => void): void;
            getDefaultFoundation(): MDCTooltipFoundation;
    }
}

declare module '@material/tooltip/foundation' {
    /**
        * @license
        * Copyright 2020 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { MDCFoundation } from '@material/base/foundation';
    import { EventType, SpecificEventListener } from '@material/base/types';
    import { MDCTooltipAdapter } from '@material/tooltip/adapter';
    import { AnchorBoundaryType, PositionWithCaret, XPosition, YPosition } from '@material/tooltip/constants';
    export class MDCTooltipFoundation extends MDCFoundation<MDCTooltipAdapter> {
            static get defaultAdapter(): MDCTooltipAdapter;
            constructor(adapter?: Partial<MDCTooltipAdapter>);
            init(): void;
            isShown(): boolean;
            isRich(): boolean;
            isPersistent(): boolean;
            handleAnchorMouseEnter(): void;
            handleAnchorTouchstart(): void;
            handleAnchorTouchend(): void;
            handleAnchorFocus(evt: FocusEvent): void;
            handleAnchorMouseLeave(): void;
            handleAnchorClick(): void;
            handleDocumentClick(evt: MouseEvent): void;
            handleKeydown(evt: KeyboardEvent): void;
            show(): void;
            hide(): void;
            handleTransitionEnd(): void;
            setTooltipPosition(position: {
                    xPos?: XPosition;
                    yPos?: YPosition;
                    withCaretPos?: PositionWithCaret;
            }): void;
            setAnchorBoundaryType(type: AnchorBoundaryType): void;
            /**
                * Method that allows user to specify additional elements that should have a
                * scroll event listener attached to it. This should be used in instances
                * where the anchor element is placed inside a scrollable container, and will
                * ensure that the tooltip will stay attached to the anchor on scroll.
                */
            attachScrollHandler(addEventListenerFn: <K extends EventType>(event: K, handler: SpecificEventListener<K>) => void): void;
            /**
                * Must be used in conjunction with #attachScrollHandler. Removes the scroll
                * event handler from elements on the page.
                */
            removeScrollHandler(removeEventHandlerFn: <K extends EventType>(event: K, handler: SpecificEventListener<K>) => void): void;
            destroy(): void;
    }
    export default MDCTooltipFoundation;
}

declare module '@material/tooltip/constants' {
    /**
        * @license
        * Copyright 2020 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    enum CssClasses {
            RICH = "mdc-tooltip--rich",
            SHOWN = "mdc-tooltip--shown",
            SHOWING = "mdc-tooltip--showing",
            SHOWING_TRANSITION = "mdc-tooltip--showing-transition",
            HIDE = "mdc-tooltip--hide",
            HIDE_TRANSITION = "mdc-tooltip--hide-transition",
            MULTILINE_TOOLTIP = "mdc-tooltip--multiline",
            SURFACE = "mdc-tooltip__surface",
            TOOLTIP_CARET_TOP = "mdc-tooltip__caret-surface-top",
            TOOLTIP_CARET_BOTTOM = "mdc-tooltip__caret-surface-bottom"
    }
    const numbers: {
            BOUNDED_ANCHOR_GAP: number;
            UNBOUNDED_ANCHOR_GAP: number;
            MIN_VIEWPORT_TOOLTIP_THRESHOLD: number;
            HIDE_DELAY_MS: number;
            SHOW_DELAY_MS: number;
            MIN_HEIGHT: number;
            MAX_WIDTH: number;
            CARET_INDENTATION: number;
    };
    const attributes: {
            ARIA_EXPANDED: string;
            ARIA_HASPOPUP: string;
            PERSISTENT: string;
            SCROLLABLE_ANCESTOR: string;
            HAS_CARET: string;
    };
    const events: {
            HIDDEN: string;
    };
    /** Enum for possible tooltip positioning relative to its anchor element. */
    enum XPosition {
            DETECTED = 0,
            START = 1,
            CENTER = 2,
            END = 3
    }
    enum YPosition {
            DETECTED = 0,
            ABOVE = 1,
            BELOW = 2
    }
    /**
        * Enum for possible anchor boundary types. This determines the gap between the
        * bottom of the anchor and the tooltip element.
        * Bounded anchors have an identifiable boundary (e.g. buttons).
        * Unbounded anchors don't have a visually declared boundary (e.g. plain text).
        */
    enum AnchorBoundaryType {
            BOUNDED = 0,
            UNBOUNDED = 1
    }
    const strings: {
            LEFT: string;
            RIGHT: string;
            CENTER: string;
            TOP: string;
            BOTTOM: string;
    };
    /**
        * Enum for possible positions of a tooltip with caret (this specifies the
        * positioning of the tooltip relative to the anchor -- the position of the
        * caret will follow that of the tooltip). This can NOT be combined with the
        * above X/YPosition options. Naming for the enums follows: (vertical
        * placement)_(horizontal placement).
        */
    enum PositionWithCaret {
            DETECTED = 0,
            ABOVE_START = 1,
            ABOVE_CENTER = 2,
            ABOVE_END = 3,
            TOP_SIDE_START = 4,
            CENTER_SIDE_START = 5,
            BOTTOM_SIDE_START = 6,
            TOP_SIDE_END = 7,
            CENTER_SIDE_END = 8,
            BOTTOM_SIDE_END = 9,
            BELOW_START = 10,
            BELOW_CENTER = 11,
            BELOW_END = 12
    }
    export { CssClasses, numbers, attributes, events, XPosition, AnchorBoundaryType, YPosition, strings, PositionWithCaret, };
}

declare module '@material/tooltip/types' {
    /**
        * Available options for how the tooltip element should be shown.
        */
    export interface ShowTooltipOptions {
            readonly hideFromScreenreader: boolean;
    }
}

