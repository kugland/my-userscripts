import baseConfig from '../vite.config.base';
import packageJson from './package.json' with { type: 'json' };

export default baseConfig(packageJson);
