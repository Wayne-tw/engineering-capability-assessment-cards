/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={466:function(e){e.exports=function(){"use strict";var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function o(e){return"function"==typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(e,t){return null!=e&&"object"==typeof e&&t in e}var n=RegExp.prototype.test;var s=/\S/;function a(e){return!function(e,t){return n.call(e,t)}(s,e)}var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var c=/\s*/,u=/\s+/,d=/\s*=/,h=/\s*\}/,p=/#|\^|\/|>|\{|&|=|!/;function g(e){this.string=e,this.tail=e,this.pos=0}function m(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function f(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.eos=function(){return""===this.tail},g.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var o=t[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o},g.prototype.scanUntil=function(e){var t,o=this.tail.search(e);switch(o){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,o),this.tail=this.tail.substring(o)}return this.pos+=t.length,t},m.prototype.push=function(e){return new m(e,this)},m.prototype.lookup=function(e){var t,r,n,s=this.cache;if(s.hasOwnProperty(e))t=s[e];else{for(var a,l,c,u=this,d=!1;u;){if(e.indexOf(".")>0)for(a=u.view,l=e.split("."),c=0;null!=a&&c<l.length;)c===l.length-1&&(d=i(a,l[c])||(r=a,n=l[c],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(n))),a=a[l[c++]];else a=u.view[e],d=i(u.view,e);if(d){t=a;break}u=u.parent}s[e]=t}return o(t)&&(t=t.call(this.view)),t},f.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},f.prototype.parse=function(e,o){var i=this.templateCache,n=e+":"+(o||y.tags).join(":"),s=void 0!==i,l=s?i.get(n):void 0;return null==l&&(l=function(e,o){if(!e)return[];var i,n,s,l=!1,m=[],f=[],w=[],v=!1,_=!1,k="",b=0;function W(){if(v&&!_)for(;w.length;)delete f[w.pop()];else w=[];v=!1,_=!1}function q(e){if("string"==typeof e&&(e=e.split(u,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);i=new RegExp(r(e[0])+"\\s*"),n=new RegExp("\\s*"+r(e[1])),s=new RegExp("\\s*"+r("}"+e[1]))}q(o||y.tags);for(var T,C,P,D,H,I,O=new g(e);!O.eos();){if(T=O.pos,P=O.scanUntil(i))for(var x=0,S=P.length;x<S;++x)a(D=P.charAt(x))?(w.push(f.length),k+=D):(_=!0,l=!0,k+=" "),f.push(["text",D,T,T+1]),T+=1,"\n"===D&&(W(),k="",b=0,l=!1);if(!O.scan(i))break;if(v=!0,C=O.scan(p)||"name",O.scan(c),"="===C?(P=O.scanUntil(d),O.scan(d),O.scanUntil(n)):"{"===C?(P=O.scanUntil(s),O.scan(h),O.scanUntil(n),C="&"):P=O.scanUntil(n),!O.scan(n))throw new Error("Unclosed tag at "+O.pos);if(H=">"==C?[C,P,T,O.pos,k,b,l]:[C,P,T,O.pos],b++,f.push(H),"#"===C||"^"===C)m.push(H);else if("/"===C){if(!(I=m.pop()))throw new Error('Unopened section "'+P+'" at '+T);if(I[1]!==P)throw new Error('Unclosed section "'+I[1]+'" at '+T)}else"name"===C||"{"===C||"&"===C?_=!0:"="===C&&q(P)}if(W(),I=m.pop())throw new Error('Unclosed section "'+I[1]+'" at '+O.pos);return function(e){for(var t,o=[],r=o,i=[],n=0,s=e.length;n<s;++n)switch((t=e[n])[0]){case"#":case"^":r.push(t),i.push(t),r=t[4]=[];break;case"/":i.pop()[5]=t[2],r=i.length>0?i[i.length-1][4]:o;break;default:r.push(t)}return o}(function(e){for(var t,o,r=[],i=0,n=e.length;i<n;++i)(t=e[i])&&("text"===t[0]&&o&&"text"===o[0]?(o[1]+=t[1],o[3]=t[3]):(r.push(t),o=t));return r}(f))}(e,o),s&&i.set(n,l)),l},f.prototype.render=function(e,t,o,r){var i=this.getConfigTags(r),n=this.parse(e,i),s=t instanceof m?t:new m(t,void 0);return this.renderTokens(n,s,o,e,r)},f.prototype.renderTokens=function(e,t,o,r,i){for(var n,s,a,l="",c=0,u=e.length;c<u;++c)a=void 0,"#"===(s=(n=e[c])[0])?a=this.renderSection(n,t,o,r,i):"^"===s?a=this.renderInverted(n,t,o,r,i):">"===s?a=this.renderPartial(n,t,o,i):"&"===s?a=this.unescapedValue(n,t):"name"===s?a=this.escapedValue(n,t,i):"text"===s&&(a=this.rawValue(n)),void 0!==a&&(l+=a);return l},f.prototype.renderSection=function(e,r,i,n,s){var a=this,l="",c=r.lookup(e[1]);if(c){if(t(c))for(var u=0,d=c.length;u<d;++u)l+=this.renderTokens(e[4],r.push(c[u]),i,n,s);else if("object"==typeof c||"string"==typeof c||"number"==typeof c)l+=this.renderTokens(e[4],r.push(c),i,n,s);else if(o(c)){if("string"!=typeof n)throw new Error("Cannot use higher-order sections without the original template");null!=(c=c.call(r.view,n.slice(e[3],e[5]),(function(e){return a.render(e,r,i,s)})))&&(l+=c)}else l+=this.renderTokens(e[4],r,i,n,s);return l}},f.prototype.renderInverted=function(e,o,r,i,n){var s=o.lookup(e[1]);if(!s||t(s)&&0===s.length)return this.renderTokens(e[4],o,r,i,n)},f.prototype.indentPartial=function(e,t,o){for(var r=t.replace(/[^ \t]/g,""),i=e.split("\n"),n=0;n<i.length;n++)i[n].length&&(n>0||!o)&&(i[n]=r+i[n]);return i.join("\n")},f.prototype.renderPartial=function(e,t,r,i){if(r){var n=this.getConfigTags(i),s=o(r)?r(e[1]):r[e[1]];if(null!=s){var a=e[6],l=e[5],c=e[4],u=s;0==l&&c&&(u=this.indentPartial(s,c,a));var d=this.parse(u,n);return this.renderTokens(d,t,r,u,i)}}},f.prototype.unescapedValue=function(e,t){var o=t.lookup(e[1]);if(null!=o)return o},f.prototype.escapedValue=function(e,t,o){var r=this.getConfigEscape(o)||y.escape,i=t.lookup(e[1]);if(null!=i)return"number"==typeof i&&r===y.escape?String(i):r(i)},f.prototype.rawValue=function(e){return e[1]},f.prototype.getConfigTags=function(e){return t(e)?e:e&&"object"==typeof e?e.tags:void 0},f.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!t(e)?e.escape:void 0};var y={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){w.templateCache=e},get templateCache(){return w.templateCache}},w=new f;return y.clearCache=function(){return w.clearCache()},y.parse=function(e,t){return w.parse(e,t)},y.render=function(e,o,r,i){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+((t(n=e)?"array":typeof n)+'" was given as the first argument for mustache#render(template, view, partials)'));var n;return w.render(e,o,r,i)},y.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return l[e]}))},y.Scanner=g,y.Context=m,y.Writer=f,y}()},710:(e,t,o)=>{"use strict";const r=JSON.parse('[{"id":1,"slug":"dev-practices","category":"Dev Practices","title":"Config deployment","description":"How easy is to deploy/inject a configuration change","high_score":"We can run the majority of config changes independently of our code release.  All changes are auditable and revertable","low_score":"We have to manual changes","more_info_link":null,"important":null,"seq":1},{"id":2,"slug":"dev-practices","category":"Dev Practices","title":"Feature Coverage","description":"What proportion of the features are covered by a test","high_score":"Every one of our features has at least one test","low_score":"Less than 25% of our features have corresponding tests","more_info_link":null,"important":true,"seq":1},{"id":3,"slug":"dev-practices","category":"Dev Practices","title":"Unplanned Work","description":"How much unplanned work do you have and how do you handle it","high_score":"We have very little unplanned work and have spare capacity to handle any that comes in","low_score":"More than half our work in any given sprint is unplanned","more_info_link":null,"important":true,"seq":1},{"id":4,"slug":"dev-practices","category":"Dev Practices","title":"Broken Builds","description":"Don\'t check In on broken build except to fix the broken build","high_score":"We guard the build with care and never check-in on a broken build","low_score":"We cannot easily know when a team has broken our build","more_info_link":null,"important":true,"seq":1},{"id":5,"slug":"dev-practices","category":"Dev Practices","title":"Stop the Line","description":"If any part of the pipeline fails everyone stops feature work and fixes the problem","high_score":"If the pipeline fails it is clear which team is responsible so we stop our work immediately and fix the problem","low_score":"The pipeline fails so often it is difficult to know which team broke the build","more_info_link":null,"important":true,"seq":1},{"id":6,"slug":"dev-practices","category":"Dev Practices","title":"Spend on Operability","description":"What proportion of product budget and team effort is spent on operational aspects? How do you track this?","high_score":"We spend our 30% of our time and budget on addressing operational aspects?","low_score":"We try to spend as little as possible on operational aspects / we do not track spend on operational aspects?","more_info_link":null,"important":null,"seq":1},{"id":7,"slug":"dev-practices","category":"Dev Practices","title":"Testability","description":"How do we show that the software system is easy to test? What do we provide and to whom?","high_score":"We run clients and external test packs against all parts of our software within our development pipeline.","low_score":"We do not explicitly aim to make our software easily testable.","more_info_link":null,"important":null,"seq":1},{"id":8,"slug":"dev-practices","category":"Dev Practices","title":"Sensitive Data","description":"How do we ensure that sensitive data in logs is masked or hidden?","high_score":"We test data masking using feature tests that search for log messages after application behaviour is executed","low_score":"We do not test for sensitive data in logs","more_info_link":null,"important":null,"seq":1},{"id":9,"slug":"dev-practices","category":"Dev Practices","title":"Semantic Versioning ","description":"How strict are you with your approach to semantic versioning","high_score":"We use semantic versioning to communicate the meaning of changes.  We strive to make no breaking changes at all.  We use the tolerant reader pattern.  We peg the major.minor release version of our dependencies","low_score":"We just use the latest versions of each component or package and just increment our own version numbers","more_info_link":null,"important":true,"seq":1},{"id":10,"slug":"dev-practices","category":"Dev Practices","title":"Other Code","description":"How confident are you in the code from other internal teams that you depend on","high_score":"We are confident in our colleagues code, their docs are clear and coverage is rock solid","low_score":"Code from other teams is really flakey and we have to reach out often to try and understand their interfaces","more_info_link":null,"important":true,"seq":1},{"id":11,"slug":"dev-practices","category":"Dev Practices","title":"Test First","description":"What proportion of the time you spend on writing code is spent on writing tests","high_score":"We use a test first approach all the time and spend ~80% of our coding time writing our tests","low_score":"We often do not have time to write tests","more_info_link":null,"important":true,"seq":1},{"id":12,"slug":"dev-practices","category":"Dev Practices","title":"Unit test coverage","description":"What is your current code coverage level?","high_score":"It’s about 80% or greater","low_score":"Our unit test coverage is ~10% or lower","more_info_link":null,"important":null,"seq":1},{"id":13,"slug":"dev-practices","category":"Dev Practices","title":"Test Data","description":"How do you get your test data?","high_score":"All our test data is generated from scripts and injected into the data stores","low_score":"We have manual processes for setting up test data for environments","more_info_link":null,"important":null,"seq":1},{"id":14,"slug":"dev-practices","category":"Dev Practices","title":"Deployment code","description":"How is your deployment code structured?  Do you have tests for your deployment pipeline code","high_score":"We have deployment verification tests for key parts of our build and automation suite.  The code is modular and well structured","low_score":"We do not test our build and deployment code, it’s just a handful of scritps","more_info_link":null,"important":null,"seq":1},{"id":15,"slug":"dev-practices","category":"Dev Practices","title":"Testability","description":"How easy is it to test your code?","high_score":"We use dependency injection extensivly and can easily stub out our dependencies in order to test the code","low_score":"Our code is tightly coupled and makes it hard to test","more_info_link":null,"important":true,"seq":1},{"id":16,"slug":"dev-practices","category":"Dev Practices","title":"Rugged Manifesto","description":"The rugged manifesto is a sensible set of practices to make our software more rugged","high_score":"We do our best to follow this manifesto","low_score":"Never heard of it before","more_info_link":"https://ruggedsoftware.org/","important":null,"seq":1},{"id":17,"slug":"dev-practices","category":"Dev Practices","title":"12 Factor Apps","description":"The 12 factor apps patterns are set of established practices to make our software more portable","high_score":"We do our best to follow this manifesto","low_score":"Never heard of it before","more_info_link":"https://12factor.net/","important":true,"seq":1},{"id":null,"slug":null,"category":null,"title":null,"description":null,"high_score":null,"low_score":null,"more_info_link":null,"important":null,"seq":null},{"id":1,"slug":"observability","category":"Observability","title":"Feature Toggles Observability","description":"How do we know which feature toggles are active for a deployments?","high_score":"We have a simple UI or API to see what\'s on in which environment","low_score":"We track things manually on paper or in our heads","more_info_link":null,"important":null,"seq":1},{"id":2,"slug":"observability","category":"Observability","title":"Full stack Observability","description":"Do you have multiple views of the entire stack\'s telemetry?","high_score":"We can see through the entire stack from the metal all the way up to the UI issues and performance","low_score":"We can only see one or two layers and don\'t really tie them together to tell a story","more_info_link":"https://devsecops.jujhar.com/observability-strategy/","important":true,"seq":1},{"id":3,"slug":"observability","category":"Observability","title":"Hardware insights","description":"How much insight do we have into the behaviour of our infra/deployment fabric","high_score":"We can tell you the CPU, RAM, NetworkIO & DiskIO for all our hardware in granular detail.  We can enumerate our hardware in detail and know which OS/CPU etc we’re running on","low_score":"We only have very rough measures of our hardware performance","more_info_link":null,"important":true,"seq":1},{"id":4,"slug":"observability","category":"Observability","title":"Logging Working","description":"How do we know that logging is working correctly?","high_score":"We test logging using tests that search for specific log message strings in the central log aggregation/search system","low_score":"We do not test if logging is working","more_info_link":null,"important":null,"seq":1},{"id":5,"slug":"observability","category":"Observability","title":"System Health","description":"How do we know that the system is healthy (or unhealthy)?","high_score":"We query the software using a standard http healthcheck URL and synthetic transactions for key scenarios","low_score":"We wait for checks made manually by another team to tell us if our software is healthy","more_info_link":null,"important":true,"seq":1},{"id":6,"slug":"observability","category":"Observability","title":"Service Status","description":"How do we display the current service/system status to ops teams and business stakeholders","high_score":"We build a dashboard in collaboration with the operations and business teams. UX is a key consideration","low_score":"Operations teams tend to discover the status indicators themselves","more_info_link":null,"important":true,"seq":1},{"id":null,"slug":null,"category":null,"title":null,"description":null,"high_score":null,"low_score":null,"more_info_link":null,"important":null,"seq":null},{"id":1,"slug":"deployments","category":"Deployments","title":"CI/CD Speed and Stability","description":"CI/CD processes are fast and stable","high_score":"The CI/CD pipelines are super fast and we get feedback on our software on almost real-time basis","low_score":"CI/CD takes so long to do or is very fragile and we end up losing whole chunks of our day to it.","more_info_link":null,"important":null,"seq":1},{"id":2,"slug":"deployments","category":"Deployments","title":"Blue-Green","description":"Any mechanism to test a new version alongside an existing version when necessary","high_score":"We use fine-grained blue-green deployment techniques, at the level of individual services","low_score":"We do not use any blue-green deployment techniques","more_info_link":null,"important":true,"seq":1},{"id":3,"slug":"deployments","category":"Deployments","title":"Idempotency - Redploying the app","description":"What would happen if we decided to redeploy the application even though nothing has changed","high_score":"No worries","low_score":"We don’t know what would happen, the deployments are flakey","more_info_link":null,"important":null,"seq":1},{"id":4,"slug":"deployments","category":"Deployments","title":"Rerun tests","description":"What would happen if we decided to rerun the test suite multiple times","high_score":"No worries","low_score":"We don’t know what would happen, the test suite is flakey","more_info_link":null,"important":true,"seq":1},{"id":5,"slug":"deployments","category":"Deployments","title":"Fresh config","description":"What would happen if we decided to delete the config and redeploy it","high_score":"No worries, the application would behave as it did before","low_score":"It’s very likely the app would behave differently as there’s a lot of manual changes","more_info_link":null,"important":null,"seq":1},{"id":6,"slug":"deployments","category":"Deployments","title":"Environment rebuild","description":"What would happen if we blew away the infra and re-created","high_score":"No worries, everything would be back up quickly and same as before","low_score":"It’s very likely the app would break as there’s a lot of manual clickops","more_info_link":null,"important":true,"seq":1},{"id":7,"slug":"deployments","category":"Deployments","title":"Release candidates","description":"Every check-in leads to a potential release","high_score":"Any checking can generate a safe build that might go to production without a furthur build","low_score":"We have to have special release candidate builds before we can release","more_info_link":null,"important":null,"seq":1},{"id":8,"slug":"deployments","category":"Deployments","title":"Automated config","description":"Config should always be performed by an automated process using values from your configuration repository","high_score":"All config is done using scripts","low_score":"Many of our applications are configure manually each time","more_info_link":null,"important":null,"seq":1},{"id":9,"slug":"deployments","category":"Deployments","title":"Environment History","description":"It should be possible to clearly see a history and log of changes made to our environments","high_score":"We have a nice dashboard of deployments and their impact","low_score":"It is difficult to see the history of changes in an environment","more_info_link":null,"important":true,"seq":1},{"id":10,"slug":"deployments","category":"Deployments","title":"DB Changes","description":"Decouple application deployments from schema migrations","high_score":"Our application or service is completely decoupled from the underlying db schemas","low_score":"We must co-ordinate the releases of our applications with any data layer changes","more_info_link":null,"important":null,"seq":1},{"id":null,"slug":null,"category":null,"title":null,"description":null,"high_score":null,"low_score":null,"more_info_link":null,"important":null,"seq":null},{"id":1,"slug":"availability","category":"Availability","title":"MTTR","description":"How long does it take you to restore service in the case of an incident","high_score":"We track our MTTR across the board and can restore in <10 mins on average","low_score":"We do not track this properly","more_info_link":"https://en.wikipedia.org/wiki/Mean_time_to_repair","important":true,"seq":1},{"id":2,"slug":"availability","category":"Availability","title":"Service KPIs","description":"How do we track the main service/system Key Performance Indicators (KPIs)? What are the KPIs?","high_score":"We use logging and/or time series metrics to emit service KPIs that are picked up by a dashboard","low_score":"We do not have Service KPIs defined","more_info_link":null,"important":null,"seq":1},{"id":3,"slug":"availability","category":"Availability","title":"Service Restoration","description":"How do we keep things up and running: Can you recover quickly from incidents a low MTTR? Can you detect incidents ahead of time? Can you failover to backup systems\\"","high_score":"We have fully adopted SRE practices across the board. We continuously monitor and improve on your numbers","low_score":"Little to no availability practices","more_info_link":null,"important":true,"seq":1},{"id":4,"slug":"availability","category":"Availability","title":"Observability","description":"How much observability do you have on your systems environments, inputs, outputs and behaviour. Do you have enough information on how your system runs to make improvements/solve problems?","high_score":"Just the basics you get for free from Cloudwatch, an on-server agent, htop, task manager etc.","low_score":"Max Instrumentation and SLO driven dashboards","more_info_link":null,"important":true,"seq":1},{"id":null,"slug":null,"category":null,"title":null,"description":null,"high_score":null,"low_score":null,"more_info_link":null,"important":null,"seq":null},{"id":1,"slug":"culture","category":"Culture","title":"Path to production","description":"How easy is it to release the software that you work to production","high_score":"It\'s easy and straightforward to release my changes","low_score":"It\'s very difficult to release and takes a long time","more_info_link":null,"important":true,"seq":2},{"id":2,"slug":"culture","category":"Culture","title":"Low friction processes","description":"Do you feel that the processes are suitable for you to deliver software cotinuously","high_score":"The whole thing is a well oiled machine, everybody is in their groove and we barely feel any friction. The processes help us to do the right thing","low_score":"The processes are painful, too numerous and makes us cry","more_info_link":null,"important":true,"seq":1},{"id":3,"slug":"culture","category":"Culture","title":"Psychological Safety","description":"How safe do you feel to raise concerns","high_score":"Our concerns are valued and used to help improve the team and org","low_score":"If we raise concerns we are ignored or could get in trouble","more_info_link":null,"important":true,"seq":1},{"id":4,"slug":"culture","category":"Culture","title":"Teams around us","description":"How well do the teams around you work with you and your team?","high_score":"Teams around us are very friendly and helpful, it\'s a joy to work with the other teams","low_score":"Teams around us are unhelpful and rude","more_info_link":null,"important":true,"seq":1},{"id":5,"slug":"culture","category":"Culture","title":"Management style","description":"How effective and appropriate are the approaches by management and other senior stakeholders","high_score":"The management approaches help us to deliver rapidly and safely","low_score":"The management approach really hamper our efforts","more_info_link":null,"important":null,"seq":1},{"id":6,"slug":"culture","category":"Culture","title":"Value","description":"Do you work on valuable things as a team?","high_score":"We live and breathe a value-driven team approach","low_score":"We are disconnected from customer or user value","more_info_link":null,"important":true,"seq":1},{"id":7,"slug":"culture","category":"Culture","title":"Mission","description":"How well do you know why you are working on things?","high_score":"We have a clear mission that we are with all stakeholders","low_score":"It is rarely clear what our mission is","more_info_link":null,"important":true,"seq":1},{"id":8,"slug":"culture","category":"Culture","title":"Speed","description":"How rapidly do you work as a team?","high_score":"We deliver work rapidly together","low_score":"We seem to take a long time to get things done","more_info_link":null,"important":null,"seq":1},{"id":9,"slug":"culture","category":"Culture","title":"Fun","description":"How fun is it to work in your team? How much camaraderie and sense of teamwork?","high_score":"The team is a fun place to be every day","low_score":"Fun is rarely an aspect of our team work","more_info_link":null,"important":true,"seq":1},{"id":10,"slug":"culture","category":"Culture","title":"Learning","description":"How much do you learn as a team?","high_score":"We learn something every day","low_score":"We rarely learn something new","more_info_link":null,"important":true,"seq":1},{"id":11,"slug":"culture","category":"Culture","title":"Support","description":"How much support do you get as a team?","high_score":"We are well-supported as a team","low_score":"We get very little support as a team","more_info_link":null,"important":null,"seq":1},{"id":12,"slug":"culture","category":"Culture","title":"Pawns or players","description":"How much control do you have our what you work on and how?","high_score":"We have strong influence over what we work on","low_score":"We have very little say in what we work on","more_info_link":null,"important":true,"seq":1},{"id":13,"slug":"culture","category":"Culture","title":"Done","description":"Done means released into production and not causing problems","high_score":"Done means that the changes are deployed to prod with monitoring to ensure it has not broken anything","low_score":"Our definition of done is a bit wishy-washy and means “feature tests have passed”","more_info_link":null,"important":null,"seq":1},{"id":14,"slug":"culture","category":"Culture","title":"Collaboration","description":"How do we collaborate on operations aspects of the systems such as logging, monitoring, alerting and NFRs","high_score":"We collaboratee on operational aspects from the very first week of the project","low_score":"We respond after go-live wheen the tickets are raised by the live ops and service teams","more_info_link":null,"important":null,"seq":1},{"id":15,"slug":"culture","category":"Culture","title":"Our tools are cool","description":"Do you feel that your tools, hardware and software are up to scratch","high_score":"We love our tools and can solve any problem with them","low_score":"My machine is so slow and crashes all the time, to install any software I have to submit a ticket","more_info_link":null,"important":true,"seq":1},{"id":null,"slug":null,"category":null,"title":null,"description":null,"high_score":null,"low_score":null,"more_info_link":null,"important":null,"seq":null},{"id":1,"slug":"tech","category":"Tech","title":"Tech quality","description":"How healthy is the code base?","high_score":"Our code base is clean, safe to use and well-tested","low_score":"Our code base is piled with workarounds and danger areas","more_info_link":null,"important":true,"seq":1},{"id":2,"slug":"tech","category":"Tech","title":"Delivery Platform","description":"How effective and easy to use is the delivery platform underpinning your team\'s delivery?","high_score":"The platform is a force multiplier and helps us deliver rapidly and safely. We love the platform.","low_score":"The platform seems to obstruct us and is difficult to use","more_info_link":null,"important":null,"seq":1},{"id":3,"slug":"tech","category":"Tech","title":"API Replay","description":"Record interactions against a service or API","high_score":"We record key requests and responses from remote APIS which we use to build high-fidelity integratioon tests","low_score":"We have no way to record requests or responses from a remote API","more_info_link":null,"important":null,"seq":1},{"id":4,"slug":"tech","category":"Tech","title":"Binaries","description":"Only Build Your Binaries Once. No special \'release candidate\' builds","high_score":"We have only a single build to reproduce a binary artifact which then gets promoted through all the environments with no additional merging or building needed","low_score":"We have multiple different builds and then merge to create the final release candidate","more_info_link":null,"important":null,"seq":1},{"id":5,"slug":"tech","category":"Tech","title":"Stubs","description":"Simulate external systems. Treat almost every other system as \'external\'","high_score":"The stubs we consume and write are good quality and give us a degree of confidence that our tests are working well.","low_score":"There are few stubs available and we do noot have enough time to write stubs ourselves.","more_info_link":null,"important":null,"seq":1},{"id":6,"slug":"tech","category":"Tech","title":"Call Tracing","description":"How do we travel a call/request end-to-end through the system?","high_score":"We use a standard tracing library to trace calls through the system. Tracing fields are maintained across component boundaries","low_score":"We do not trace calls through the system","more_info_link":null,"important":true,"seq":1},{"id":7,"slug":"tech","category":"Tech","title":"Performance","description":"How do we know that the system/service performs within acceptable ranges?","high_score":"We run a set of indicative performances tests within our deployment pipeline that are run on every check-in to version control.","low_score":"We rely solely on the performance team to validate the performance of our application or service.","more_info_link":null,"important":true,"seq":1},{"id":8,"slug":"tech","category":"Tech","title":"Failure Modes","description":"How can we see and share the different known failure modes (failure scenarios) for the system?","high_score":"We use a set of error identifiers to define the failure modes in our software and we use these identifiers in our log messages","low_score":"We do not relaly know how the system might fail","more_info_link":null,"important":true,"seq":1},{"id":9,"slug":"tech","category":"Tech","title":"TLS Certificates","description":"How do we know when an SSL/TLS certificate is close to expiry?","high_score":"We use auto-renewal of certificates combined with certificate monitoring so we can take remedial action ahead of time","low_score":"We do not know when our certificates are going to expire","more_info_link":null,"important":null,"seq":1},{"id":null,"slug":null,"category":null,"title":null,"description":null,"high_score":null,"low_score":null,"more_info_link":null,"important":null,"seq":null},{"id":1,"slug":"flow","category":"Flow","title":"Branch Age","description":"We develop directly on master/trunk and any feature branches last no more than 2 days","high_score":"We developo directly no master/trunk and any feature branches last no more than 2 days","low_score":"Our feature branches last for many sprints","more_info_link":null,"important":null,"seq":1},{"id":2,"slug":"flow","category":"Flow","title":"Retrospectives","description":"How effective are your team retrospectives","high_score":"Our retrospectives are really energising,  valuable and effective for the team and we look forward to them","low_score":"We do not have regular retrospectives","more_info_link":null,"important":true,"seq":1},{"id":3,"slug":"flow","category":"Flow","title":"Onboarding","description":"How effective is the onboarding process for new teams and new staff","high_score":"The onboarding process is very simple, straightforward and clear","low_score":"The onboarding process is incredibly difficult and really hampers process","more_info_link":null,"important":true,"seq":1},{"id":4,"slug":"flow","category":"Flow","title":"Work in Progress","description":"How many things does your team work on at the same time? (Minimum, Typical)","high_score":"We have explicitly limited our WIP based on queing theory (or cost of Delay) and the WIP is equal or less than the number of people on the team","low_score":"We have significantly more Work in Progress (WIP) items than team members","more_info_link":null,"important":true,"seq":1},{"id":5,"slug":"flow","category":"Flow","title":"Cycle Time","description":"How long does it take for a code change to go from version control to running in Production? (Minimum, Typical)","high_score":"1 Hour or Less","low_score":"2 Weeks or More","more_info_link":null,"important":true,"seq":1},{"id":6,"slug":"flow","category":"Flow","title":"Failed Changes","description":"What proportion of changes to your application or service in Production fail or need remediation? (This is typically the number of failed deployments)","high_score":"Less than 5% of our changes / deployments fail in Production","low_score":"More than 20% of our changes / deployments fail in Production","more_info_link":null,"important":true,"seq":1},{"id":7,"slug":"flow","category":"Flow","title":"Innovation","description":"How well are you able to innovate around delivery approaches?","high_score":"We make our reserve time for delivery innovation every week and track changes as part of our team metrics","low_score":"We do not have time to innovate","more_info_link":null,"important":null,"seq":1},{"id":8,"slug":"flow","category":"Flow","title":"Deployment Frequency","description":"How often does your team deploy to Production?","high_score":"Every 2 days or less","low_score":"Every 2 weeks or longer in practice","more_info_link":null,"important":true,"seq":1}]');let i={};r.forEach((e=>{i[e.category]={}})),r.forEach((e=>{e.category&&(i[e.category].categoryName=e.category,i[e.category].cards=[])})),r.forEach((e=>{e.category&&(i[e.category].categoryName=e.category,i[e.category].cards.push(e))}));const n=Object.values(i),s=o(466),a=document.getElementById("card-container"),l=s.render('\n{{#data}}\n<div class="category-name" data-category="{{slug}}">\n  <h1>{{{categoryName}}}</h1>\n</div>\n{{#cards}}\n<div class="main-card-container col-md-6 col-lg-3 mb-2">\n  <div class="question-card">\n    <div class="card-front {{slug}}">\n      <div class="card-number">{{id}}</div>\n      {{#important}}\n      <span class="card-important"><i class="fas fa-star"></i></span>\n      {{/important}}\n      <h2>{{title}}</h2>\n      <p>{{description}}</p>\n      <footer class="card-footer">{{categoryName}}</footer>\n    </div>\n    <div class="card-back">\n      <div class="card-number">{{id}}</div>\n      {{#important}}\n      <span class="card-important"><i class="fas fa-star"></i></span>\n      {{/important}}\n      <h2>{{title}}</h2>\n      <div class="card-score">\n        <p class="card-points">4 points</p>\n        <p>{{high_score}}</p>\n      </div>\n      <div class="card-score">\n        <p class="card-points">1 point</p>\n        <p>{{low_score}}</p>\n      </div>\n      {{#more_info_link}}\n      <p><a href="{{more_info_link}}" class="card-link">More Info</a></p>\n      {{/more_info_link}}\n    </div>\n  </div>\n</div>\n{{/cards}}\n{{/data}}\n',{data:n});a.innerHTML=l;const c=document.getElementsByClassName("question-card");Object.values(c).forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("flipCard")}))}))}},t={};!function o(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,o),n.exports}(710)})();