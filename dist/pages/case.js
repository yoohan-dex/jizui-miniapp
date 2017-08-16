'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.config = {
      navigationBarTitleText: '案例'
    }, _this.data = {
      cases: [{
        title: '万达广场开张盛典',
        content: '2017\u5E746\u670830\u65E5\u91D1\u6C99\u6D32\u4E07\u8FBE\u5F00\u4E1A\uFF0C\u6781\u6700\u79D1\u6280\u4E3A\u4E07\u8FBE\u5F00\u4E1A\u63D0\u4F9B\u4E86\u4E00\u5957 \u4E8C\u7EF4\u7801\u6280\u672F+H5+\u60C5\u4FA3\u4E92\u8D60\u73AB\u7470\u7684\u8425\u9500\u65B9\u6848\uFF0C\u8BE5\u65B9\u6848\u6700\u7EC8\u6548\u679C\u706B\u7206\u3002\n\u8BE6\u60C5\u8BF7\u67E5\u770B\u516C\u4F17\u53F7\uFF1A\u91D1\u6C99\u6D32\u4E07\u8FBE\u5E7F\u573A'
      }, {
        title: '全城夺宝',
        content: '\u5168\u57CE\u593A\u5B9D\uFF08www.qcduobao.com\uFF09\u5C5E\u4E8E\u5E7F\u5DDE\u9EA6\u58F3\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8\u65D7\u4E0B\u7684\u4EA7\u54C1\u4E4B\u4E00\uFF0C\u7531\u5E7F\u5DDE\u6781\u6700\u4E92\u8054\u7F51\u79D1\u6280\u6709\u9650\u516C\u53F8\u63D0\u4F9B\u6280\u672F\u652F\u6301\uFF0C\u5168\u57CE\u593A\u5B9D\u65E8\u5728\u6253\u9020\u4E00\u79CD\u65B0\u578B\u7684\u4E00\u5143\u4F17\u7B79\u7F51\u8D2D\u6A21\u5F0F\uFF0C\u53EA\u97001\u5143\u5C31\u6709\u53EF\u80FD\u4E70\u5230\u4E00\u4EF6\u5FC3\u6021\u7684\u5546\u54C1\u3002'
      }, {
        title: 'Sale优售网',
        content: '\u4F18\u552E\u8FDB\u9500\u5B58\u5E73\u53F0\u662F\u4E00\u4E2A\u4E13\u6CE8\u4E8E\u8FDB\u9500\u5B58\u4FE1\u606F\u5316\u793E\u4EA4\u7684\u5E73\u53F0\uFF0C\u901A\u8FC7"\u5730\u7406\u4FE1\u606F"\u4EE5\u53CA"\u4EBA\u9645\u5173\u7CFB"\u63D0\u9AD8\u4F01\u4E1A\u9500\u552E\u6210\u4EA4\u7387\u3002'
      }, {
        title: '大圣拼车',
        content: '\u5927\u5723\u62FC\u8F66\u662F\u6781\u6700\u79D1\u6280\u81EA\u4E3B\u7814\u53D1\u4E0E\u8FD0\u8425\u7684\u4E00\u6B3E\u4EA7\u54C1\uFF0C\u76EE\u524D\u5728\u6E5B\u6C5F\u9AD8\u6821\u8FD0\u8425\u706B\u70ED\uFF0C\u5927\u5723\u53C2\u8003\u795E\u821F\u4E13\u8F66\u548C\u6EF4\u6EF4\u987A\u98CE\u8F66\u7B97\u6CD5\uFF0C\u91C7\u7528\u4E86\u516C\u4F17\u53F7+\u5C0F\u7A0B\u5E8F+App\u7684\u5F62\u5F0F\uFF0C\u5B9A\u5236\u51FA\u4E00\u5957\u9488\u5BF9\u57CE\u4E61\u3001\u57CE\u90CA\u62FC\u8F66\u51FA\u884C\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u4E3A\u4EA4\u901A\u4E0D\u4FBF\u533A\u57DF\u7FA4\u4F53\u63D0\u4F9B\u4E86\u4E00\u4E2A\u9AD8\u6027\u4EF7\u6BD4\u7684\u4FBF\u6377\u51FA\u884C\u65B9\u5F0F\u3002\n\u8BE6\u60C5\u8BF7\u5173\u6CE8\u516C\u4F17\u53F7\uFF1A\u5927\u5723\u62FC\u8F66'
      }],
      index: 0
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      current: function current(e) {
        this.index = e.detail.current;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/case'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb21wb25lbnRzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjYXNlcyIsInRpdGxlIiwiY29udGVudCIsImluZGV4IiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImN1cnJlbnQiLCJlIiwiZGV0YWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsVSxHQUFhLEUsUUFFYkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFPLENBQUM7QUFDTkMsZUFBTyxVQUREO0FBRU5DO0FBRk0sT0FBRCxFQUlKO0FBQ0RELGVBQU8sTUFETjtBQUVEQztBQUZDLE9BSkksRUFPSjtBQUNERCxlQUFPLFNBRE47QUFFREM7QUFGQyxPQVBJLEVBVUo7QUFDREQsZUFBTyxNQUROO0FBRURDO0FBRkMsT0FWSSxDQURGO0FBZ0JMQyxhQUFPO0FBaEJGLEssUUFtQlBDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNGO0FBQ0wsZUFBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNEO0FBSFEsSyxRQUtYQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsYUFBS04sS0FBTCxHQUFhTSxFQUFFQyxNQUFGLENBQVNGLE9BQXRCO0FBQ0Q7QUFITyxLOzs7O0VBL0J1QixlQUFLRyxJOztrQkFBbkJoQixLIiwiZmlsZSI6ImNhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5qGI5L6LJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYXNlczogW3tcbiAgICAgICAgdGl0bGU6ICfkuIfovr7lub/lnLrlvIDlvKDnm5vlhbgnLFxuICAgICAgICBjb250ZW50OiBgMjAxN+W5tDbmnIgzMOaXpemHkeaymea0suS4h+i+vuW8gOS4mu+8jOaegeacgOenkeaKgOS4uuS4h+i+vuW8gOS4muaPkOS+m+S6huS4gOWllyDkuoznu7TnoIHmioDmnK8rSDUr5oOF5L6j5LqS6LWg546r55Gw55qE6JCl6ZSA5pa55qGI77yM6K+l5pa55qGI5pyA57uI5pWI5p6c54Gr54iG44CCXG7or6bmg4Xor7fmn6XnnIvlhazkvJflj7fvvJrph5HmspnmtLLkuIfovr7lub/lnLpgXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5YWo5Z+O5aS65a6dJyxcbiAgICAgICAgY29udGVudDogYOWFqOWfjuWkuuWune+8iHd3dy5xY2R1b2Jhby5jb23vvInlsZ7kuo7lub/lt57puqblo7PnvZHnu5znp5HmioDmnInpmZDlhazlj7jml5fkuIvnmoTkuqflk4HkuYvkuIDvvIznlLHlub/lt57mnoHmnIDkupLogZTnvZHnp5HmioDmnInpmZDlhazlj7jmj5DkvpvmioDmnK/mlK/mjIHvvIzlhajln47lpLrlrp3ml6jlnKjmiZPpgKDkuIDnp43mlrDlnovnmoTkuIDlhYPkvJfnrbnnvZHotK3mqKHlvI/vvIzlj6rpnIAx5YWD5bCx5pyJ5Y+v6IO95Lmw5Yiw5LiA5Lu25b+D5oCh55qE5ZWG5ZOB44CCYFxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ1NhbGXkvJjllK7nvZEnLFxuICAgICAgICBjb250ZW50OiBg5LyY5ZSu6L+b6ZSA5a2Y5bmz5Y+w5piv5LiA5Liq5LiT5rOo5LqO6L+b6ZSA5a2Y5L+h5oGv5YyW56S+5Lqk55qE5bmz5Y+w77yM6YCa6L+HXCLlnLDnkIbkv6Hmga9cIuS7peWPilwi5Lq66ZmF5YWz57O7XCLmj5Dpq5jkvIHkuJrplIDllK7miJDkuqTnjofjgIJgXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5aSn5Zyj5ou86L2mJyxcbiAgICAgICAgY29udGVudDogYOWkp+Wco+aLvOi9puaYr+aegeacgOenkeaKgOiHquS4u+eglOWPkeS4jui/kOiQpeeahOS4gOasvuS6p+WTge+8jOebruWJjeWcqOa5m+axn+mrmOagoei/kOiQpeeBq+eDre+8jOWkp+Wco+WPguiAg+elnuiIn+S4k+i9puWSjOa7tOa7tOmhuumjjui9pueul+azle+8jOmHh+eUqOS6huWFrOS8l+WPtyvlsI/nqIvluo8rQXBw55qE5b2i5byP77yM5a6a5Yi25Ye65LiA5aWX6ZKI5a+55Z+O5Lmh44CB5Z+O6YOK5ou86L2m5Ye66KGM55qE6Kej5Yaz5pa55qGI77yM5Li65Lqk6YCa5LiN5L6/5Yy65Z+f576k5L2T5o+Q5L6b5LqG5LiA5Liq6auY5oCn5Lu35q+U55qE5L6/5o235Ye66KGM5pa55byP44CCXG7or6bmg4Xor7flhbPms6jlhazkvJflj7fvvJrlpKflnKPmi7zovaZgXG4gICAgICB9XSxcbiAgICAgIGluZGV4OiAwXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGN1cnJlbnQoZSkge1xuICAgICAgICB0aGlzLmluZGV4ID0gZS5kZXRhaWwuY3VycmVudFxuICAgICAgfVxuICAgIH1cbn1cbiJdfQ==