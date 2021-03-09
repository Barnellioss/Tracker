(this.webpackJsonptracker=this.webpackJsonptracker||[]).push([[0],{135:function(t,e,n){},162:function(t,e,n){"use strict";n.r(e);var a=n(11),r=n(0),o=n.n(r),c=n(21),s=n.n(c),i=(n(63),n(64)),u=n(65),p=n(82),l=n(80),j=n(54),m=n(35),d=n(81),b=n(67),f=n.n(b),O=n(166),h=(n(134),function(t){var e=Object(r.useState)(""),n=Object(d.a)(e,2),o=n[0],c=n[1],s=f()().format("DD MM YYYY, HH:mm:ss");return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),o.trim()?(t.createNote(o.trim()),c("")):t.createNote(s)},children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)(O.a,{type:"text",value:o,onChange:function(t){return c(t.target.value)},className:"form-control",placeholder:"Enter Note"})})})}),x=n(164),v=(n(135),n(167)),S=n(168),y=n(169),T=n(31),g=n.n(T),w=n(51),N=n(118),k=n(17),D=n(36),M=n.n(D),E="ADD_NOTE",C="FETCH_NOTES",B="REMOVE_NOTE",I="STOP_TIMER",V="RESUME_TIMER",F="RESET_TIMER",Y={notes:[],id:0},_="https://trackerbase-9239b-default-rtdb.europe-west1.firebasedatabase.app/",z=function(){return function(){var t=Object(w.a)(g.a.mark((function t(e){var n,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.get("".concat(_,"/notes.json"));case 2:n=t.sent,a=Object.keys(n.data||{}).map((function(t){return Object(k.a)(Object(k.a)({},n.data[t]),{},{id:t})})),e({type:C,payload:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return Object(k.a)(Object(k.a)({},t),{},{notes:[].concat(Object(N.a)(t.notes),[e.payload])});case C:return Object(k.a)(Object(k.a)({},t),{},{notes:e.payload});case B:return Object(k.a)(Object(k.a)({},t),{},{notes:t.notes.filter((function(t){return t.id!=e.id}))});case I:case V:case F:return Object(k.a)(Object(k.a)({},t),{},{note:Object(k.a)({},e.payload)});default:return t}},H=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={timerOn:t.props.note.startStop[0].stopped,timerStart:0,timerTime:t.props.note.startStop[0].stopped?t.props.note.startStop[0].timerValue:t.props.note.startStop[0].timerValue+Date.now()-t.props.note.startStop[0].date,note:t.props.note},t.startTimer=function(){t.props.resumeTimer(t.state.note.id),t.setState({timerOn:!0,timerTime:t.state.timerTime,timerStart:Date.now()-t.state.timerTime}),t.timer=setInterval((function(){t.setState({timerTime:Date.now()-t.state.timerStart})}),10)},t.stopTimer=function(){t.setState({timerOn:!1}),clearInterval(t.timer),t.props.SetTimerValue(t.state.note.id,t.state.timerTime)},t.resetTimer=function(){t.props.resetTimer(t.state.note.id),t.setState({timerStart:0,timerTime:0})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.timerTime,e=("0"+Math.floor(t/1e3)%60).slice(-2),n=("0"+Math.floor(t/6e4)%60).slice(-2),r=("0"+Math.floor(t/36e5)).slice(-2);return Object(a.jsxs)("div",{className:"Stopwatch",children:[Object(a.jsxs)("div",{className:"Stopwatch-display",children:[r," : ",n," : ",e]}),Object(a.jsxs)("div",{className:"Stopwatch-btns",children:[!1===this.state.timerOn&&0===this.state.timerTime&&Object(a.jsx)(v.a,{style:{fontSize:"18px",marginBottom:"1",color:"#000"},onClick:this.startTimer}),!0===this.state.timerOn&&Object(a.jsx)(S.a,{style:{fontSize:"18px",marginLeft:"auto",marginBottom:"1",color:"#000"},onClick:this.stopTimer}),!1===this.state.timerOn&&this.state.timerTime>0&&Object(a.jsx)(v.a,{style:{fontSize:"18px",marginBottom:"1",color:"#000"},onClick:this.startTimer}),!1===this.state.timerOn&&this.state.timerTime>0&&Object(a.jsx)(y.a,{style:{fontSize:"18px",marginBottom:1,color:"#000"},onClick:this.resetTimer})]})]})}}]),n}(r.Component),L=Object(m.d)(Object(j.b)((function(t){return{notes:t.fireBaseState.notes}}),{setNotes:z,SetTimerValue:function(t,e){return function(){var n=Object(w.a)(g.a.mark((function n(a){var r,o,c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.a.get("".concat(_,"/notes/").concat(t,".json"));case 2:return r=n.sent,o=r.data,c=Object(k.a)(Object(k.a)({},o),{},{startStop:[{date:Date.now(),stopped:!0,timerValue:e}]}),n.next=7,M.a.put("".concat(_,"/notes/").concat(t,".json"),c);case 7:a({type:I,payload:c});case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},resumeTimer:function(t){return function(){var e=Object(w.a)(g.a.mark((function e(n){var a,r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("".concat(_,"/notes/").concat(t,".json"));case 2:return a=e.sent,r=a.data,o=Object(k.a)(Object(k.a)({},r),{},{startStop:[{timerValue:r.startStop[0].timerValue,stopped:!1,date:Date.now()}]}),e.next=7,M.a.put("".concat(_,"/notes/").concat(t,".json"),o);case 7:n({type:V,payload:o});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},resetTimer:function(t){return function(){var e=Object(w.a)(g.a.mark((function e(n){var a,r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("".concat(_,"/notes/").concat(t,".json"));case 2:return a=e.sent,r=a.data,o=Object(k.a)(Object(k.a)({},r),{},{startStop:[{timerValue:0,stopped:!0,date:Date.now()}]}),e.next=7,M.a.put("".concat(_,"/notes/").concat(t,".json"),o);case 7:n({type:F,payload:o});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(H),P=n(170),A=o.a.memo((function(t){var e=t.notes,n=t.deleteNote,o=Object(r.useState)(""),c=Object(d.a)(o,2),s=c[0],i=c[1];return s.trim()&&n(s).then((function(){return i("")})),Object(a.jsx)(x.b,{itemLayout:"horizontal",dataSource:e,renderItem:function(t){return Object(a.jsxs)(x.b.Item,{className:"note note-enter-active",children:[Object(a.jsx)("div",{className:"paragraph",children:t.startStop[0].stopped?Object(a.jsx)(x.b.Item.Meta,{className:"list-group-item",title:Object(a.jsx)("p",{style:{color:"#000"},children:t.title})}):Object(a.jsx)(x.b.Item.Meta,{className:"list-group-item",title:Object(a.jsx)("p",{style:{color:"#59B87D"},children:t.title})})}),Object(a.jsx)(L,{note:t}),Object(a.jsx)(P.a,{style:{fontSize:"18px",color:"#D46F7F"},className:"delete__btn",onClick:function(){return i(t.id)},type:"button"})]})}})})),J=n(165).a.Title,U=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.setNotes()}},{key:"componentDidUpdate",value:function(){this.props.setNotes()}},{key:"render",value:function(){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(J,{className:"header",children:"Tracker"}),Object(a.jsx)(h,{createNote:this.props.createNote}),Object(a.jsx)("hr",{}),Object(a.jsx)(A,{notes:this.props.notes,deleteNote:this.props.deleteNote,danger:this.props.danger})]})}}]),n}(r.PureComponent),q=Object(m.d)(Object(j.b)((function(t){return{notes:t.fireBaseState.notes,danger:t.fireBaseState.danger}}),{setNotes:z,createNote:function(t){return function(){var e=Object(w.a)(g.a.mark((function e(n){var a,r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={title:t,date:f()().format("DD MM YYYY, HH:mm:ss"),startStop:[{stopped:!1,timerValue:0,date:Date.now()}]},e.next=3,M.a.post("".concat(_,"/notes.json"),a);case 3:r=e.sent,o=Object(k.a)(Object(k.a)({},a),{},{id:r.data.name}),n({type:E,payload:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},deleteNote:function(t){return function(){var e=Object(w.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.delete("".concat(_,"/notes/").concat(t,".json"));case 2:n({type:B,id:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(U);var G=function(){return Object(a.jsx)("div",{className:"container pt-4",children:Object(a.jsx)("div",{children:Object(a.jsx)(q,{})})})},K=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,171)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),o(t),c(t)}))},Q=n(115),W=Object(m.c)({fireBaseState:R}),X=Object(m.e)(W,Object(m.a)(Q.a));window.store=X;var Z=X;s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(j.a,{store:Z,children:Object(a.jsx)(G,{})})}),document.getElementById("root")),K()},63:function(t,e,n){}},[[162,1,2]]]);
//# sourceMappingURL=main.209675a4.chunk.js.map