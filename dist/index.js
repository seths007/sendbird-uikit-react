export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-d5778ad3.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-d5778ad3.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-8a52b029.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-2760498e.js';
import './index-f9b48bc6.js';
import 'css-vars-ponyfill';
import './index-f518894c.js';
import './LeaveChannel-ca3d7fa1.js';
import './index-d8c4afa7.js';
import './index-4efb1916.js';
import './utils-aa56b329.js';
import './index-3795a070.js';
import './index-0098992c.js';
import './index-7b9824ef.js';
import './index-a37867f1.js';
import 'react-dom';

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = useContext(SendbirdSdkContext);
  return context;
}

export { useSendbirdStateContext };
//# sourceMappingURL=index.js.map
