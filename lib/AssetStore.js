class AssetStore {
  basePath = '/overseasintaipei';

  get(path) {
    return `${this.basePath}/${path}`;
  }
}

export default new AssetStore();
