(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444],{519:function(i,t,e){Promise.resolve().then(e.bind(e,1353))},1353:function(i,t,e){"use strict";e.r(t),e.d(t,{default:function(){return h}});var l=e(7437),s=e(2265),a=e(6691),o=e.n(a),p=e(5316),r=e(2574),n=e(3144),c=e(7870),m=e(2167),g=e(4102),d=e(8811),f=e.n(d);let u=f()(()=>Promise.all([e.e(396),e.e(593)]).then(e.bind(e,4593)),{loadableGenerated:{webpack:()=>[4593]}});function h(){let i=(0,r.T)(),t=(0,r.C)(i=>i.searchReducer),e=(0,s.useCallback)((t,e)=>{i((0,p.YA)(e)),i((0,p.G)())},[i]),[a,d]=(0,s.useState)(!1),[f,h]=(0,s.useState)("0"),v=i=>{d(!a),h(i)},w=i=>{v(i)},k=(i,t)=>{"Enter"===i.key&&v(t)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.E.h2,{className:"title",variants:g.Z,initial:"hide",animate:"show",custom:.2,children:"PORTFOLIO"}),(0,l.jsx)(c.E.p,{className:"title_desc",variants:g.Z,initial:"hide",animate:"show",custom:.3,children:"* 로그인을 해야 볼 수 있거나 더 이상 볼 수 없는 사이트의 경우 샘플 페이지로 대체했습니다."}),(0,l.jsx)("div",{className:"content",children:(0,l.jsxs)("form",{onSubmit:t=>{t.preventDefault(),i((0,p.Mc)()),i((0,p.YA)(1)),i((0,p.ce)()),i((0,p.G)())},children:[(0,l.jsxs)(c.E.div,{className:"search_wrap",variants:g.Z,initial:"hide",animate:"show",custom:.4,children:[(0,l.jsx)("input",{type:"text",name:"keyword",placeholder:"제목으로 검색하기",onChange:t=>{i((0,p.q1)(t.target.value.toLowerCase()))}}),(0,l.jsx)("button",{className:"btn_search",type:"submit",children:"검색"})]}),t.sliceList.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.E.ul,{className:"list_wrap portfolio_wrap grid",children:(0,l.jsx)(m.M,{children:t.sliceList.map((i,t)=>(0,l.jsx)(c.E.li,{className:"item".concat(i.id," grid-item"),variants:g.Z,initial:"hide",animate:"show",exit:"hide",custom:t,children:(0,l.jsxs)("div",{className:"list_con",tabIndex:t,onClick:()=>w(i.id),onKeyDown:t=>k(t,i.id),role:"button",children:[(0,l.jsx)("div",{className:"thum_wrap",children:(0,l.jsx)(o(),{className:"responsive_size",src:i.view,alt:i.alt,fill:!0})}),(0,l.jsxs)("div",{className:"info_wrap",children:[(0,l.jsxs)("h3",{children:[" ",i.title," "]}),i.skills&&(0,l.jsx)("ul",{className:"keyword",children:i.skills.map(i=>(0,l.jsx)("li",{className:"pill",children:i},i))})]})]})},i.id))})}),(0,l.jsx)(n.Z,{count:t.totalPage,defaultPage:1,page:t.page,boundaryCount:6,variant:"outlined",color:"primary",sx:{margin:2},onChange:e})]}),0===t.sliceList.length&&(0,l.jsx)("div",{className:"no_data",children:"검색 결과가 없습니다."})]})}),a&&(0,l.jsx)(u,{onClickModal:w,modalIndex:f})]})}},2574:function(i,t,e){"use strict";e.d(t,{C:function(){return a},T:function(){return s}});var l=e(3198);let s=()=>(0,l.I0)(),a=l.v9},5316:function(i,t,e){"use strict";e.d(t,{G:function(){return g},Mc:function(){return n},YA:function(){return m},ce:function(){return c},fG:function(){return d},q1:function(){return r}});var l=e(1201),s=e(5885);let a=i=>Math.ceil(i/12),o={keyword:"",result:s.v,totalPage:a(s.v.length),page:1,sliceList:s.v.slice(0,12)},p=(0,l.oM)({name:"search",initialState:o,reducers:{setKeyword:(i,t)=>({...i,keyword:t.payload}),searchList:i=>({...i,result:s.v.filter(t=>""===i.keyword||t.title.toLowerCase().includes(i.keyword)?t:null)}),setTotalPage:i=>({...i,totalPage:a(i.result.length)}),setPage:(i,t)=>({...i,page:t.payload}),setSliceList:i=>({...i,sliceList:1===i.totalPage?i.result.slice(12*(i.page-1)):i.result.slice(12*(i.page-1),12*(i.page-1)+12)})}});p.name;let{setKeyword:r,searchList:n,setTotalPage:c,setPage:m,setSliceList:g}=p.actions,d=p.reducer},4102:function(i,t,e){"use strict";e.d(t,{Z:function(){return l}});let l={show:i=>({opacity:1,transition:{delay:.2*i,duration:1}}),hide:{opacity:0,transition:{duration:.1}}}},5885:function(i){"use strict";i.exports=JSON.parse('{"v":[{"id":"1","title":"대성마이맥 LIVE Class - KTH","view":"images/pofol/pofol_img40.png","alt":"대성마이맥 LIVE Class","skills":["Google Chart","fullcalendar.js","반응형"],"participation":"웹퍼블리싱 100%","url":{"sample":["/html/dsLiveClass.html"]},"desc":"대성마이맥 라이브 클래스는 비대면 수강 플랫폼입니다. 학생들이 수강하기 좋은 PC와 테블릿까지 가능한 반응형 사이트로 만들었습니다."},{"id":"2","title":"클릭엔 - 가비아","view":"images/pofol/pofol_img39.png","alt":"가비아 클릭엔","skills":["CSS3(flex)","반응형"],"participation":"웹퍼블리싱 50%","url":{"service":["https://www.clickn.co.kr/template","https://designskin01.clickn.co.kr/","https://designskin02.clickn.co.kr/","https://designskin04.clickn.co.kr/","https://designskin06.clickn.co.kr/","https://designskin07.clickn.co.kr/","https://designskin08.clickn.co.kr/","https://designskin09.clickn.co.kr/","https://designskin10.clickn.co.kr/","https://designskin11.clickn.co.kr/","https://designskin14.clickn.co.kr/","https://designskin15.clickn.co.kr/"]},"desc":"홈페이지 + 쇼핑몰 빌더로 대규모 장기 프로젝트였습니다.\\\\n 국내외 홈페이지 빌더를 벤치마킹하여 클릭 조작으로 쉽게 홈페이지를 만들 수 있게 기획 단계에서 부터 고민하며 만들었습니다.\\\\nUI를 구조화하여 헤더, 푸터, 슬라이더, 리스트, 버튼 등 타입별로 세세하게 정리 후 모듈화 했고, 이후 모듈화 된 UI를 조합해 홈페이지 스킨 작업을 했습니다."},{"id":"3","title":"퍼스트몰 - 라이브","view":"images/pofol/pofol_img38.png","alt":"퍼스트몰 - 라이브","skills":["CSS3(flex, gradient..)","SCSS"],"participation":"웹 퍼블리싱(하이브리드 앱) 100%","url":{"service":["https://play.google.com/store/apps/details?id=kr.firstmall.live"]}},{"id":"4","title":"이셀러스 - 메세징서비스","view":"images/pofol/pofol_img37.png","alt":"이셀러스 - 메세징서비스","skills":["SCSS"],"participation":"웹퍼블리싱 100%","url":{"service":["https://www.esellers.co.kr/introduce/sms"],"sample":["/html/esMsgIndex.html"]}},{"id":"5","title":"퍼스트몰 - 디자인 32","view":"images/pofol/pofol_img36.png","alt":"퍼스트몰 디자인 32","skills":["반응형","css animation"],"participation":"웹퍼블리싱 100%","url":{"service":["http://responsive-sample32.firstmall.kr"]}},{"id":"6","title":"퍼스트몰 - 디자인 31","view":"images/pofol/pofol_img35.png","alt":"퍼스트몰 디자인 31","skills":["반응형","css animation"],"participation":"웹퍼블리싱 100%","url":{"service":["http://responsive-sample31.firstmall.kr"]}},{"id":"7","title":"퍼스트몰 - 디자인 30","view":"images/pofol/pofol_img34.png","alt":"퍼스트몰 디자인 30","skills":["반응형","css animation"],"participation":"웹퍼블리싱 100%","url":{"service":["http://responsive-sample30.firstmall.kr"]}},{"id":"8","title":"이셀러스","view":"images/pofol/pofol_img33.png","alt":"이셀러스 화면","skills":["반응형","css animation"],"participation":"웹퍼블리싱 70%","url":{"service":["https://www.esellers.co.kr"]}},{"id":"9","title":"가비아CNS 다이애드WAVE","view":"images/pofol/pofol_img32.png","alt":"가비아CNS 다이애드WAVE 화면","skills":["amchart.js","fullcalendar.js","ES6","Babel","SCSS"],"participation":"웹디자인/퍼블리싱 100%","url":{"service":["https://wave.diad.co.kr"],"sample":[""]}},{"id":"10","title":"가비아CNS 다이애드PRO","view":"images/pofol/pofol_img31.png","alt":"가비아CNS 다이애드PRO 화면","skills":["Vue.js","grid js 개발","Vanilla js","SCSS"],"participation":"웹디자인/퍼블리싱 100%","url":{"service":["https://service.diad.co.kr"],"sample":[""]}},{"id":"11","title":"가비아CNS 마케팅센터 모바일","view":"images/pofol/pofol_img29.png","alt":"가비아CNS 마케팅센터 다이애드 모바일 화면","skills":["Vue.js","SCSS"],"participation":"웹디자인/퍼블리싱 100%","url":{"service":["https://m.diad.co.kr"],"sample":[""]}},{"id":"12","title":"가비아CNS 마케팅센터","view":"images/pofol/pofol_img28.png","alt":"가비아CNS 마케팅센터 다이애드 화면","skills":["SCSS"],"participation":"웹디자인/퍼블리싱 100%","url":{"service":["https://diad.co.kr"],"sample":[""]}},{"id":"13","title":"가비아CNS 마케팅센터 Admin","view":"images/pofol/pofol_img30.png","alt":"가비아CNS 마케팅센터 Admin 화면","skills":["SCSS"],"participation":"웹디자인/퍼블리싱 100%","url":{"service":["https://admin.diad.co.kr"],"sample":[""]}},{"id":"14","title":"이셀러스 미니샵 - 트렌디형","view":"images/pofol/pofol_img27.png","alt":"이셀러스 미니샵 - 트렌디형","skills":["SCSS","css animation"],"participation":"웹퍼블리싱 100%","url":{"sample":["/html/minishopTrendy.html"]}},{"id":"15","title":"이셀러스 미니샵 - 스토리형","view":"images/pofol/pofol_img26.png","alt":"이셀러스 미니샵 - 스토리형","skills":["SCSS","css animation"],"participation":"웹퍼블리싱 100%","url":{"sample":["/html/minishopStory.html"]}},{"id":"16","title":"이셀러스 미니샵 - 심플형","view":"images/pofol/pofol_img25.png","alt":"이셀러스 미니샵 - 심플형","skills":["SCSS","css animation"],"participation":"웹퍼블리싱 100%","url":{"sample":["/html/minishopSimple.html"]}},{"id":"17","title":"ADCORE 2017 - KTH","view":"images/pofol/pofol_img24.png","alt":"ADCORE 2017 화면","skills":["css animation"],"participation":"웹디자인/웹퍼블리싱 100%","url":{"service":[""],"sample":["/html/adcore2017.html"]}},{"id":"18","title":"MEGALINE","view":"images/pofol/pofol_img23.png","alt":"MEGALINE 화면","participation":"웹퍼블리싱 100%","url":{"service":["http://tpimegaline.astroweb.co.kr/"],"sample":[""]}},{"id":"19","title":"BYPAIR APP","view":"images/pofol/pofol_img20.png","alt":"BYPAIR APP 화면","participation":"웹 퍼블리싱(하이브리드 앱) 100%","url":{"service":["http://www.bypair.com/download"],"sample":[""]}},{"id":"20","title":"DB-Stars","view":"images/pofol/pofol_img13.png","alt":"DB-Stars 화면","skills":["반응형"],"participation":"웹디자인/웹퍼블리싱 100%","url":{"service":["https://www.dbstars.or.kr/dbstars/main.star"],"sample":[""]}},{"id":"21","title":"SolGuest Global","view":"images/pofol/pofol_img22.png","alt":"SolGuest Global PC 화면","participation":"웹퍼블리싱 100%","url":{"service":["http://global.solguest.com/html"],"sample":[""]}},{"id":"22","title":"SolGuest Global 모바일","view":"images/pofol/pofol_img21.png","alt":"SolGuest Global 모바일 화면","participation":"웹퍼블리싱 100%","url":{"service":["http://global.solguest.com/m"],"sample":[""]}},{"id":"23","title":"Booketing","view":"images/pofol/pofol_img19.png","alt":"Booketing 화면","participation":"웹디자인/웹퍼블리싱 100%","url":{"service":["http://www.booketing.co.kr"],"sample":[""]}},{"id":"24","title":"데이터스토어 2016 모바일","view":"images/pofol/pofol_img18.png","alt":"데이터스토어 2016 모바일 화면","participation":"웹디자인/웹퍼블리싱 100%","url":{"service":["https://www.datastore.or.kr/m/main.do"],"sample":[""]}},{"id":"25","title":"데이터스토어 2016","view":"images/pofol/pofol_img17.png","alt":"데이터스토어 2016 화면","skills":["IE8"],"participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":["https://www.datastore.or.kr/intro.do"],"sample":[""]}},{"id":"26","title":"북틀 APP","view":"images/pofol/pofol_img16.png","alt":"북틀 APP 화면","participation":"앱디자인 30%","url":{"service":["https://play.google.com/store/apps/details?id=com.bdb.booklearn_sds"],"sample":[""]}},{"id":"27","title":"ShiftNovel","view":"images/pofol/pofol_img15.png","alt":"ShiftNovel 화면","participation":"웹디자인 100%","url":{"service":[""],"sample":[""]}},{"id":"28","title":"Clinic&Trip","view":"images/pofol/pofol_img14.png","alt":"Clinic&Trip 화면","participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":["http://clinicntrip.com/index"],"sample":[""]}},{"id":"29","title":"ADCORE 2016 - KTH","view":"images/pofol/pofol_img12.png","alt":"ADCORE 2016 화면","participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":[""],"sample":["/html/adcore2016.html"]}},{"id":"30","title":"CLiP 서비스 통계 - KTH","view":"images/pofol/pofol_img10.png","alt":"CLiP 서비스 통계 화면","participation":"웹디자인 100%","url":{"service":[""],"sample":[""]}},{"id":"31","title":"데이터스토어 2015 모바일","view":"images/pofol/pofol_img11.png","alt":"데이터스토어 2015 모바일 화면","participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":[""],"sample":[""]}},{"id":"32","title":"데이터스토어 2015","view":"images/pofol/pofol_img09.png","alt":"데이터스토어 2015 화면","skills":["IE8"],"participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":[""],"sample":[""]}},{"id":"33","title":"ADCORE 2015 - KTH","view":"images/pofol/pofol_img08.png","alt":"ADCORE 2015 화면","participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":[""],"sample":[""]}},{"id":"34","title":"KKA Portfolio 2015","view":"images/pofol/pofol_img07.png","alt":"KKA Portfolio 2015 화면","participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":["http://kkaparal.dothome.co.kr"],"sample":[""]}},{"id":"35","title":"엄마맘 어린이집","view":"images/pofol/pofol_img06.png","alt":"엄마맘 어린이집 화면","participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":[""],"sample":[""]}},{"id":"36","title":"KKA Portfolio 2014","view":"images/pofol/pofol_img05.png","alt":"KKA Portfolio 2014 화면","participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":["http://kkapofol.dothome.co.kr"],"sample":[""]}},{"id":"37","title":"1973JJ","view":"images/pofol/pofol_img04.png","alt":"1973JJ 화면","participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":["http://www.1973jj.co.kr/shop/main/index.php"],"sample":[""]}},{"id":"38","title":"삼성전자 온라인 종합몰 협력사","view":"images/pofol/pofol_img03.png","alt":"삼성전자 온라인 종합몰 협력사 화면","participation":"웹디자인 100% / 웹퍼블리싱 100%","url":{"service":["http://www.hyundaihmall.com/front/dpa/searchSpexSectItem.do?sectId=208994"],"sample":[""]}},{"id":"39","title":"데코르떼","view":"images/pofol/pofol_img02.png","alt":"데코르떼 화면","participation":"웹디자인 100%","url":{"service":["http://www.decortepop.co.kr"],"sample":[""]}},{"id":"40","title":"시보니","view":"images/pofol/pofol_img01.png","alt":"시보니 화면","participation":"웹디자인 100%","url":{"service":["http://www.siboni.co.kr"],"sample":[""]}}]}')}},function(i){i.O(0,[431,73,691,858,971,472,744],function(){return i(i.s=519)}),_N_E=i.O()}]);