// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../@material/dom/focus-trap
//   ../../@material/base/component
//   ../../@material/list/component
//   ../../@material/base/foundation

declare module '@material/drawer' {
    /**
      * @license
      * Copyright 2019 Google Inc.
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
    import * as util from '@material/drawer/util';
    export { util };
    export * from '@material/drawer/adapter';
    export * from '@material/drawer/component';
    export * from '@material/drawer/constants';
    export * from '@material/drawer/dismissible/foundation';
    export * from '@material/drawer/modal/foundation';
}

declare module '@material/drawer/util' {
    /**
      * @license
      * Copyright 2016 Google Inc.
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
    import { FocusOptions, FocusTrap } from '@material/dom/focus-trap';
    export type MDCDrawerFocusTrapFactory = (element: HTMLElement, options: FocusOptions) => FocusTrap;
    export function createFocusTrapInstance(surfaceEl: HTMLElement, focusTrapFactory: MDCDrawerFocusTrapFactory): FocusTrap;
}

declare module '@material/drawer/adapter' {
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCDrawerAdapter {
            /**
                * Adds a class to the root Element.
                */
            addClass(className: string): void;
            /**
                * Removes a class from the root Element.
                */
            removeClass(className: string): void;
            /**
                * Returns true if the root Element contains the given class.
                */
            hasClass(className: string): boolean;
            /**
                * Returns true if the element contains the given class.
                * @param element target element to verify class name
                * @param className class name
                */
            elementHasClass(element: Element, className: string): boolean;
            /**
                * Saves the focus of currently active element.
                */
            saveFocus(): void;
            /**
                * Restores focus to element previously saved with 'saveFocus'.
                */
            restoreFocus(): void;
            /**
                * Focuses the active / selected navigation item.
                */
            focusActiveNavigationItem(): void;
            /**
                * Emits a custom event "MDCDrawer:closed" denoting the drawer has closed.
                */
            notifyClose(): void;
            /**
                * Emits a custom event "MDCDrawer:opened" denoting the drawer has opened.
                */
            notifyOpen(): void;
            /**
                * Traps focus on root element and focuses the active navigation element.
                */
            trapFocus(): void;
            /**
                * Releases focus trap from root element which was set by `trapFocus`
                * and restores focus to where it was prior to calling `trapFocus`.
                */
            releaseFocus(): void;
    }
}

declare module '@material/drawer/component' {
    /**
        * @license
        * Copyright 2016 Google Inc.
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
    import { MDCList, MDCListFactory } from '@material/list/component';
    import { MDCDismissibleDrawerFoundation } from '@material/drawer/dismissible/foundation';
    import { MDCDrawerFocusTrapFactory } from '@material/drawer/util';
    /**
        * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
        * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
        */
    export class MDCDrawer extends MDCComponent<MDCDismissibleDrawerFoundation> {
            static attachTo(root: Element): MDCDrawer;
            /**
                * @return boolean Proxies to the foundation's `open`/`close` methods.
                * Also returns true if drawer is in the open position.
                */
            get open(): boolean;
            /**
                * Toggles the drawer open and closed.
                */
            set open(isOpen: boolean);
            get list(): MDCList | undefined;
            initialize(focusTrapFactory?: MDCDrawerFocusTrapFactory, listFactory?: MDCListFactory): void;
            initialSyncWithDOM(): void;
            destroy(): void;
            getDefaultFoundation(): MDCDismissibleDrawerFoundation;
    }
}

declare module '@material/drawer/constants' {
    /**
      * @license
      * Copyright 2016 Google Inc.
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
    const cssClasses: {
        ANIMATE: string;
        CLOSING: string;
        DISMISSIBLE: string;
        MODAL: string;
        OPEN: string;
        OPENING: string;
        ROOT: string;
    };
    const strings: {
        APP_CONTENT_SELECTOR: string;
        CLOSE_EVENT: string;
        OPEN_EVENT: string;
        SCRIM_SELECTOR: string;
        LIST_SELECTOR: string;
        LIST_ITEM_ACTIVATED_SELECTOR: string;
    };
    export { cssClasses, strings };
}

declare module '@material/drawer/dismissible/foundation' {
    /**
        * @license
        * Copyright 2018 Google Inc.
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
    import { MDCDrawerAdapter } from '@material/drawer/adapter';
    export class MDCDismissibleDrawerFoundation extends MDCFoundation<MDCDrawerAdapter> {
            static get strings(): {
                    APP_CONTENT_SELECTOR: string;
                    CLOSE_EVENT: string;
                    OPEN_EVENT: string;
                    SCRIM_SELECTOR: string;
                    LIST_SELECTOR: string;
                    LIST_ITEM_ACTIVATED_SELECTOR: string;
            };
            static get cssClasses(): {
                    ANIMATE: string;
                    CLOSING: string;
                    DISMISSIBLE: string;
                    MODAL: string;
                    OPEN: string;
                    OPENING: string;
                    ROOT: string;
            };
            static get defaultAdapter(): MDCDrawerAdapter;
            constructor(adapter?: Partial<MDCDrawerAdapter>);
            destroy(): void;
            /**
                * Opens the drawer from the closed state.
                */
            open(): void;
            /**
                * Closes the drawer from the open state.
                */
            close(): void;
            /**
                * Returns true if the drawer is in the open position.
                * @return true if drawer is in open state.
                */
            isOpen(): boolean;
            /**
                * Returns true if the drawer is animating open.
                * @return true if drawer is animating open.
                */
            isOpening(): boolean;
            /**
                * Returns true if the drawer is animating closed.
                * @return true if drawer is animating closed.
                */
            isClosing(): boolean;
            /**
                * Keydown handler to close drawer when key is escape.
                */
            handleKeydown(evt: KeyboardEvent): void;
            /**
                * Handles the `transitionend` event when the drawer finishes opening/closing.
                */
            handleTransitionEnd(evt: TransitionEvent): void;
            /**
                * Extension point for when drawer finishes open animation.
                */
            protected opened_(): void;
            /**
                * Extension point for when drawer finishes close animation.
                */
            protected closed_(): void;
    }
    export default MDCDismissibleDrawerFoundation;
}

declare module '@material/drawer/modal/foundation' {
    /**
        * @license
        * Copyright 2018 Google Inc.
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
    import { MDCDismissibleDrawerFoundation } from '@material/drawer/dismissible/foundation';
    export class MDCModalDrawerFoundation extends MDCDismissibleDrawerFoundation {
            /**
                * Handles click event on scrim.
                */
            handleScrimClick(): void;
            /**
                * Called when drawer finishes open animation.
                */
            protected opened_(): void;
            /**
                * Called when drawer finishes close animation.
                */
            protected closed_(): void;
    }
    export default MDCModalDrawerFoundation;
}

