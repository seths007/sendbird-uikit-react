export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-3ffef4db.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-3ffef4db.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-05e8ce0f.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-3419054e.js';
import './index-fbc4f712.js';
import 'css-vars-ponyfill';
import './index-c9267012.js';
import './LeaveChannel-5360d02c.js';
import './index-0eb67b9f.js';
import './index-b45b79ab.js';
import './utils-c9d47722.js';
import './index-267d4a79.js';
import './index-5a1cbb14.js';
import './index-fa029096.js';
import './index-e35922b1.js';
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
