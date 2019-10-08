module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "react-app",
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "overrides": {
                    "constructors": "off"
                }
            }
        ],
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/no-angle-bracket-type-assertion": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-triple-slash-reference": "error",
        "@typescript-eslint/no-use-before-declare": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-interface": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "complexity": "off",
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "guard-for-in": "error",
        "max-classes-per-file": [
            "error",
            1
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-debugger": "error",
        "no-empty": "error",
        "no-empty-functions": "error",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": "error",
        "prefer-const": "error",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "radix": "error",
        "some-rule": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "constructor": "never",
                "method": "never",
                "named": "never"
            }
        ],
        "use-isnan": "error",
        "valid-typeof": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "align": [
                        true,
                        "parameters",
                        "statements"
                    ],
                    "comment-format": [
                        true,
                        "check-space"
                    ],
                    "import-spacing": true,
                    "jsdoc-format": true,
                    "max-line-length": [
                        true,
                        120
                    ],
                    "no-reference-import": true,
                    "no-shadowed-variable": true,
                    "no-trailing-whitespace": true,
                    "no-unused-expression": true,
                    "object-literal-sort-keys": true,
                    "one-line": [
                        true,
                        "check-catch",
                        "check-else",
                        "check-finally",
                        "check-open-brace",
                        "check-whitespace"
                    ],
                    "only-arrow-functions": [
                        true,
                        "allow-declarations",
                        "allow-named-functions"
                    ],
                    "ordered-imports": [
                        true,
                        {
                            "import-sources-order": "case-insensitive",
                            "module-source-path": "full",
                            "named-imports-order": "case-insensitive"
                        }
                    ],
                    "quotemark": [
                        true,
                        "double",
                        "avoid-escape",
                        "avoid-template"
                    ],
                    "semicolon": [
                        true,
                        "always"
                    ],
                    "trailing-comma": [
                        true,
                        {
                            "esSpecCompliant": true,
                            "multiline": "always",
                            "singleline": "never"
                        }
                    ],
                    "triple-equals": [
                        true,
                        "allow-null-check"
                    ],
                    "variable-name": [
                        true,
                        "ban-keywords",
                        "check-format",
                        "allow-pascal-case"
                    ],
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-type",
                        "check-typecast"
                    ]
                }
            }
        ]
    },
    "globals": {
        "AbortController": false,
        "AbortSignal": false,
        "addEventListener": false,
        "alert": false,
        "AnalyserNode": false,
        "Animation": false,
        "AnimationEffectReadOnly": false,
        "AnimationEffectTiming": false,
        "AnimationEffectTimingReadOnly": false,
        "AnimationEvent": false,
        "AnimationPlaybackEvent": false,
        "AnimationTimeline": false,
        "applicationCache": false,
        "ApplicationCache": false,
        "ApplicationCacheErrorEvent": false,
        "atob": false,
        "Attr": false,
        "Audio": false,
        "AudioBuffer": false,
        "AudioBufferSourceNode": false,
        "AudioContext": false,
        "AudioDestinationNode": false,
        "AudioListener": false,
        "AudioNode": false,
        "AudioParam": false,
        "AudioProcessingEvent": false,
        "AudioScheduledSourceNode": false,
        "AudioWorkletGlobalScope ": false,
        "AudioWorkletNode": false,
        "AudioWorkletProcessor": false,
        "BarProp": false,
        "BaseAudioContext": false,
        "BatteryManager": false,
        "BeforeUnloadEvent": false,
        "BiquadFilterNode": false,
        "Blob": false,
        "BlobEvent": false,
        "blur": false,
        "BroadcastChannel": false,
        "btoa": false,
        "BudgetService": false,
        "ByteLengthQueuingStrategy": false,
        "Cache": false,
        "caches": false,
        "CacheStorage": false,
        "cancelAnimationFrame": false,
        "cancelIdleCallback": false,
        "CanvasCaptureMediaStreamTrack": false,
        "CanvasGradient": false,
        "CanvasPattern": false,
        "CanvasRenderingContext2D": false,
        "ChannelMergerNode": false,
        "ChannelSplitterNode": false,
        "CharacterData": false,
        "clearInterval": false,
        "clearTimeout": false,
        "clientInformation": false,
        "ClipboardEvent": false,
        "close": false,
        "closed": false,
        "CloseEvent": false,
        "Comment": false,
        "CompositionEvent": false,
        "confirm": false,
        "console": false,
        "ConstantSourceNode": false,
        "ConvolverNode": false,
        "CountQueuingStrategy": false,
        "createImageBitmap": false,
        "Credential": false,
        "CredentialsContainer": false,
        "crypto": false,
        "Crypto": false,
        "CryptoKey": false,
        "CSS": false,
        "CSSConditionRule": false,
        "CSSFontFaceRule": false,
        "CSSGroupingRule": false,
        "CSSImportRule": false,
        "CSSKeyframeRule": false,
        "CSSKeyframesRule": false,
        "CSSMediaRule": false,
        "CSSNamespaceRule": false,
        "CSSPageRule": false,
        "CSSRule": false,
        "CSSRuleList": false,
        "CSSStyleDeclaration": false,
        "CSSStyleRule": false,
        "CSSStyleSheet": false,
        "CSSSupportsRule": false,
        "CustomElementRegistry": false,
        "customElements": false,
        "CustomEvent": false,
        "DataTransfer": false,
        "DataTransferItem": false,
        "DataTransferItemList": false,
        "defaultstatus": false,
        "defaultStatus": false,
        "DelayNode": false,
        "DeviceMotionEvent": false,
        "DeviceOrientationEvent": false,
        "devicePixelRatio": false,
        "dispatchEvent": false,
        "document": false,
        "Document": false,
        "DocumentFragment": false,
        "DocumentType": false,
        "DOMError": false,
        "DOMException": false,
        "DOMImplementation": false,
        "DOMMatrix": false,
        "DOMMatrixReadOnly": false,
        "DOMParser": false,
        "DOMPoint": false,
        "DOMPointReadOnly": false,
        "DOMQuad": false,
        "DOMRect": false,
        "DOMRectReadOnly": false,
        "DOMStringList": false,
        "DOMStringMap": false,
        "DOMTokenList": false,
        "DragEvent": false,
        "DynamicsCompressorNode": false,
        "Element": false,
        "ErrorEvent": false,
        "event": false,
        "Event": false,
        "EventSource": false,
        "EventTarget": false,
        "external": false,
        "fetch": false,
        "File": false,
        "FileList": false,
        "FileReader": false,
        "find": false,
        "focus": false,
        "FocusEvent": false,
        "FontFace": false,
        "FontFaceSetLoadEvent": false,
        "FormData": false,
        "frameElement": false,
        "frames": false,
        "GainNode": false,
        "Gamepad": false,
        "GamepadButton": false,
        "GamepadEvent": false,
        "getComputedStyle": false,
        "getSelection": false,
        "HashChangeEvent": false,
        "Headers": false,
        "history": false,
        "History": false,
        "HTMLAllCollection": false,
        "HTMLAnchorElement": false,
        "HTMLAreaElement": false,
        "HTMLAudioElement": false,
        "HTMLBaseElement": false,
        "HTMLBodyElement": false,
        "HTMLBRElement": false,
        "HTMLButtonElement": false,
        "HTMLCanvasElement": false,
        "HTMLCollection": false,
        "HTMLContentElement": false,
        "HTMLDataElement": false,
        "HTMLDataListElement": false,
        "HTMLDetailsElement": false,
        "HTMLDialogElement": false,
        "HTMLDirectoryElement": false,
        "HTMLDivElement": false,
        "HTMLDListElement": false,
        "HTMLDocument": false,
        "HTMLElement": false,
        "HTMLEmbedElement": false,
        "HTMLFieldSetElement": false,
        "HTMLFontElement": false,
        "HTMLFormControlsCollection": false,
        "HTMLFormElement": false,
        "HTMLFrameElement": false,
        "HTMLFrameSetElement": false,
        "HTMLHeadElement": false,
        "HTMLHeadingElement": false,
        "HTMLHRElement": false,
        "HTMLHtmlElement": false,
        "HTMLIFrameElement": false,
        "HTMLImageElement": false,
        "HTMLInputElement": false,
        "HTMLLabelElement": false,
        "HTMLLegendElement": false,
        "HTMLLIElement": false,
        "HTMLLinkElement": false,
        "HTMLMapElement": false,
        "HTMLMarqueeElement": false,
        "HTMLMediaElement": false,
        "HTMLMenuElement": false,
        "HTMLMetaElement": false,
        "HTMLMeterElement": false,
        "HTMLModElement": false,
        "HTMLObjectElement": false,
        "HTMLOListElement": false,
        "HTMLOptGroupElement": false,
        "HTMLOptionElement": false,
        "HTMLOptionsCollection": false,
        "HTMLOutputElement": false,
        "HTMLParagraphElement": false,
        "HTMLParamElement": false,
        "HTMLPictureElement": false,
        "HTMLPreElement": false,
        "HTMLProgressElement": false,
        "HTMLQuoteElement": false,
        "HTMLScriptElement": false,
        "HTMLSelectElement": false,
        "HTMLShadowElement": false,
        "HTMLSlotElement": false,
        "HTMLSourceElement": false,
        "HTMLSpanElement": false,
        "HTMLStyleElement": false,
        "HTMLTableCaptionElement": false,
        "HTMLTableCellElement": false,
        "HTMLTableColElement": false,
        "HTMLTableElement": false,
        "HTMLTableRowElement": false,
        "HTMLTableSectionElement": false,
        "HTMLTemplateElement": false,
        "HTMLTextAreaElement": false,
        "HTMLTimeElement": false,
        "HTMLTitleElement": false,
        "HTMLTrackElement": false,
        "HTMLUListElement": false,
        "HTMLUnknownElement": false,
        "HTMLVideoElement": false,
        "IDBCursor": false,
        "IDBCursorWithValue": false,
        "IDBDatabase": false,
        "IDBFactory": false,
        "IDBIndex": false,
        "IDBKeyRange": false,
        "IDBObjectStore": false,
        "IDBOpenDBRequest": false,
        "IDBRequest": false,
        "IDBTransaction": false,
        "IDBVersionChangeEvent": false,
        "IdleDeadline": false,
        "IIRFilterNode": false,
        "Image": false,
        "ImageBitmap": false,
        "ImageBitmapRenderingContext": false,
        "ImageCapture": false,
        "ImageData": false,
        "indexedDB": false,
        "innerHeight": false,
        "innerWidth": false,
        "InputEvent": false,
        "IntersectionObserver": false,
        "IntersectionObserverEntry": false,
        "Intl": false,
        "isSecureContext": false,
        "KeyboardEvent": false,
        "KeyframeEffect": false,
        "KeyframeEffectReadOnly": false,
        "length": false,
        "localStorage": false,
        "location": true,
        "Location": false,
        "locationbar": false,
        "matchMedia": false,
        "MediaDeviceInfo": false,
        "MediaDevices": false,
        "MediaElementAudioSourceNode": false,
        "MediaEncryptedEvent": false,
        "MediaError": false,
        "MediaKeyMessageEvent": false,
        "MediaKeySession": false,
        "MediaKeyStatusMap": false,
        "MediaKeySystemAccess": false,
        "MediaList": false,
        "MediaQueryList": false,
        "MediaQueryListEvent": false,
        "MediaRecorder": false,
        "MediaSettingsRange": false,
        "MediaSource": false,
        "MediaStream": false,
        "MediaStreamAudioDestinationNode": false,
        "MediaStreamAudioSourceNode": false,
        "MediaStreamEvent": false,
        "MediaStreamTrack": false,
        "MediaStreamTrackEvent": false,
        "menubar": false,
        "MessageChannel": false,
        "MessageEvent": false,
        "MessagePort": false,
        "MIDIAccess": false,
        "MIDIConnectionEvent": false,
        "MIDIInput": false,
        "MIDIInputMap": false,
        "MIDIMessageEvent": false,
        "MIDIOutput": false,
        "MIDIOutputMap": false,
        "MIDIPort": false,
        "MimeType": false,
        "MimeTypeArray": false,
        "MouseEvent": false,
        "moveBy": false,
        "moveTo": false,
        "MutationEvent": false,
        "MutationObserver": false,
        "MutationRecord": false,
        "name": false,
        "NamedNodeMap": false,
        "NavigationPreloadManager": false,
        "navigator": false,
        "Navigator": false,
        "NetworkInformation": false,
        "Node": false,
        "NodeFilter": false,
        "NodeIterator": false,
        "NodeList": false,
        "Notification": false,
        "OfflineAudioCompletionEvent": false,
        "OfflineAudioContext": false,
        "offscreenBuffering": false,
        "OffscreenCanvas": true,
        "onabort": true,
        "onafterprint": true,
        "onanimationend": true,
        "onanimationiteration": true,
        "onanimationstart": true,
        "onappinstalled": true,
        "onauxclick": true,
        "onbeforeinstallprompt": true,
        "onbeforeprint": true,
        "onbeforeunload": true,
        "onblur": true,
        "oncancel": true,
        "oncanplay": true,
        "oncanplaythrough": true,
        "onchange": true,
        "onclick": true,
        "onclose": true,
        "oncontextmenu": true,
        "oncuechange": true,
        "ondblclick": true,
        "ondevicemotion": true,
        "ondeviceorientation": true,
        "ondeviceorientationabsolute": true,
        "ondrag": true,
        "ondragend": true,
        "ondragenter": true,
        "ondragleave": true,
        "ondragover": true,
        "ondragstart": true,
        "ondrop": true,
        "ondurationchange": true,
        "onemptied": true,
        "onended": true,
        "onerror": true,
        "onfocus": true,
        "ongotpointercapture": true,
        "onhashchange": true,
        "oninput": true,
        "oninvalid": true,
        "onkeydown": true,
        "onkeypress": true,
        "onkeyup": true,
        "onlanguagechange": true,
        "onload": true,
        "onloadeddata": true,
        "onloadedmetadata": true,
        "onloadstart": true,
        "onlostpointercapture": true,
        "onmessage": true,
        "onmessageerror": true,
        "onmousedown": true,
        "onmouseenter": true,
        "onmouseleave": true,
        "onmousemove": true,
        "onmouseout": true,
        "onmouseover": true,
        "onmouseup": true,
        "onmousewheel": true,
        "onoffline": true,
        "ononline": true,
        "onpagehide": true,
        "onpageshow": true,
        "onpause": true,
        "onplay": true,
        "onplaying": true,
        "onpointercancel": true,
        "onpointerdown": true,
        "onpointerenter": true,
        "onpointerleave": true,
        "onpointermove": true,
        "onpointerout": true,
        "onpointerover": true,
        "onpointerup": true,
        "onpopstate": true,
        "onprogress": true,
        "onratechange": true,
        "onrejectionhandled": true,
        "onreset": true,
        "onresize": true,
        "onscroll": true,
        "onsearch": true,
        "onseeked": true,
        "onseeking": true,
        "onselect": true,
        "onstalled": true,
        "onstorage": true,
        "onsubmit": true,
        "onsuspend": true,
        "ontimeupdate": true,
        "ontoggle": true,
        "ontransitionend": true,
        "onunhandledrejection": true,
        "onunload": true,
        "onvolumechange": true,
        "onwaiting": true,
        "onwheel": true,
        "open": false,
        "openDatabase": false,
        "opener": false,
        "Option": false,
        "origin": false,
        "OscillatorNode": false,
        "outerHeight": false,
        "outerWidth": false,
        "PageTransitionEvent": false,
        "pageXOffset": false,
        "pageYOffset": false,
        "PannerNode": false,
        "parent": false,
        "Path2D": false,
        "PaymentAddress": false,
        "PaymentRequest": false,
        "PaymentRequestUpdateEvent": false,
        "PaymentResponse": false,
        "performance": false,
        "Performance": false,
        "PerformanceEntry": false,
        "PerformanceLongTaskTiming": false,
        "PerformanceMark": false,
        "PerformanceMeasure": false,
        "PerformanceNavigation": false,
        "PerformanceNavigationTiming": false,
        "PerformanceObserver": false,
        "PerformanceObserverEntryList": false,
        "PerformancePaintTiming": false,
        "PerformanceResourceTiming": false,
        "PerformanceTiming": false,
        "PeriodicWave": false,
        "Permissions": false,
        "PermissionStatus": false,
        "personalbar": false,
        "PhotoCapabilities": false,
        "Plugin": false,
        "PluginArray": false,
        "PointerEvent": false,
        "PopStateEvent": false,
        "postMessage": false,
        "Presentation": false,
        "PresentationAvailability": false,
        "PresentationConnection": false,
        "PresentationConnectionAvailableEvent": false,
        "PresentationConnectionCloseEvent": false,
        "PresentationConnectionList": false,
        "PresentationReceiver": false,
        "PresentationRequest": false,
        "print": false,
        "ProcessingInstruction": false,
        "ProgressEvent": false,
        "PromiseRejectionEvent": false,
        "prompt": false,
        "PushManager": false,
        "PushSubscription": false,
        "PushSubscriptionOptions": false,
        "queueMicrotask": false,
        "RadioNodeList": false,
        "Range": false,
        "ReadableStream": false,
        "registerProcessor": false,
        "RemotePlayback": false,
        "removeEventListener": false,
        "Request": false,
        "requestAnimationFrame": false,
        "requestIdleCallback": false,
        "resizeBy": false,
        "ResizeObserver": false,
        "ResizeObserverEntry": false,
        "resizeTo": false,
        "Response": false,
        "RTCCertificate": false,
        "RTCDataChannel": false,
        "RTCDataChannelEvent": false,
        "RTCDtlsTransport": false,
        "RTCIceCandidate": false,
        "RTCIceGatherer": false,
        "RTCIceTransport": false,
        "RTCPeerConnection": false,
        "RTCPeerConnectionIceEvent": false,
        "RTCRtpContributingSource": false,
        "RTCRtpReceiver": false,
        "RTCRtpSender": false,
        "RTCSctpTransport": false,
        "RTCSessionDescription": false,
        "RTCStatsReport": false,
        "RTCTrackEvent": false,
        "screen": false,
        "Screen": false,
        "screenLeft": false,
        "ScreenOrientation": false,
        "screenTop": false,
        "screenX": false,
        "screenY": false,
        "ScriptProcessorNode": false,
        "scroll": false,
        "scrollbars": false,
        "scrollBy": false,
        "scrollTo": false,
        "scrollX": false,
        "scrollY": false,
        "SecurityPolicyViolationEvent": false,
        "Selection": false,
        "self": false,
        "ServiceWorker": false,
        "ServiceWorkerContainer": false,
        "ServiceWorkerRegistration": false,
        "sessionStorage": false,
        "setInterval": false,
        "setTimeout": false,
        "ShadowRoot": false,
        "SharedWorker": false,
        "SourceBuffer": false,
        "SourceBufferList": false,
        "speechSynthesis": false,
        "SpeechSynthesisEvent": false,
        "SpeechSynthesisUtterance": false,
        "StaticRange": false,
        "status": false,
        "statusbar": false,
        "StereoPannerNode": false,
        "stop": false,
        "Storage": false,
        "StorageEvent": false,
        "StorageManager": false,
        "styleMedia": false,
        "StyleSheet": false,
        "StyleSheetList": false,
        "SubtleCrypto": false,
        "SVGAElement": false,
        "SVGAngle": false,
        "SVGAnimatedAngle": false,
        "SVGAnimatedBoolean": false,
        "SVGAnimatedEnumeration": false,
        "SVGAnimatedInteger": false,
        "SVGAnimatedLength": false,
        "SVGAnimatedLengthList": false,
        "SVGAnimatedNumber": false,
        "SVGAnimatedNumberList": false,
        "SVGAnimatedPreserveAspectRatio": false,
        "SVGAnimatedRect": false,
        "SVGAnimatedString": false,
        "SVGAnimatedTransformList": false,
        "SVGAnimateElement": false,
        "SVGAnimateMotionElement": false,
        "SVGAnimateTransformElement": false,
        "SVGAnimationElement": false,
        "SVGCircleElement": false,
        "SVGClipPathElement": false,
        "SVGComponentTransferFunctionElement": false,
        "SVGDefsElement": false,
        "SVGDescElement": false,
        "SVGDiscardElement": false,
        "SVGElement": false,
        "SVGEllipseElement": false,
        "SVGFEBlendElement": false,
        "SVGFEColorMatrixElement": false,
        "SVGFEComponentTransferElement": false,
        "SVGFECompositeElement": false,
        "SVGFEConvolveMatrixElement": false,
        "SVGFEDiffuseLightingElement": false,
        "SVGFEDisplacementMapElement": false,
        "SVGFEDistantLightElement": false,
        "SVGFEDropShadowElement": false,
        "SVGFEFloodElement": false,
        "SVGFEFuncAElement": false,
        "SVGFEFuncBElement": false,
        "SVGFEFuncGElement": false,
        "SVGFEFuncRElement": false,
        "SVGFEGaussianBlurElement": false,
        "SVGFEImageElement": false,
        "SVGFEMergeElement": false,
        "SVGFEMergeNodeElement": false,
        "SVGFEMorphologyElement": false,
        "SVGFEOffsetElement": false,
        "SVGFEPointLightElement": false,
        "SVGFESpecularLightingElement": false,
        "SVGFESpotLightElement": false,
        "SVGFETileElement": false,
        "SVGFETurbulenceElement": false,
        "SVGFilterElement": false,
        "SVGForeignObjectElement": false,
        "SVGGElement": false,
        "SVGGeometryElement": false,
        "SVGGradientElement": false,
        "SVGGraphicsElement": false,
        "SVGImageElement": false,
        "SVGLength": false,
        "SVGLengthList": false,
        "SVGLinearGradientElement": false,
        "SVGLineElement": false,
        "SVGMarkerElement": false,
        "SVGMaskElement": false,
        "SVGMatrix": false,
        "SVGMetadataElement": false,
        "SVGMPathElement": false,
        "SVGNumber": false,
        "SVGNumberList": false,
        "SVGPathElement": false,
        "SVGPatternElement": false,
        "SVGPoint": false,
        "SVGPointList": false,
        "SVGPolygonElement": false,
        "SVGPolylineElement": false,
        "SVGPreserveAspectRatio": false,
        "SVGRadialGradientElement": false,
        "SVGRect": false,
        "SVGRectElement": false,
        "SVGScriptElement": false,
        "SVGSetElement": false,
        "SVGStopElement": false,
        "SVGStringList": false,
        "SVGStyleElement": false,
        "SVGSVGElement": false,
        "SVGSwitchElement": false,
        "SVGSymbolElement": false,
        "SVGTextContentElement": false,
        "SVGTextElement": false,
        "SVGTextPathElement": false,
        "SVGTextPositioningElement": false,
        "SVGTitleElement": false,
        "SVGTransform": false,
        "SVGTransformList": false,
        "SVGTSpanElement": false,
        "SVGUnitTypes": false,
        "SVGUseElement": false,
        "SVGViewElement": false,
        "TaskAttributionTiming": false,
        "Text": false,
        "TextDecoder": false,
        "TextEncoder": false,
        "TextEvent": false,
        "TextMetrics": false,
        "TextTrack": false,
        "TextTrackCue": false,
        "TextTrackCueList": false,
        "TextTrackList": false,
        "TimeRanges": false,
        "toolbar": false,
        "top": false,
        "Touch": false,
        "TouchEvent": false,
        "TouchList": false,
        "TrackEvent": false,
        "TransitionEvent": false,
        "TreeWalker": false,
        "UIEvent": false,
        "URL": false,
        "URLSearchParams": false,
        "ValidityState": false,
        "visualViewport": false,
        "VisualViewport": false,
        "VTTCue": false,
        "WaveShaperNode": false,
        "WebAssembly": false,
        "WebGL2RenderingContext": false,
        "WebGLActiveInfo": false,
        "WebGLBuffer": false,
        "WebGLContextEvent": false,
        "WebGLFramebuffer": false,
        "WebGLProgram": false,
        "WebGLQuery": false,
        "WebGLRenderbuffer": false,
        "WebGLRenderingContext": false,
        "WebGLSampler": false,
        "WebGLShader": false,
        "WebGLShaderPrecisionFormat": false,
        "WebGLSync": false,
        "WebGLTexture": false,
        "WebGLTransformFeedback": false,
        "WebGLUniformLocation": false,
        "WebGLVertexArrayObject": false,
        "WebSocket": false,
        "WheelEvent": false,
        "window": false,
        "Window": false,
        "Worker": false,
        "WritableStream": false,
        "XMLDocument": false,
        "XMLHttpRequest": false,
        "XMLHttpRequestEventTarget": false,
        "XMLHttpRequestUpload": false,
        "XMLSerializer": false,
        "XPathEvaluator": false,
        "XPathExpression": false,
        "XPathResult": false,
        "XSLTProcessor": false,
        "exports": true,
        "global": false,
        "module": false,
        "require": false,
        "Array": false,
        "ArrayBuffer": false,
        "Boolean": false,
        "constructor": false,
        "DataView": false,
        "Date": false,
        "decodeURI": false,
        "decodeURIComponent": false,
        "encodeURI": false,
        "encodeURIComponent": false,
        "Error": false,
        "escape": false,
        "eval": false,
        "EvalError": false,
        "Float32Array": false,
        "Float64Array": false,
        "Function": false,
        "hasOwnProperty": false,
        "Infinity": false,
        "Int16Array": false,
        "Int32Array": false,
        "Int8Array": false,
        "isFinite": false,
        "isNaN": false,
        "isPrototypeOf": false,
        "JSON": false,
        "Map": false,
        "Math": false,
        "NaN": false,
        "Number": false,
        "Object": false,
        "parseFloat": false,
        "parseInt": false,
        "Promise": false,
        "propertyIsEnumerable": false,
        "Proxy": false,
        "RangeError": false,
        "ReferenceError": false,
        "Reflect": false,
        "RegExp": false,
        "Set": false,
        "String": false,
        "Symbol": false,
        "SyntaxError": false,
        "toLocaleString": false,
        "toString": false,
        "TypeError": false,
        "Uint16Array": false,
        "Uint32Array": false,
        "Uint8Array": false,
        "Uint8ClampedArray": false,
        "undefined": false,
        "unescape": false,
        "URIError": false,
        "valueOf": false,
        "WeakMap": false,
        "WeakSet": false,
        "afterAll": false,
        "afterEach": false,
        "beforeAll": false,
        "beforeEach": false,
        "describe": false,
        "expect": false,
        "fdescribe": false,
        "fit": false,
        "it": false,
        "jest": false,
        "pit": false,
        "test": false,
        "xdescribe": false,
        "xit": false,
        "xtest": false,
        "__dirname": false,
        "__filename": false,
        "Buffer": false,
        "clearImmediate": false,
        "process": false,
        "setImmediate": false
    },
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
