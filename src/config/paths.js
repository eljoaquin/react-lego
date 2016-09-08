const path = require('path'); // eslint-disable-line

const ROOT = path.join(__dirname, '../..');
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');
const APP = path.join(SRC, 'app');
const SERVER = path.join(SRC, 'server');
const ICONS = path.join(SRC, 'icons');
const STYLES = path.join(SRC, 'styles');
const TESTS = path.join(ROOT, 'tests');
const ASSET_FILE = path.join(SERVER, 'webpack-assets.json');

module.exports = { ROOT, SRC, DIST, APP, ICONS, STYLES, TESTS, ASSET_FILE };
