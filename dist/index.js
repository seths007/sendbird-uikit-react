export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-9cf50aa1.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-9cf50aa1.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-f1498eb2.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-6f8c5e70.js';
import './index-b1224bfe.js';
import 'css-vars-ponyfill';
import './index-bcfc34e1.js';
import './LeaveChannel-815d35c7.js';
import './index-183d27a0.js';
import './index-aef37bc6.js';
import './utils-aadce390.js';
import './index-a304d7f8.js';
import './index-cbde096b.js';
import './index-fe77b292.js';
import './index-b28b390b.js';
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
