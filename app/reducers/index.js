import { AsyncStorage } from 'react-native';
import { persistCombineReducers } from 'redux-persist';

// import auth from './auth';
// import masterdata from './masterdata';
// import conciergeMessage from './conciergeMessage';
import user from './user';
// import match from './match';
// import notification from './notification';
// import push from './push';
// import availableMatch from './availableMatch';
// import generalUI from './generalUI';
// import message from './message';
// import information from './information';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'app'
  ]
};

export default persistCombineReducers(config, {
  user
});
