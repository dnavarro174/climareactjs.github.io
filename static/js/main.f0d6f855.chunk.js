(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),o=t.n(c),l=(t(15),t(1)),s=t(2),i=t(4),u=t(3),m=t(5),d=t(8),p=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-wrapper light-blue darken-2"},r.a.createElement("a",{className:"brand-logo"},e.titulo)))};p.propType={titulo:t.n(d).a.string.isRequired};var f=p,v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).ciudadRef=r.a.createRef(),t.paisRef=r.a.createRef(),t.buscaClima=function(e){e.preventDefault();var a={ciudad:t.ciudadRef.current.value,pais:t.paisRef.current.value};t.props.datosConsulta(a)},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contenedor-form"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.buscaClima},r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2"},r.a.createElement("input",{id:"ciudad",type:"text",ref:this.ciudadRef}),r.a.createElement("label",{htmlFor:"ciudad"},"Ciudad: ")),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2"},r.a.createElement("select",{id:"pais",ref:this.paisRef},r.a.createElement("option",{value:"",defaultValue:!0}),r.a.createElement("option",{value:"AR"},"Argentina"),r.a.createElement("option",{value:"CO"},"Colombia"),r.a.createElement("option",{value:"CR"},"Costa Rica"),r.a.createElement("option",{value:"ES"},"Espa\xf1a"),r.a.createElement("option",{value:"US"},"Estado Unidos"),r.a.createElement("option",{value:"MX"},"Mexico"),r.a.createElement("option",{value:"PE"},"Peru")),r.a.createElement("label",{htmlFor:"pais"},"Pa\xeds: ")),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2 buscador"},r.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn-large yellow accent-4",value:"Buscar..."})),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2 error"})))))}}]),a}(n.Component),E=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6 offset-m3 "},r.a.createElement("div",{className:"card-panel red darken-4 error"},e.mensaje))))},h=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).mostrarInfo=function(){var e=t.props.resultado,a=e.name,n=e.weather,c=e.main;if(!a||!n||!c)return null;var o="https://openweathermap.org/img/wn/".concat(n[0].icon,".png"),l="Clima de ".concat(a);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col resultado s12 m8 l6 offset-m2 offset-l3"},r.a.createElement("div",{className:"card-panel light-blue align-center"},r.a.createElement("h2",null,"Resultado Clima de: ",a),r.a.createElement("p",{className:"temperatura"},"Actual: ",(c.temp-273.15).toFixed(2)," \xb0C",r.a.createElement("img",{src:o,alt:l}))))))},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.mostrarInfo())}}]),a}(n.Component),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={error:!1,consulta:{},resultado:{}},t.consultaApi=function(){var e=t.state.consulta,a=e.ciudad,n=e.pais;if(!a||!n)return null;var r="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(n,"&APPID=").concat("fb393bb1a9fbcbd4ef342bf3175a1dd5");fetch(r).then(function(e){return e.json()}).then(function(e){t.setState({resultado:e})}).catch(function(e){console.log(e)})},t.datosConsulta=function(e){""===e.ciudad||""===e.pais?t.setState({error:!0}):t.setState({error:!1,consulta:e})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,a){a.consulta!==this.state.consulta&&this.consultaApi()}},{key:"render",value:function(){var e,a=this.state.error.error,t=this.state.resultado.cod;return e=a?r.a.createElement(E,{mensaje:"Ambos campos son obligatorios"}):"404"===t?r.a.createElement(E,{mensaje:"El valor escrito no tiene ning\xfan resultado."}):r.a.createElement(h,{resultado:this.state.resultado}),r.a.createElement("div",{className:"App"},r.a.createElement(f,{titulo:"Clima React"}),r.a.createElement(v,{datosConsulta:this.datosConsulta}),e)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.f0d6f855.chunk.js.map