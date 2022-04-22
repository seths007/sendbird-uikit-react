export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-8b25d529.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-8b25d529.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-fb6267b0.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-87b34ef6.js';
import './index-76d87808.js';
import 'css-vars-ponyfill';
import './index-89f4a527.js';
import './LeaveChannel-fc181d78.js';
import './index-0debeb7a.js';
import './index-8bb88eec.js';
import './utils-b9803a44.js';
import './index-c42fd650.js';
import './index-b8d47e4b.js';
import './index-96ca8df2.js';
import './index-b38a1fdf.js';
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
