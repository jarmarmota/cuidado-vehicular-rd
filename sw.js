:root{
  --bg:#15171B;
  --surface:#1D2026;
  --surface2:#242830;
  --line:#2D313A;
  --text:#ECEAE3;
  --dim:#8A8F99;
  --amber:#F2A93B;
  --green:#3ED9A0;
  --red:#E5594F;
  --teal:#2BB0A6;
  --blue:#5B9DD9;
}
*{box-sizing:border-box; margin:0; padding:0;}
html,body{height:100%;}
body{
  background:var(--bg);
  background-image:
    radial-gradient(circle at 10% 0%, rgba(242,169,59,0.07), transparent 35%),
    radial-gradient(circle at 90% 100%, rgba(43,176,166,0.08), transparent 35%);
  color:var(--text);
  font-family:'Inter', sans-serif;
  -webkit-tap-highlight-color: transparent;
}
button, input, select{font-family:inherit;}

#app{
  max-width:480px;
  margin:0 auto;
  min-height:100vh;
  display:flex;
  flex-direction:column;
}

.screen{display:none; flex:1; flex-direction:column; padding:18px 16px 90px;}
.screen.active{display:flex;}

.topbar{
  display:flex; align-items:center; gap:10px;
  margin-bottom:16px;
}
.back-btn{
  width:34px; height:34px; border-radius:10px;
  background:var(--surface2); border:1px solid var(--line);
  color:var(--text); font-size:16px;
  display:flex; align-items:center; justify-content:center;
}
.topbar-title{font-family:'Rajdhani', sans-serif; font-weight:700; font-size:18px;}
.topbar-tag{
  font-family:'JetBrains Mono', monospace; font-size:10px; color:var(--amber);
  text-transform:uppercase; letter-spacing:0.06em;
}

h1.page-title{
  font-family:'Rajdhani', sans-serif; font-weight:700;
  font-size:clamp(24px,6vw,30px); margin-bottom:4px;
}
.page-sub{font-size:13px; color:var(--dim); margin-bottom:18px;}

/* ---- cards / generic ---- */
.card{
  background:var(--surface2); border:1px solid var(--line); border-radius:14px;
  padding:14px 16px; margin-bottom:14px;
}
.vehicle-card{display:flex; justify-content:space-between; align-items:center;}
.vehicle-name{font-family:'Rajdhani', sans-serif; font-weight:700; font-size:18px;}
.vehicle-sub{font-size:11px; color:var(--dim); margin-top:2px;}
.odo-badge{
  font-family:'JetBrains Mono', monospace; font-size:13px; font-weight:600;
  color:var(--amber); background:rgba(242,169,59,0.1);
  border:1px solid rgba(242,169,59,0.3); border-radius:8px;
  padding:6px 10px; text-align:center; cursor:pointer;
}
.odo-badge span{display:block; font-size:9px; color:var(--dim); font-family:'Inter'; margin-top:2px;}

.alert-card{
  background:linear-gradient(135deg, rgba(242,169,59,0.14), rgba(242,169,59,0.04));
  border:1px solid rgba(242,169,59,0.35); border-radius:16px;
  padding:16px; margin-bottom:14px;
}
.alert-tag{
  font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.06em;
  color:var(--amber); text-transform:uppercase; margin-bottom:6px;
}
.alert-text{font-size:14px; line-height:1.5;}
.alert-text b{color:var(--amber);}

.cost-strip{display:flex; justify-content:space-between; align-items:center;}
.cost-label{font-size:11px; color:var(--dim);}
.cost-val{font-family:'Rajdhani', sans-serif; font-weight:700; font-size:20px; color:var(--green);}

.module-grid{display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; margin-top:4px;}
.module-tile{
  background:var(--surface2); border:1px solid var(--line); border-radius:12px;
  padding:14px 6px; text-align:center; cursor:pointer;
}
.module-tile:active{border-color:var(--amber);}
.module-icon{font-size:20px; margin-bottom:6px;}
.module-label{font-size:10px; color:var(--dim); line-height:1.3;}

/* ---- forms ---- */
.field{margin-bottom:14px;}
.field label{
  display:block; font-size:11px; color:var(--dim); margin-bottom:6px;
  font-family:'JetBrains Mono', monospace; text-transform:uppercase; letter-spacing:0.04em;
}
.field input, .field select{
  width:100%; background:var(--surface2); border:1px solid var(--line);
  border-radius:10px; padding:11px 12px; color:var(--text); font-size:14px;
}
.field input:focus, .field select:focus{outline:none; border-color:var(--amber);}
.field-row{display:flex; gap:10px;}
.field-row .field{flex:1;}

