export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-0e82b551.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-0e82b551.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-dfbb11ab.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-c4a101c4.js';
import './index-a3fd6e3b.js';
import 'css-vars-ponyfill';
import './index-5a679923.js';
import './LeaveChannel-522996b1.js';
import './index-82e792c5.js';
import './index-a91ba33b.js';
import './utils-c3657459.js';
import './index-dcf00a06.js';
import './index-4fd710cf.js';
import './index-898abb6d.js';
import './index-56e1e85e.js';
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
