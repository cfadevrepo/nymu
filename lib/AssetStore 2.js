class AssetStore {
  basePath = '/taiwanoverseas';

  get(path) {
    return `${this.basePath}/${path}`;
  }
}

export default new AssetStore();
