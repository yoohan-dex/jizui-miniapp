'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _header = require('./../components/header.js');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      header: _header2.default
    }, _this.config = {
      navigationBarTitleText: '联系我们'
    }, _this.data = {
      img: '../assets/images/company.png',
      markers: [{
        latitude: '23.1615800000',
        longitude: '113.4330300000',
        iconPath: '/assets/images/jz-active.png',
        height: 30,
        width: 30
      }]
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      call: function call() {
        _wepy2.default.makePhoneCall({ phoneNumber: '18898579843' });
      },
      copy: function copy() {
        _wepy2.default.setClipboardData({
          data: 'data',
          success: function success(res) {
            _wepy2.default.showToast({
              title: '复制成功',
              icon: 'success',
              duration: 2000
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/contact'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb21wb25lbnRzIiwiaGVhZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWciLCJtYXJrZXJzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJpY29uUGF0aCIsImhlaWdodCIsIndpZHRoIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImNhbGwiLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJjb3B5Iiwic2V0Q2xpcGJvYXJkRGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwicGF0aCIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUdiQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFdBQUssOEJBREE7QUFFTEMsZUFBUyxDQUFDO0FBQ1JDLGtCQUFVLGVBREY7QUFFUkMsbUJBQVcsZ0JBRkg7QUFHUkMsa0JBQVUsOEJBSEY7QUFJUkMsZ0JBQVEsRUFKQTtBQUtSQyxlQUFPO0FBTEMsT0FBRDtBQUZKLEssUUFXUEMsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0Y7QUFDTCxlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBS1hDLE8sR0FBVTtBQUNSQyxVQURRLGtCQUNEO0FBQ0wsdUJBQUtDLGFBQUwsQ0FBbUIsRUFBQ0MsYUFBYSxhQUFkLEVBQW5CO0FBQ0QsT0FITztBQUlSQyxVQUpRLGtCQUlEO0FBQ0wsdUJBQUtDLGdCQUFMLENBQXNCO0FBQ3BCaEIsZ0JBQU0sTUFEYztBQUVwQmlCLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsMkJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxxQkFBTyxNQURNO0FBRWJDLG9CQUFNLFNBRk87QUFHYkMsd0JBQVU7QUFIRyxhQUFmO0FBS0Q7QUFSbUIsU0FBdEI7QUFVRDtBQWZPLEs7Ozs7O3NDQWlCUUosRyxFQUFLO0FBQ3JCLFVBQUlBLElBQUlLLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUMzQjtBQUNFQyxnQkFBUUMsR0FBUixDQUFZUCxJQUFJUSxNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMTixlQUFPLE1BREY7QUFFTE8sY0FBTSxjQUZEO0FBR0xWLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDRCxTQUxJO0FBTUxVLGNBQU0sY0FBU1YsR0FBVCxFQUFjO0FBQ2xCO0FBQ0Q7QUFSSSxPQUFQO0FBVUQ7Ozs7RUF4RGdDLGVBQUtXLEk7O2tCQUFuQmxDLEsiLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIGhlYWRlcjogSGVhZGVyXG4gICAgfVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogZTns7vmiJHku6wnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGltZzogJy4uL2Fzc2V0cy9pbWFnZXMvY29tcGFueS5wbmcnLFxuICAgICAgbWFya2VyczogW3tcbiAgICAgICAgbGF0aXR1ZGU6ICcyMy4xNjE1ODAwMDAwJyxcbiAgICAgICAgbG9uZ2l0dWRlOiAnMTEzLjQzMzAzMDAwMDAnLFxuICAgICAgICBpY29uUGF0aDogJy9hc3NldHMvaW1hZ2VzL2p6LWFjdGl2ZS5wbmcnLFxuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICB3aWR0aDogMzBcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNhbGwoKSB7XG4gICAgICAgIHdlcHkubWFrZVBob25lQ2FsbCh7cGhvbmVOdW1iZXI6ICcxODg5ODU3OTg0Myd9KVxuICAgICAgfSxcbiAgICAgIGNvcHkoKSB7XG4gICAgICAgIHdlcHkuc2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICAgICAgZGF0YTogJ2RhdGEnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WkjeWItuaIkOWKnycsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICfmnoHmnIDnp5HmioAnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4JyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=