.btn{
  width:100%; border:none; border-radius:14px; padding:13px;
  font-weight:600; font-size:14px; cursor:pointer;
}
.btn-primary{background:var(--amber); color:#1A1300;}
.btn-secondary{background:var(--surface2); color:var(--text); border:1px solid var(--line);}
.btn + .btn{margin-top:10px;}

/* ---- módulo 1 ---- */
.svc-row{display:flex; justify-content:space-between; align-items:center; padding:11px 0; border-bottom:1px solid var(--line);}
.svc-row:last-child{border-bottom:none;}
.svc-name{font-size:13px; font-weight:600;}
.svc-detail{font-size:11px; color:var(--dim); margin-top:2px;}
.svc-status{font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; padding:4px 8px; border-radius:7px; text-align:center; white-space:nowrap; cursor:pointer;}
.svc-due{background:rgba(229,89,79,0.12); color:var(--red); border:1px solid rgba(229,89,79,0.3);}
.svc-soon{background:rgba(242,169,59,0.12); color:var(--amber); border:1px solid rgba(242,169,59,0.3);}
.svc-ok{background:rgba(62,217,160,0.1); color:var(--green); border:1px solid rgba(62,217,160,0.3);}
.context-note{margin-top:14px; padding:11px 12px; border-radius:10px; background:rgba(242,169,59,0.1); border:1px solid rgba(242,169,59,0.3); font-size:12px; color:#f5cf94; line-height:1.5;}

/* ---- módulo 2 ---- */
.score-ring{width:128px; height:128px; margin:0 auto 18px; border-radius:50%; display:flex; align-items:center; justify-content:center; position:relative;}
.score-ring::before{content:""; position:absolute; width:96px; height:96px; border-radius:50%; background:var(--bg);}
.score-inner{position:relative; text-align:center;}
.score-num{font-family:'Rajdhani', sans-serif; font-weight:700; font-size:30px;}
.score-den{font-size:10px; color:var(--dim);}
.check-row{display:flex; justify-content:space-between; align-items:center; padding:11px 0; border-bottom:1px solid var(--line); font-size:13px;}
.check-row:last-child{border-bottom:none;}
.check-ok{color:var(--green); font-weight:600;}
.check-warn{color:var(--amber); font-weight:600;}
.check-bad{color:var(--red); font-weight:600;}
.check-detail{font-size:11px; color:var(--dim); margin-top:2px;}
.trip-note{margin-top:14px; padding:10px 12px; border-radius:10px; font-size:12px; line-height:1.5;}

/* ---- módulo 3 ---- */
.km-cost{text-align:center; margin-bottom:8px;}
.km-cost-num{font-family:'Rajdhani', sans-serif; font-weight:700; font-size:36px; color:var(--teal);}
.km-cost-label{font-size:11px; color:var(--dim); margin-top:2px;}
.bar-row{margin-bottom:12px;}
.bar-label{display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px;}
.bar-label span:last-child{font-family:'JetBrains Mono', monospace; color:var(--dim);}
.bar-track{height:8px; background:var(--surface2); border-radius:6px; overflow:hidden;}
.bar-fill{height:100%; border-radius:6px;}
.expense-list-row{display:flex; justify-content:space-between; padding:9px 0; border-bottom:1px solid var(--line); font-size:12px;}
.expense-list-row:last-child{border-bottom:none;}
.expense-list-row .dim{color:var(--dim);}

/* ---- módulo 4 ---- */
.price-row{display:flex; justify-content:space-between; font-size:13px; padding:4px 0;}
.price-row span:last-child{font-family:'JetBrains Mono', monospace; font-weight:600;}
.octane-card{background:rgba(91,157,217,0.1); border:1px solid rgba(91,157,217,0.3); border-radius:12px; padding:12px 14px; margin-bottom:16px; font-size:12px; color:#bcdaf2; line-height:1.5;}
.octane-card b{color:var(--blue);}
.station-row{display:flex; justify-content:space-between; align-items:center; padding:11px 0; border-bottom:1px solid var(--line);}
.station-row:last-child{border-bottom:none;}
.station-name{font-size:13px; font-weight:600;}
.station-sub{font-size:11px; color:var(--dim); margin-top:2px;}
.trust-badge{font-family:'JetBrains Mono', monospace; font-size:11px; font-weight:600; padding:4px 8px; border-radius:7px;}
.trust-high{background:rgba(62,217,160,0.1); color:var(--green); border:1px solid rgba(62,217,160,0.3);}
.trust-low{background:rgba(242,169,59,0.12); color:var(--amber); border:1px solid rgba(242,169,59,0.3);}

/* ---- módulo 5 / chips ---- */
.chip-row{display:flex; gap:8px; margin-bottom:14px; flex-wrap:wrap;}
.chip{font-size:11px; padding:6px 11px; border-radius:999px; border:1px solid var(--line); color:var(--dim); cursor:pointer;}
.chip.active{background:var(--amber); color:#1A1300; border-color:var(--amber); font-weight:600;}
.site-card{background:var(--surface2); border:1px solid var(--line); border-radius:14px; padding:13px 14px; margin-bottom:10px;}
.site-top{display:flex; justify-content:space-between; align-items:flex-start;}
.site-name{font-size:13px; font-weight:700;}
.site-loc{font-size:11px; color:var(--dim); margin-top:2px;}
.site-price{font-family:'Rajdhani', sans-serif; font-weight:700; font-size:17px; color:var(--amber);}
.product-tags{display:flex; gap:6px; margin-top:8px; flex-wrap:wrap;}
.ptag{font-size:10px; background:var(--surface); border:1px solid var(--line); border-radius:6px; padding:3px 7px; color:var(--dim);}

/* ---- módulo 6 ---- */
.link-banner{background:rgba(229,89,79,0.08); border:1px solid rgba(229,89,79,0.25); border-radius:12px; padding:11px 13px; margin-bottom:16px; font-size:11px; color:#f0b3ae; line-height:1.5;}
.link-banner b{color:var(--red);}
.shop-card{background:var(--surface2); border:1px solid var(--line); border-radius:14px; padding:13px 14px; margin-bottom:10px;}
.shop-top{display:flex; justify-content:space-between; align-items:center;}
.shop-name{font-size:13px; font-weight:700;}
.shop-rating{font-family:'JetBrains Mono', monospace; font-size:12px; color:var(--amber); font-weight:600;}
.shop-tags{display:flex; gap:6px; margin-top:8px; flex-wrap:wrap;}
.stag{font-size:10px; background:rgba(43,176,166,0.1); border:1px solid rgba(43,176,166,0.3); color:var(--teal); border-radius:6px; padding:3px 7px;}
.shop-price{font-size:11px; color:var(--dim); margin-top:8px;}

/* ---- toast / modal helpers ---- */
.toast{
  position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
  background:var(--surface2); border:1px solid var(--amber); color:var(--text);
  padding:11px 18px; border-radius:12px; font-size:13px; max-width:90%;
  z-index:50; box-shadow:0 10px 30px rgba(0,0,0,0.4);
  opacity:0; pointer-events:none; transition:opacity 0.2s;
}
.toast.show{opacity:1;}

.section-label{
  font-family:'JetBrains Mono', monospace; font-size:11px; color:var(--dim);
  text-transform:uppercase; letter-spacing:0.04em; margin:18px 0 8px;
}

/* ---- modal ---- */
.modal-overlay{
  position:fixed; inset:0; background:rgba(10,11,13,0.72);
  display:flex; align-items:flex-end; justify-content:center;
  z-index:100; opacity:0; pointer-events:none; transition:opacity 0.18s;
}
.modal-overlay.show{opacity:1; pointer-events:auto;}
.modal-box{
  width:100%; max-width:480px;
  background:var(--surface); border:1px solid var(--line);
  border-radius:20px 20px 0 0;
  padding:20px 18px calc(20px + env(safe-area-inset-bottom, 0px));
  transform:translateY(16px); transition:transform 0.18s;
}
.modal-overlay.show .modal-box{transform:translateY(0);}
.modal-title{font-family:'Rajdhani', sans-serif; font-weight:700; font-size:18px; margin-bottom:12px;}
.modal-body{margin-bottom:18px; font-size:13px; color:var(--text); line-height:1.5;}
.modal-body .field{margin-bottom:0;}
.modal-actions{display:flex; gap:10px;}
.modal-actions .btn{margin:0;}

