export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-5d2d412f.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-5d2d412f.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-12155459.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-90031be8.js';
import './index-38dc41e4.js';
import 'css-vars-ponyfill';
import './index-0e9358bd.js';
import './LeaveChannel-169c385a.js';
import './index-435bef42.js';
import './index-dad22d00.js';
import './utils-aacebeae.js';
import './index-c7076178.js';
import './index-a5a4a5f5.js';
import './index-98f8beba.js';
import './index-577e0cff.js';
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
