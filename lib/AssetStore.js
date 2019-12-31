class AssetStore {
  basePath = '/overseasintaipeifall2020';

  get(path) {
    return `${this.basePath}/${path}`;
  }
}

export default new AssetStore();
