export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-29fe03c8.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-29fe03c8.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-bb0f91ce.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-05327442.js';
import './index-5069fe49.js';
import 'css-vars-ponyfill';
import './index-02e562d6.js';
import './LeaveChannel-0f30ddc3.js';
import './index-704f538b.js';
import './index-1c2cc73e.js';
import './utils-2d1635b3.js';
import './index-e2b15643.js';
import './index-1a95b4d7.js';
import './index-45c4ee4c.js';
import './index-4b438516.js';
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
