'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SendbirdProvider = require('./SendbirdProvider.js');
var App = require('./App.js');
var ChannelSettings = require('./ChannelSettings.js');
var ChannelList = require('./ChannelList.js');
var Channel = require('./Channel.js');
var LocalizationContext = require('./LocalizationContext-e2abb10e.js');
var OpenChannel = require('./OpenChannel.js');
var OpenChannelSettings = require('./OpenChannelSettings.js');
var MessageSearch = require('./MessageSearch.js');
var index = require('./index-a46ba8ce.js');
var React = require('react');
require('prop-types');
require('sendbird');
require('./actionTypes-ac60e8e5.js');
require('./index-f3613a4b.js');
require('css-vars-ponyfill');
require('./index-95d276d8.js');
require('./LeaveChannel-5a1c5eba.js');
require('./index-acdea899.js');
require('./index-f9255d3e.js');
require('./utils-3b577f7b.js');
require('./index-f78545de.js');
require('./index-4a8bb7f8.js');
require('./index-09e4a4ce.js');
require('./index-5521ea3e.js');
require('react-dom');

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = React.useContext(LocalizationContext.SendbirdSdkContext);
  return context;
}

exports.SendBirdProvider = SendbirdProvider;
exports.App = App;
exports.ChannelSettings = ChannelSettings;
exports.ChannelList = ChannelList;
exports.Channel = Channel["default"];
exports.getAllEmojisFromEmojiContainer = Channel.getAllEmojisFromEmojiContainer;
exports.getEmojiCategoriesFromEmojiContainer = Channel.getEmojiCategoriesFromEmojiContainer;
exports.getEmojisFromEmojiContainer = Channel.getEmojisFromEmojiContainer;
exports.getStringSet = LocalizationContext.getStringSet;
exports.withSendBird = LocalizationContext.withSendbirdContext;
exports.OpenChannel = OpenChannel["default"];
exports.OpenChannelSettings = OpenChannelSettings;
exports.MessageSearch = MessageSearch;
exports.sendBirdSelectors = index.selectors;
exports.useSendbirdStateContext = useSendbirdStateContext;
//# sourceMappingURL=index.js.map
