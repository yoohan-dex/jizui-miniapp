'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _header = require('./../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _stage = require('./../components/stage.js');

var _stage2 = _interopRequireDefault(_stage);

var _category = require('./../components/category.js');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <view class="userinfo" bindtap="handleViewTap">
//   <image class="userinfo-avatar" src="{{ userInfo.avatarUrl }}" background-size="cover"/>
//   <view class="userinfo-nickname">{{ userInfo.nickName }}</view>
// </view>
var Index = (_temp2 = _class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: '极最科技',
        path: '/pages/index',
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }]);

  return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.components = {
    header: _header2.default,
    stage: _stage2.default,
    category: _category2.default
  };
  this.config = {
    navigationBarTitleText: '极最科技'
  };
  this.data = {
    userInfo: {
      nickName: '加载中...'
    }
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
}, _temp2);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicmVzIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ0aXRsZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsInBhZ2UiLCJjb21wb25lbnRzIiwiaGVhZGVyIiwic3RhZ2UiLCJjYXRlZ29yeSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsIiRuYW1lIiwibmFtZSIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBNEJEQyxHLEVBQUs7QUFDckIsVUFBSUEsSUFBSUMsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQzNCO0FBQ0VDLGdCQUFRQyxHQUFSLENBQVlILElBQUlJLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xDLGVBQU8sTUFERjtBQUVMQyxjQUFNLGNBRkQ7QUFHTEMsaUJBQVMsaUJBQVNQLEdBQVQsRUFBYztBQUNyQjtBQUNELFNBTEk7QUFNTFEsY0FBTSxjQUFTUixHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVJJLE9BQVA7QUFVRDs7OztFQTNDZ0MsZUFBS1MsSTs7O09BQ3RDQyxVLEdBQWE7QUFDWEMsNEJBRFc7QUFFWEMsMEJBRlc7QUFHWEM7QUFIVyxHO09BS2JDLE0sR0FBUztBQUNQQyw0QkFBd0I7QUFEakIsRztPQUlUQyxJLEdBQU87QUFDTEMsY0FBVTtBQUNSQyxnQkFBVTtBQURGO0FBREwsRztPQU1QQyxRLEdBQVc7QUFDVEMsT0FEUyxpQkFDRjtBQUNMLGFBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEc7T0FNWEMsTSxHQUFTO0FBQ1Asa0JBQWMscUJBQWE7QUFBQTs7QUFDekIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0F0QixjQUFRQyxHQUFSLENBQWUsT0FBS3NCLEtBQXBCLGlCQUFxQ0YsT0FBT0csSUFBNUMsY0FBeURILE9BQU9JLE1BQVAsQ0FBY0YsS0FBdkU7QUFDRDtBQUpNLEc7O2tCQXRCVTFCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG4gIGltcG9ydCBTdGFnZSBmcm9tICcuLi9jb21wb25lbnRzL3N0YWdlJ1xuICBpbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9jYXRlZ29yeSdcbiAgLy8gPHZpZXcgY2xhc3M9XCJ1c2VyaW5mb1wiIGJpbmR0YXA9XCJoYW5kbGVWaWV3VGFwXCI+XG4gIC8vICAgPGltYWdlIGNsYXNzPVwidXNlcmluZm8tYXZhdGFyXCIgc3JjPVwie3sgdXNlckluZm8uYXZhdGFyVXJsIH19XCIgYmFja2dyb3VuZC1zaXplPVwiY292ZXJcIi8+XG4gIC8vICAgPHZpZXcgY2xhc3M9XCJ1c2VyaW5mby1uaWNrbmFtZVwiPnt7IHVzZXJJbmZvLm5pY2tOYW1lIH19PC92aWV3PlxuICAvLyA8L3ZpZXc+XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgaGVhZGVyOiBIZWFkZXIsXG4gICAgICBzdGFnZTogU3RhZ2UsXG4gICAgICBjYXRlZ29yeTogQ2F0ZWdvcnlcbiAgICB9XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aegeacgOenkeaKgCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cbiAgICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICfmnoHmnIDnp5HmioAnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4JyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=