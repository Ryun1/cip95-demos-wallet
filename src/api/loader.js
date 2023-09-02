/**
 * Loads the WASM modules
 */

class Loader {
  async load() {
    if (this._wasm && this._wasm2 && this._wasm3) return;
    /**
     * @private
     */
    this._wasm = await import(
      '../../temporary_modules/@emurgo/cardano-multiplatform-lib-browser'
    );
    /**
     * @private
     */
    this._wasm2 = await import(
      '../../temporary_modules/@emurgo/cardano-message-signing-browser/emurgo_message_signing'
    );
    /**
     * @private
     */
    this._wasm3 = await import(
      '../../temporary_modules/@emurgo/cardano-serialization-lib-browser'
    );
  }

  get Cardano() {
    return this._wasm;
  }

  get Message() {
    return this._wasm2;
  }

  get CSL() {
    return this._wasm3;
  }
}

export default new Loader();
