import"./pixel.PHV1U_RE.js";import{e as y,c as m,z as Z,x as $,v as _,w as K,b as n,A as X,B as ee,u as te,d as le}from"./scc.CzW-3g90.js";import{M as f}from"./bootstrap.esm.CkDf0L-y.js";import{J as ne}from"./jszip.min.BtpW2-PM.js";const g=document.getElementById("scc-one-modal");let S={},A=null,q=null;const R="1.0.0",oe=new URLSearchParams(window.location.search),D=oe.get("modelUID");let L={};const Q={Sample_DB:"fas fa-database","Supply Planning":"fas fa-database"};function ae(e,t){let d=e.replace(/\s/g,"_"),o=n("div","accordion-item border-light mb-0",null,n("h2","accordion-header",d+"_head",n("button","accordion-button collapsed",null,n("span","h6 mb-0 font-weight-bold",null,document.createTextNode(e)))));o.querySelector("button").setAttribute("type","button"),o.querySelector("button").setAttribute("data-bs-toggle","collapse"),o.querySelector("button").setAttribute("aria-expanded","false"),o.querySelector("button").setAttribute("data-bs-target","#"+d),o.querySelector("button").setAttribute("aria-controls",d);let a=n("div","accordion-collapse collapse",d,n("div","accordion-body",null,n("table","table table-hover",null,n("tbody",null,null,null))));a.setAttribute("aria-labelledby",d+"_head"),a.setAttribute("data-bs-parent","#tableGroup");for(let l of t){let i=n("tr",null,null,n("td",null,null,document.createTextNode(l[1])));i.onclick=function(){const c=document.getElementById("availableModal").querySelector("li.selectedValue");window.open(`./tableDisplay.html?tableName=${l[0]}&modelName=${c.innerText}`)},i.setAttribute("tableName",l[0]),a.querySelector("tbody").appendChild(i)}return o.appendChild(a),o}const de=async()=>{try{const e=await fetch("./model_schema.json",{cache:"reload"});if(!e.ok)throw new Error(`Failed to load schema: ${e.status} ${e.statusText}`);return await e.json()}catch(e){return console.error("Error fetching schema:",e),null}};document.addEventListener("DOMContentLoaded",async function(){L=await de();let e=await y("init");if(!e||e.msg!="Success"){m("Alert!","Some error occured while initializing sqlite.");return}if(D){await Z("/home/get-attached-model",{modelId:`${D}`});const o=window.location.origin+window.location.pathname;history.replaceState(null,"",o)}setTimeout(ie,400);const t=document.getElementById("shareBtn");t.classList.add("blink"),document.querySelectorAll(".modal").forEach(o=>{f.getInstance(o)||new f(o)}),document.getElementById("modal-createView").addEventListener("hide.bs.modal",function(){document.getElementById("viewName").value="",document.getElementById("query-input").value=""}),document.getElementById("editorBtn").onclick=async function(){const o=document.getElementById("availableModal").querySelector("li.selectedValue").innerText;if(!o){m("Alert!","Please select a model");return}window.open(`./sqlEditor.html?tableName=V_TEMPV&modelName=${o}`)},document.getElementById("availInpFiles").onclick=function(){document.getElementById("modal-input-files").querySelector("h2").innerText="Input Files",O()},document.getElementById("availOutFiles").onclick=function(){document.getElementById("modal-input-files").querySelector("h2").innerText="Output Files",ve()},document.getElementById("shareBtn").onclick=function(){const o=document.getElementById("availableModal").querySelector("li.selectedValue");if(!o){m("Alert!","Please select a model");return}const a=o.innerText,l=o.getAttribute("project");window.open(`./editorPage.html?projectName=${l}&modelName=${a}`)},document.getElementById("closeOutput").onclick=function(){document.getElementById("outputDiv").style.display="none"},document.getElementById("ok-view").onclick=ge,document.getElementById("deleteModel").onclick=j.bind(null,!0),document.getElementById("removeModel").onclick=j.bind(null,!1),document.getElementById("addNew").onclick=re.bind(null,"Add New Model",!1),document.getElementById("downloadAllFiles").onclick=xe,document.getElementById("addExisting").onclick=se,document.getElementById("saveAs").onclick=ue,document.getElementById("uploadModel").onclick=me,document.getElementById("downloadModel").onclick=pe,document.getElementById("uploadExcel").onclick=fe,document.getElementById("downloadExcel").onclick=he,document.getElementById("vacuum").onclick=be,document.getElementById("saveFiles").onclick=Te,document.getElementById("uploadPackage").onclick=Se,document.getElementById("downloadOutput").onclick=Ce,await $("init","editor"),t.classList.remove("blink")});async function ie(){document.getElementById("tableGroup").innerHTML="";let e=await _("home","getUserModels");if(e.length==0){let t=await K();t.length>0&&e.push(t)}return ce(e),e}function ce(e){let t=document.getElementById("availableModal");t.innerHTML="";for(let d of e)t.appendChild(N(d));D&&t.lastChild?t.lastChild.click():t.firstChild&&t.firstChild.click()}function N(e){let t=n("li","nav-item mb-0",null,null),d=n("a","nav-link p-2 rounded-0");return d.appendChild(n("span","d-block text-left",null,null)),d.firstChild.appendChild(n("span",`${Q[e[1]]} pe-2`)),d.firstChild.appendChild(document.createTextNode(e[0])),t.appendChild(d),t.setAttribute("project",e[2]),t.setAttribute("template",e[1]),t.setAttribute("dbtype",e[3]),t.onclick=async function(o){if(t.getAttribute("project"),document.getElementById("outputTxt").innerHTML="",!this.classList.contains("selectedValue")){let a=await _("home","getVersion",{model_name:this.innerText});a!==R&&await _("home","upgradeVersion",{modelName:this.innerText,db_version:a,current_version:R});for(let l of this.parentNode.querySelectorAll("li.selectedValue"))l.classList.remove("selectedValue");k(this.innerText,e[1]),this.classList.add("selectedValue"),o.preventDefault()}await Ee(this.innerText)},t}async function k(e,t){document.getElementById("tableGroup").innerHTML="";const d=await _("home","fetchTableGroups",{model_name:e});for(let o in d)document.getElementById("tableGroup").appendChild(ae(o,d[o]))}function W(e,t="fa-server",d=null){let o=n("ul","tree");for(let a in e){o.appendChild(document.createElement("li"));let l=V(a,t);o.appendChild(l),l.onclick=function(){let i=l.nextElementSibling;if(l.firstChild.checked){l.firstChild.checked=!1;for(let c of i.childNodes)c.firstChild.checked&&(c.firstChild.checked=!1)}else{l.firstChild.checked=!0;for(let c of i.childNodes)c.firstChild.checked||(c.firstChild.checked=!0)}},o.appendChild(n("ul","childList TreeMembers"));for(let i of e[a]){let c=V(i[0],Q[i[1]]);d||(c.onclick=function(r){if(c.firstChild.checked)c.firstChild.checked=!1,l.firstChild.checked&&(l.firstChild.checked=!1);else{c.firstChild.checked=!0,l.firstChild.checked=!0;for(let s of this.parentNode.childNodes)s.firstChild.checked||(l.firstChild.checked=!1)}}),o.lastChild.appendChild(c)}}return n("div","card-body scc-box",null,o)}function V(e,t){let d=n("li",null,null,n("input","inputcheckbox"));d.firstChild.setAttribute("type","checkbox");let o=n("label","checkBox-label",null,n("span",`fas ${t}`));return o.appendChild(document.createTextNode(e)),d.appendChild(o),d}function E(e,t){const d=g.querySelector(".modal-header h2");d.innerHTML="",d.innerText=e;const o=g.querySelector(".modal-body");o.innerHTML="";const a=g.querySelector(".modal-footer");a.innerHTML="";const l=n("button","btn btn-tertiary",null,document.createTextNode("Cancel"));l.setAttribute("type","button"),l.setAttribute("data-bs-dismiss","modal");const i=n("button","btn btn-primary ml-auto",null,document.createTextNode(t));return i.setAttribute("type","button"),a.appendChild(l),a.appendChild(i),[o,i]}function B(e,t,d,o,a=[],l="",i="",c="text"){let r;const s=n("div","row row-header align-items-center mb-4",e);let u=n("div","col-12 col-sm-4 align-self-center",null,n("label","my-2",null,document.createTextNode(t)));if(r=n("div","col-12 col-sm"),o=="select"){const p=n("select","form-select",d);(a.includes("Default")||a.length==0)&&p.appendChild(n("option",null,null,document.createTextNode("Default")));for(let h of a)if(h!="Default"){let b=n("option",null,null,document.createTextNode(h));p.appendChild(b)}p.firstChild&&(p.firstChild.setAttribute("selected",""),r.appendChild(p))}else{const p=n("div","input-group",null,n("input","form-control",d));p.firstChild.setAttribute("type",c),p.firstChild.setAttribute("placeholder",l),i.trim()!=""&&p.appendChild(n("span","input-group-text",null,n("span",i))),r.appendChild(p)}return s.appendChild(u),s.appendChild(r),s}function re(e,t=!1){const[d,o]=E(e,"Add"),a=n("div","form-group");a.appendChild(B("name_div","Model Name","db_name","normal",[],"","fas fa-database")),t?a.appendChild(B("path_div","Model Path","db_path","normal")):a.appendChild(B("template_div","Model Template","model_template","select",Object.keys(L))),d.appendChild(a),o.onclick=async function(l){const i=document.getElementById("db_name").value;if(i.trim()==""||!z(i)){m("Alert!","Please enter valid model name");return}for(let b of document.getElementById("availableModal").querySelectorAll("li"))if(i.trim()==b.innerText){m("Alert!",`Model already active with same name ${i}`);return}let c=document.getElementById("model_template"),r="Sample DB";c&&(r=c.value);let s="Default";f.getInstance(g).hide();const h=await _("home","addNewModel",{model_name:i,model_template:r,project_name:s,schemas:L,db_user:"",password:"",host:"",port:0,db_type:"SQLITE"});if(h.msg==="Success"){let b=document.getElementById("availableModal");b.appendChild(N([i,r,s,"SQLITE"])),b.lastChild.click(),m("Success!","New Model added")}else m("Alert!",h.msg)}}async function se(){const[e,t]=E("Add Existing Models","Add"),d=new Object,o=await _("home","getExistingModels");let a=new Object;for(let l of o){let i=l[1],c=l[0];d[c]=[i,l[2],l[3]],i in a?a[i].push([c,l[2]]):a[i]=[[c,l[2]]]}e.appendChild(W(a)),t.onclick=async function(){let l=[];for(let r of document.getElementById("availableModal").querySelectorAll("li"))l.push(r.innerText);let i={},c=[];for(let r of e.querySelectorAll(".TreeMembers li"))if(r.parentNode.classList.contains("childList")&&r.firstChild.checked){if(l.includes(r.innerText)){m("Alert!",`Model Already Active with name ${r.innerText}`);return}let s=r.parentNode.previousElementSibling.innerText;if(s in i||(i[s]=[]),i[s].push(r.innerText),c.includes(r.innerText)){m("Alert!","You Cannot Add more than one model of same name");return}c.push(r.innerText)}if(Object.keys(i).length>0){f.getInstance(g).hide(),await _("home","addExistingModels",{model_list:c,projects_dict:i});let s=document.getElementById("availableModal");for(let u of c)s.appendChild(N([u,d[u][1],d[u][0],d[u][2]]))}else f.getInstance(g).hide()}}function j(e){let t="Hide",d="Hide Models";e&&(t="Delete",d="Delete Models");const[o,a]=E(d,t);let l=new Object;for(let i of document.getElementById("availableModal").childNodes){let c=i.getAttribute("project"),r=i.getAttribute("template"),s=i.innerText;c in l?l[c].push([s,r]):l[c]=[[s,r]]}o.appendChild(W(l)),a.onclick=async function(){let i=[],c={};for(let r of o.querySelectorAll(".TreeMembers li"))if(r.parentNode.classList.contains("childList")&&r.firstChild.checked){i.push(r.innerText);let s=r.parentNode.previousElementSibling.innerText;s in c||(c[s]=[]),c[s].push(r.innerText)}if(Object.keys(c).length>0){f.getInstance(g).hide(),await _("home","deleteModel",{projects_dict:c,del_opt:e});let s=document.getElementById("availableModal");for(let u of s.querySelectorAll("li"))i.indexOf(u.innerText)>-1&&u.remove();s.firstChild?s.firstChild.click():document.getElementById("tableGroup").innerHTML="",m("Success!","Model removed successfully")}else m("Alert!","Please select atleast one model")}}function ue(e){const t=document.getElementById("availableModal").querySelector("li.selectedValue");if(!t){m("Alert!","Please select a model");return}if(t.getAttribute("dbtype")!="SQLITE"){m("Alert!","Method is applicable only for SQLITE type models");return}else{const d=t.innerText,o=t.getAttribute("project"),a=t.getAttribute("template"),l=t.getAttribute("dbtype"),[i,c]=E("Save As","Save"),r=n("div","form-group mb-4");r.appendChild(B("new_modelName_div","New Model Name","new_model_name","normal",[],"","fas fa-database")),i.appendChild(r),c.onclick=async function(s){const u=document.getElementById("new_model_name").value;if(u.trim()==""||!z(u)){m("Alert!","Please enter valid model name");return}for(let x of document.getElementById("availableModal").querySelectorAll("li"))if(u.trim()==x.innerText){m("Alert!",`Model already active with same name ${u}`);return}f.getInstance(g).hide();const h=await _("home","saveAsModel",{new_model_name:u,new_model_template:a,project_name:o,model_name:d});if(h.message.indexOf("Invalid")>-1){m("Alert",h.message);return}let b=document.getElementById("availableModal");b.appendChild(N([u,a,o,l])),b.lastChild.click(),m("Success!","Save As Model added")}}}function me(e){const t=document.getElementById("availableModal").querySelector("li.selectedValue");if(!t){m("Alert!","Please select a model");return}const d=t.innerText;t.getAttribute("template");const[o,a]=E("Restore Model","Upload"),l=n("input","form-control"),i=n("div","input-group",null,l);l.setAttribute("type","file"),l.setAttribute("accept",".db, .sqlite3"),o.appendChild(i),a.onclick=async function(c){l.files[0]?(a.setAttribute("disabled",""),a.innerHTML='<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>',await X("home","uploadModel",l.files[0],{model_name:d}),l.value=null,a.removeAttribute("disabled",""),a.innerHTML="Upload",f.getInstance(g).hide(),m("Success!","Model uploaded successfully"),k(d)):m("Alert!","Please choose a model")}}async function pe(e){let t=document.getElementById("data-loader");const d=document.getElementById("availableModal").querySelector("li.selectedValue");if(!d){m("Alert!","Please select a model");return}const o=d.innerText,a=d.getAttribute("project");t.style.display="",await _("home","downloadModel",{model_name:o,project_name:a}),t.style.display="none"}function fe(e){const t=document.getElementById("availableModal").querySelector("li.selectedValue");if(!t){m("Alert!","Please select a model");return}const d=t.innerText,[o,a]=E("Upload Excel","Upload"),l=n("input","form-control"),i=n("div","input-group",null,l);l.setAttribute("type","file"),l.setAttribute("accept","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),o.appendChild(i),a.onclick=async function(c){A=l.files[0],A?(a.setAttribute("disabled",""),a.innerHTML='<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>',S={},S=await ee(d,[],A),f.getInstance(document.getElementById("scc-one-modal")).hide(),new f(document.getElementById("modal-uploadExcel-info")).show(),l.value=null,a.innerHTML="Upload",a.removeAttribute("disabled","")):m("Alert!","Please choose a file")}}document.getElementById("modal-uploadExcel-info").addEventListener("show.bs.modal",function(){const e=this.querySelector(".modal-body");e.innerHTML="";const t=n("tr"),d=n("div","form-group",null,n("table","table table-bordered table-sm",null,n("thead",null,null,t)));d.style.maxHeight="300px",d.style.overflowY="auto",t.appendChild(n("td","text-center",null,n("h6","m-0",null,document.createTextNode("Sheet Name")))),t.appendChild(n("td","text-center",null,n("h6","m-0",null,document.createTextNode("Upload Option"))));const o=n("tbody");d.firstChild.appendChild(o),e.appendChild(d);for(let a in S){let l=n("tr","");l.appendChild(n("td",null,null,document.createTextNode(a)));const i=n("select","form-select");i.style="line-height:1 !important;";const c=[{value:"purgeAndUpload",text:"Purge and Upload"},{value:"createAndUpload",text:"Drop Table and Upload"},{value:"ignore",text:"Ignore"}],r=[{value:"ignore",text:"Ignore"},{value:"createAndUpload",text:"Create and Upload"}];S[a][0]==="New"?r.forEach(u=>{const p=n("option");p.value=u.value,p.textContent=u.text,i.appendChild(p)}):c.forEach(u=>{const p=document.createElement("option");p.value=u.value,p.textContent=u.text,u.value=="ignore"&&S[a][1]!="Input"&&p.setAttribute("Selected",""),i.appendChild(p)});let s=n("td","text-center",null,i);l.appendChild(s),o.appendChild(l)}});document.getElementById("saveFileName").onclick=async function(){this.setAttribute("disabled",""),this.innerHTML='<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>';const e=document.getElementById("availableModal").querySelector("li.selectedValue"),t=e.innerText;e.getAttribute("template");const d=document.getElementById("modal-uploadExcel-info").querySelector("tbody"),o={};for(let l of d.querySelectorAll("tr")){const i=l.firstElementChild.innerText,c=l.querySelector("select").value;o[i]=c}const a=await te(t,Object.keys(o),A,o);f.getInstance(document.getElementById("modal-uploadExcel-info")).hide(),m("Success!","Excel uploaded successfully"),ye(a,o),k(t),this.innerText="Upload",this.removeAttribute("disabled")};function ye(e,t){const[d,o]=E("Status","OK"),a=n("tr",null,null,n("td",null,null,document.createTextNode("SheetName"))),l=n("div","form-group mb-4",null,n("table","table table-bordered table-sm",null,n("thead",null,null,a)));l.style.maxHeight="300px",l.style.overflowY="auto",l.style.overflowX="auto",a.appendChild(n("td",null,null,document.createTextNode("Status"))),a.appendChild(n("td",null,null,document.createTextNode("Msg")));const i=n("tbody");l.firstChild.appendChild(i);for(let c in e){let r=n("tr");r.appendChild(n("td",null,null,document.createTextNode(c)));let s,u;!isNaN(e[c])&&t[c]=="createAndUpload"?(s="Create And Uploaded",u=`${e[c]} rows inserted`):isNaN(e[c]&&t[c]=="purgeAndUpload")?(s="Errored",u=e[c]):(s="Purge And Uploaded",u=`${e[c]} rows inserted`),r.appendChild(n("td",null,null,document.createTextNode(s))),r.appendChild(n("td",null,null,document.createTextNode(u))),i.appendChild(r)}d.appendChild(l),new f(document.getElementById("scc-one-modal")).show(),o.onclick=function(){f.getInstance(g).hide()}}function he(e){const t=document.getElementById("availableModal").querySelector("li.selectedValue");if(!t){m("Alert!","Please select a model");return}const d=[];for(let r of document.getElementById("tableGroup").querySelectorAll("button.accordion-button"))d.push(r.innerText);const o=t.innerText,[a,l]=E("Download Excel","Download"),i=n("input","form-check-input round-check"),c=n("div","form-check",null,i);i.setAttribute("type","checkbox"),i.checked=!0,c.appendChild(n("label","form-check-label",null,document.createTextNode("Input Tables Only")));for(let r of d){let s=c.cloneNode(!0);s.lastChild.innerText=r,a.appendChild(s)}l.onclick=async function(r){let s=[];for(let h of a.querySelectorAll("input:checked"))s.push(h.parentNode.lastChild.innerText);f.getInstance(g).hide();let p=document.getElementById("dl_progress_div");p.querySelector("div").innerText="Downloading",p.style.display="",await le(o,[],s),p.querySelector("div").innerText="Running",p.style.display="none"}}async function be(e){let t=document.getElementById("data-loader");const d=document.getElementById("availableModal").querySelector("li.selectedValue");if(!d){m("Alert!","Please select a model");return}const o=d.innerText;t.style.display="",await y("executeQuery",o,"VACUUM"),t.style.display="none",m("Success!","Model vacuumed successfully")}async function ge(){const e=document.getElementById("viewName").value,t=document.getElementById("query-input").value,d=document.getElementById("availableModal").querySelector("li.selectedValue").innerText;if(!d){m("Alert!","Please select a model");return}(e.trim()==""||t.trim()=="")&&m("Alert!","Please make sure that View Name and Query was entered"),await _("home","checkOrCreateView",{view_name:e,view_query:t,model_name:d,isExist:!1}),f.getInstance(document.getElementById("modal-createView")).hide(),m("Success","View created successfully"),k(d)}function z(e){var t=/^[a-zA-Z0-9_]+$/;return t.test(e)}function _e(e){const t=document.getElementById("outputTxt");if(e){const d=document.createElement("div");d.textContent=`Error: ${e}`,d.style.color="red",t.appendChild(d)}}async function Ee(e){const t=document.getElementById("taskDiv");t.innerHTML="";const o=await y("fetchData",e,"SELECT TaskId,TaskName,TaskDisplayName FROM S_TaskMaster");for(const[a,l,i]of o){const c=n("li",null,null,n("a","dropdown-item",null,document.createTextNode(i)));c.onclick=async function(){const r=document.getElementById("myCanvas");document.getElementById("loadingOverlay").classList.remove("hidden"),document.getElementById("outputDiv").style.display="",document.getElementById("outputTxt").innerHTML="",q=null;const s=document.getElementById("availableModal").querySelector("li.selectedValue"),u=s.getAttribute("project"),h=await y("fetchData",s.innerText,"SELECT FilePath,FileData,FileName FROM S_ExecutionFiles WHERE FileName IS NOT NULL AND Status = 'Active' ");let b=null;h.forEach(I=>{I[0]===l&&(b=I[1])});const C=await y("fetchData",s.innerText,"SELECT FileName,FileBlob FROM S_DataFiles WHERE FileType = 'Input'"),Y=await y("fetchData",s.innerText,"SELECT WheelName,WheelBlob FROM S_PackageWheels");await y("updateData",s.innerText,"UPDATE S_Taskmaster SET TaskLastRunDate = ? WHERE TaskId = ? ",[we(),a]);const U=await F(l,"Started",null,null,a);let w=await $("executeScript","editor",b,u,s.innerText,h,null,C,Y);if(w.stderr)F(l,"Errored",w.stderr,U);else{if(w.blob){const I=r.getContext("2d");I.clearRect(0,0,r.width,r.height),q=w.blob;const T=await createImageBitmap(w.blob),v=Math.min(r.width/T.width,r.height/T.height),P=(r.width-T.width*v)/2,J=(r.height-T.height*v)/2;I.drawImage(T,P,J,T.width*v,T.height*v),new f(document.getElementById("modal-show-output")).show()}F(l,"Completed",null,U),w.outputFiles&&w.outputFiles.length>0&&(await y("deleteData",s.innerText,"DELETE FROM S_DataFiles WHERE FileType = 'Output'"),w.outputFiles.forEach(async([T,v])=>{await y("insertData",s.innerText,`INSERT INTO S_DataFiles (FileName,FileType,FileBlob) 
                                            VALUES (?, ?, ?) ON CONFLICT (FileName,FileType) DO UPDATE SET FileBlob = ? `,[T,"Output",v,v])}))}document.getElementById("loadingOverlay").classList.add("hidden"),_e(w.stderr)},t.appendChild(c)}}function we(){const e=new Date,t=e.getFullYear(),d=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0"),i=String(e.getSeconds()).padStart(2,"0");return`${t}-${d}-${o} ${a}:${l}:${i}`}async function F(e,t,d=null,o=null,a=null){const l=document.getElementById("availableModal").querySelector("li.selectedValue");if(o)await y("updateData",l.innerText,`UPDATE T_TaskLogs SET TaskStatus = ?,ErrorMsg = ?, EndDate = datetime('now', 'localtime')
                     WHERE TaskName = ? AND Id = ? `,[t,d,e,o]);else return await y("insertData",l.innerText,"INSERT INTO T_TaskLogs (TaskId,TaskName,TaskStatus,EndDate) VALUES (?, ?, ?, datetime('now', 'localtime'))",[a,e,t])}async function Te(){this.setAttribute("disabled",""),this.innerHTML='<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>';const e=document.getElementById("availableModal").querySelector("li.selectedValue"),t=document.getElementById("inpFiles");if(t.files.length>0){await y("executeQuery",e.innerText,"DELETE FROM S_DataFiles;",["script"]);for(const o of t.files){const a=await o.arrayBuffer();await y("insertData",e.innerText,`INSERT INTO S_DataFiles (FileName,FileType,FileBlob) 
                            VALUES (?, ?, ?) ON CONFLICT (FileName,FileType) DO UPDATE SET FileBlob = ? `,[o.name,"Input",new Uint8Array(a),new Uint8Array(a)])}this.removeAttribute("disabled",""),this.innerHTML="Upload",f.getInstance(document.getElementById("modal-upload-files")).hide(),m("Success","Files Upload Successfully.")}t.value=null}async function O(){const e=document.getElementById("modal-input-files").querySelector(".modal-body");e.innerHTML="";const t=document.getElementById("availableModal").querySelector("li.selectedValue"),o=await y("fetchData",t.innerText,"SELECT FileId,FileName FROM S_DataFiles WHERE FileType = 'Input' "),a=n("tr"),l=n("div","form-group",null,n("table","table table-bordered table-sm",null,n("thead",null,null,a)));l.style.maxHeight="300px",l.style.overflowY="auto";const i=n("tbody");l.firstChild.appendChild(i),e.appendChild(l);for(let s of o){const u=n("tr","d-flex align-items-center");u.appendChild(n("td","w-100",null,document.createTextNode(s[1])));const p=n("td","input-file-icon m-0 px-2");let h=n("span","fa fa-trash");h.onclick=Ie.bind(null,s[1],s[0]),p.appendChild(h);const b=n("td","input-file-icon m-0 px-2");let x=n("span","fa fa-download");x.onclick=G.bind(null,s[1],s[0]),b.appendChild(x);const C=n("td","input-file-icon m-0 px-2");let M=n("span","fa fa-upload");M.onclick=H.bind(null,s[1],s[0]),C.appendChild(M),u.appendChild(p),u.appendChild(C),u.appendChild(b),i.appendChild(u)}const c=n("div","d-flex justify-content-end");let r=n("button","btn btn-primary",null,document.createTextNode("Add File"));c.appendChild(r),e.appendChild(c),r.onclick=H}async function ve(){const e=document.getElementById("modal-input-files").querySelector(".modal-body");e.innerHTML="";const t=document.getElementById("availableModal").querySelector("li.selectedValue"),o=await y("fetchData",t.innerText,"SELECT FileId,FileName FROM S_DataFiles WHERE FileType = 'Output' "),a=n("tr"),l=n("div","form-group",null,n("table","table table-bordered table-sm",null,n("thead",null,null,a)));l.style.maxHeight="300px",l.style.overflowY="auto";const i=n("tbody");l.firstChild.appendChild(i),e.appendChild(l);for(let c of o){const r=n("tr","d-flex align-items-center");r.appendChild(n("td","w-100",null,document.createTextNode(c[1])));const s=n("td","input-file-icon m-0 px-2");let u=n("span","fa fa-download");u.onclick=G.bind(null,c[1],c[0]),s.appendChild(u),r.appendChild(s),i.appendChild(r)}}async function Ie(e,t){const d=document.getElementById("availableModal").querySelector("li.selectedValue");await y("deleteData",d.innerText,"DELETE FROM S_DataFiles WHERE FileType = 'Input' AND FileId = ? AND FileName = ? ",[t,e]),O()}async function G(e,t){let d=document.getElementById("modal-input-files").querySelector("h2").innerText.indexOf("Input")>-1?"Input":"Output";const o=document.getElementById("availableModal").querySelector("li.selectedValue"),l=await y("fetchData",o.innerText,"SELECT FileName,FileBlob FROM S_DataFiles WHERE FileType = ? AND FileID = ? AND FileName = ?",[d,t,e]);if(l){const c=new Blob([l[0][1]]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){window.navigator.msSaveOrOpenBlob(c);return}const r=window.URL.createObjectURL(c);var i=document.createElement("a");i.href=r,i.download=e,i.click(),setTimeout(function(){window.URL.revokeObjectURL(r)},1e3)}else m("Alert!","No File Exists")}function H(e=null,t=null){f.getInstance(document.getElementById("modal-input-files")).hide();const d=document.getElementById("availableModal").querySelector("li.selectedValue"),[o,a]=E("Upload Excel","Upload"),l=n("input","form-control"),i=n("div","input-group",null,l);l.setAttribute("type","file"),o.appendChild(i),a.onclick=async function(c){if(l.files[0]){a.setAttribute("disabled",""),a.innerHTML='<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>';const r=await l.files[0].arrayBuffer();e&&t?await y("updateData",d.innerText,"UPDATE S_DataFiles SET FileBlob = ? WHERE FileType = 'Input' AND FileName = ? AND FileId = ? ",[l.files[0].name,new Uint8Array(r),e,t]):await y("insertData",d.innerText,"INSERT INTO S_DataFiles (FileName,FileType,FileBlob) VALUES (?, ?, ?) ON CONFLICT (FileName,FileType) DO UPDATE SET FileBlob = ?",[l.files[0].name,"Input",new Uint8Array(r),new Uint8Array(r)]),f.getInstance(document.getElementById("scc-one-modal")).hide(),new f(document.getElementById("modal-input-files")).show(),l.value=null,a.innerHTML="Upload",a.removeAttribute("disabled",""),O()}else m("Alert!","Please choose a file")},new f(document.getElementById("scc-one-modal")).show()}async function xe(){let e=document.getElementById("modal-input-files").querySelector("h2").innerText.indexOf("Input")>-1?"Input":"Output";const t=document.getElementById("availableModal").querySelector("li.selectedValue");try{const o=await y("fetchData",t.innerText,"SELECT FileName,FileBlob FROM S_DataFiles WHERE FileType = ?",[e]);if(!o||o.length===0){m("Alert!","No files found to download.");return}const a=new ne;o.forEach(c=>{a.file(c[0],c[1])});const l=await a.generateAsync({type:"blob"}),i=document.createElement("a");i.href=window.URL.createObjectURL(l),i.download="InputFiles.zip",i.click(),setTimeout(function(){window.URL.revokeObjectURL(i.href)},1e3)}catch(d){console.error("Error creating zip file for download:",d)}}async function Se(e){const t=document.getElementById("availableModal").querySelector("li.selectedValue");if(!t){m("Alert!","Please select a model");return}const[d,o]=E("Upload Package","Upload"),a=n("input","form-control"),l=n("div","input-group",null,a);a.setAttribute("type","file"),a.setAttribute("accept",".whl"),d.appendChild(l),o.onclick=async function(i){if(a.files[0]){o.setAttribute("disabled",""),o.innerHTML='<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>';const r=await a.files[0].arrayBuffer();try{await y("insertData",t.innerText,"INSERT INTO S_PackageWheels (WheelName,WheelBlob) VALUES (?, ?) ON CONFLICT (WheelName) DO UPDATE SET WheelBlob = ?",[a.files[0].name,new Uint8Array(r),new Uint8Array(r)]),m("Success","Package uploaded successfully!")}catch(s){console.error("Error saving file:",s)}f.getInstance(document.getElementById("scc-one-modal")).hide(),a.value=null,o.innerHTML="Upload",o.removeAttribute("disabled","")}else m("Alert!","Please choose a file")}}async function Ce(){const e=document.createElement("a");e.href=window.URL.createObjectURL(q),e.download="output.jpg",e.click(),setTimeout(function(){window.URL.revokeObjectURL(e.href)},1e3)}document.getElementById("notebookBtn").onclick=function(){const e=document.getElementById("availableModal").querySelector("li.selectedValue");if(!e){m("Alert!","Please select a model");return}const t=e.innerText;window.open(`./PyNotebook.html?modelName=${t}`)};document.getElementById("notebookJS").onclick=function(){const e=document.getElementById("availableModal").querySelector("li.selectedValue");if(!e){m("Alert!","Please select a model");return}const t=e.innerText;window.open(`./JsNotebook.html?modelName=${t}`)};document.getElementById("sqlEditor").onclick=function(){const e=document.getElementById("availableModal").querySelector("li.selectedValue");if(!e){m("Alert!","Please select a model");return}const t=e.innerText;window.open(`./SQLiteStudio/playground/client.html?modelName=${t}`)};
