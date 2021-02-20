import { container } from 'tsyringe';

import HashProvider from './HashProvider/implementations/HashProvider'
import HashProviderModel from './HashProvider/models/HashProvider';

container.registerSingleton<HashProviderModel>('HashProvider', HashProvider);
