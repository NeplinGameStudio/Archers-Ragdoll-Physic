"use strict";

{
  C3.Plugins.GD_SDK = class SingleGlobalPlugin extends globalThis.ISDKPluginBase {
    constructor() {
      super();
    }

    Release() {
      super.Release();
    }
  };
}