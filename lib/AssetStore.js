class AssetStore {
  basePath = '/TaipeiCapstone';

  get(path) {
    return `${this.basePath}/${path}`;
  }
}

export default new AssetStore();
