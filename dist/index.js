export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-7a995a13.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-7a995a13.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-7abd4c53.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-ea29cc1e.js';
import './index-2a85ef51.js';
import 'css-vars-ponyfill';
import './index-a7929bf6.js';
import './LeaveChannel-9f0ecc90.js';
import './index-9c829b82.js';
import './index-84bedc4f.js';
import './utils-30ecf920.js';
import './index-22aa3586.js';
import './index-8c267731.js';
import './index-c05dcd19.js';
import './index-d784acc9.js';
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
