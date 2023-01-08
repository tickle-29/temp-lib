"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const store_1=require("./store");jest.useFakeTimers(),test("move elements up",(()=>{var e,t,l,o,d,i,a,n,c,v,r,s,p;const u=(0,store_1.createStore)();u.addPage(),null===(e=u.activePage)||void 0===e||e.addElement({type:"text",id:"1"}),null===(t=u.activePage)||void 0===t||t.addElement({type:"text",id:"2"}),null===(l=u.activePage)||void 0===l||l.addElement({type:"text",id:"3"}),null===(o=u.activePage)||void 0===o||o.addElement({type:"text",id:"4"}),expect(null===(d=u.activePage)||void 0===d?void 0:d.canMoveElementsUp(["2","4"])).toEqual(!0),null===(i=u.activePage)||void 0===i||i.moveElementsUp(["2","4"]),expect(null===(a=u.activePage)||void 0===a?void 0:a.children.map((e=>e.id))).toStrictEqual(["1","3","2","4"]),expect(null===(n=u.activePage)||void 0===n?void 0:n.canMoveElementsUp(["2","4"])).toEqual(!1),null===(c=u.activePage)||void 0===c||c.moveElementsUp(["2","4"]),expect(null===(v=u.activePage)||void 0===v?void 0:v.children.map((e=>e.id))).toStrictEqual(["1","3","2","4"]),null===(r=u.activePage)||void 0===r||r.moveElementsUp(["3","1"]),expect(null===(s=u.activePage)||void 0===s?void 0:s.children.map((e=>e.id))).toStrictEqual(["2","1","3","4"]),null===(p=u.activePage)||void 0===p||p.moveElementsUp(["5","1"])})),test("move elements top",(()=>{var e,t,l,o,d,i,a,n,c;const v=(0,store_1.createStore)();v.addPage(),null===(e=v.activePage)||void 0===e||e.addElement({type:"text",id:"1"}),null===(t=v.activePage)||void 0===t||t.addElement({type:"text",id:"2"}),null===(l=v.activePage)||void 0===l||l.addElement({type:"text",id:"3"}),null===(o=v.activePage)||void 0===o||o.addElement({type:"text",id:"4"}),expect(null===(d=v.activePage)||void 0===d?void 0:d.canMoveElementsTop(["2","4"])).toEqual(!0),null===(i=v.activePage)||void 0===i||i.moveElementsTop(["1","4"]),expect(null===(a=v.activePage)||void 0===a?void 0:a.children.map((e=>e.id))).toStrictEqual(["2","3","1","4"]),expect(null===(n=v.activePage)||void 0===n?void 0:n.canMoveElementsTop(["1","4"])).toEqual(!1),null===(c=v.activePage)||void 0===c||c.moveElementsTop(["5","1"])})),test("move elements down",(()=>{var e,t,l,o,d,i,a,n,c,v,r;const s=(0,store_1.createStore)();s.addPage(),null===(e=s.activePage)||void 0===e||e.addElement({type:"text",id:"1"}),null===(t=s.activePage)||void 0===t||t.addElement({type:"text",id:"2"}),null===(l=s.activePage)||void 0===l||l.addElement({type:"text",id:"3"}),null===(o=s.activePage)||void 0===o||o.addElement({type:"text",id:"4"}),expect(null===(d=s.activePage)||void 0===d?void 0:d.canMoveElementsDown(["1","2"])).toEqual(!1),expect(null===(i=s.activePage)||void 0===i?void 0:i.canMoveElementsDown(["4","2"])).toEqual(!0),null===(a=s.activePage)||void 0===a||a.moveElementsDown(["4","2"]),expect(null===(n=s.activePage)||void 0===n?void 0:n.children.map((e=>e.id))).toStrictEqual(["2","1","4","3"]),null===(c=s.activePage)||void 0===c||c.moveElementsDown(["2","4"]),expect(null===(v=s.activePage)||void 0===v?void 0:v.children.map((e=>e.id))).toStrictEqual(["2","4","1","3"]),null===(r=s.activePage)||void 0===r||r.moveElementsDown(["5","1"])})),test("locking API should continue to work",(()=>{const e=(0,store_1.createStore)();e.loadJSON({width:100,height:100,pages:[{id:"page1",children:[{id:"element1",type:"text",text:"hello",locked:!0}]}]});const t=e.getElementById("element1");expect(null==t?void 0:t.locked).toEqual(!0),expect(null==t?void 0:t.draggable).toEqual(!1),expect(null==t?void 0:t.contentEditable).toEqual(!1)})),test("loading from JSON should keep UI settings",(()=>{const e=(0,store_1.createStore)();e.addPage().addElement({type:"text"});const t=e.toJSON();e.setScale(.5),e.toggleRulers(),e.toggleBleed(),e.loadJSON(t),expect(e.scale).toEqual(.5),expect(e.rulesVisible).toBe(!0),expect(e.bleedVisible).toBe(!0)})),test("loading from JSON should keep old instances",(()=>{const e=(0,store_1.createStore)(),t=e.addPage().addElement({type:"text",id:"el"}),l=e.toJSON();e.loadJSON(l),expect(t).toEqual(e.getElementById("el"))})),test("loading from JSON should not keep history by default",(()=>{const e=(0,store_1.createStore)(),t=e.addPage().addElement({type:"text",id:"el"}),l=e.toJSON(),o=e.history;jest.runAllTimers(),t.set({text:"1"}),jest.runAllTimers(),expect(e.history.history.length).toBe(2),e.loadJSON(l),jest.runAllTimers(),expect(e.history===o).toBe(!0),expect(e.history.history.length).toBe(1)})),test("loading from JSON may keep history",(()=>{const e=(0,store_1.createStore)(),t=e.addPage().addElement({type:"text",id:"el"}),l=e.toJSON();jest.runAllTimers(),t.set({text:"1"}),jest.runAllTimers(),expect(e.history.history.length).toBe(2),e.loadJSON(l,!0),jest.runAllTimers(),expect(e.history.history.length).toBe(3)})),test("can group shapes",(()=>{var e,t,l;const o=(0,store_1.createStore)(),d=o.addPage(),i=d.addElement({type:"text",id:"el1"}),a=d.addElement({type:"text",id:"el2"});o.groupElements([i.id,a.id]),expect(null===(e=o.activePage)||void 0===e?void 0:e.children.length).toBe(1),expect(null===(t=o.activePage)||void 0===t?void 0:t.children[0].type).toBe("group"),expect(null===(l=o.activePage)||void 0===l?void 0:l.children[0].children.length).toBe(2)})),test("can ungroup shapes",(()=>{var e,t,l,o;const d=(0,store_1.createStore)(),i=d.addPage(),a=i.addElement({type:"text",id:"el1"}),n=i.addElement({type:"text",id:"el2"});d.groupElements([a.id,n.id]);const c=null===(e=d.activePage)||void 0===e?void 0:e.children[0];d.ungroupElements([c.id]),expect(null===(t=d.activePage)||void 0===t?void 0:t.children.length).toBe(2),expect(null===(l=d.activePage)||void 0===l?void 0:l.children[0].type).toBe("text"),expect(null===(o=d.activePage)||void 0===o?void 0:o.children[1].type).toBe("text")})),test("create nested group",(()=>{var e,t,l,o,d,i,a,n,c,v;const r=(0,store_1.createStore)(),s=r.addPage(),p=s.addElement({type:"text",id:"el1"}),u=s.addElement({type:"text",id:"el2"});r.groupElements([p.id,u.id]);const g=null===(e=r.activePage)||void 0===e?void 0:e.children[0],m=s.addElement({type:"text",id:"el3"});r.groupElements([g.id,m.id]),expect(null===(t=r.activePage)||void 0===t?void 0:t.children.length).toBe(1),expect(null===(l=r.activePage)||void 0===l?void 0:l.children[0].type).toBe("group"),expect(null===(o=r.activePage)||void 0===o?void 0:o.children[0].children.length).toBe(2),expect(null===(d=r.activePage)||void 0===d?void 0:d.children[0].children[0].type).toBe("group"),expect(null===(i=r.activePage)||void 0===i?void 0:i.children[0].children[1].type).toBe("text"),r.ungroupElements([null===(a=r.activePage)||void 0===a?void 0:a.children[0].id]),expect(null===(n=r.activePage)||void 0===n?void 0:n.children.length).toBe(2),expect(null===(c=r.activePage)||void 0===c?void 0:c.children[0].type).toBe("group"),expect(null===(v=r.activePage)||void 0===v?void 0:v.children[1].type).toBe("text")}));