import { useState, useEffect } from "react";

const PASS = "malka2026";
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyYzTKhQiaNbT198GxrfDV5F3g4ygI_f5tHmP-58JhsGToqLm2zYOGjhNTh0BfXlfA_Mw/exec";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');

html,body{margin:0;padding:0;background:#f2e7dd;}

.root{
  font-family:'Cairo',sans-serif;
  direction:rtl;
  min-height:100vh;
  background:#f2e7dd;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:36px 16px;
}

.card{
  width:100%;
  max-width:460px;
  background:#ffffff;
  border:1px solid rgba(66, 63, 27, 0.15);
  border-radius:24px;
  padding:44px 32px;
  box-shadow:0 10px 40px rgba(66, 63, 27, 0.06);
}
.wide{max-width:580px;}

.deco{
  height:1px;
  background:linear-gradient(to left, transparent, rgba(66, 63, 27, 0.2), transparent);
  margin:24px 0;
}

.title{
  font-size:36px;
  font-weight:900;
  text-align:center;
  color:#423f1b;
  letter-spacing:1px;
  margin-bottom:8px;
}

.title-sm{ font-size:24px; }

.sub{
  text-align:center;
  font-size:14px;
  font-weight:600;
  color:rgba(66, 63, 27, 0.75);
  letter-spacing:2px;
  margin-top:6px;
}

.lbl{
  display:block;
  font-size:14px;
  font-weight:700;
  color:#423f1b;
  margin-bottom:8px;
}

.inp{
  width:100%;
  background:rgba(242, 231, 221, 0.3);
  border:1px solid rgba(66, 63, 27, 0.25);
  border-radius:11px;
  padding:13px 15px;
  color:#423f1b;
  font-family:'Cairo',sans-serif;
  font-size:15px;
  direction:rtl;
  outline:none;
  transition:all .2s;
}
.inp::placeholder{color:rgba(66, 63, 27, 0.4);}
.inp:focus{border-color:#423f1b;box-shadow:0 0 0 3px rgba(66, 63, 27, 0.1);}
.inp-err{border-color:rgba(255,80,80,0.7)!important;}

.err{font-size:12.5px;color:#d93838;margin-top:6px;font-weight:600;}

.fg{margin-bottom:20px;}

.att-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}

.att{
  padding:14px 10px;
  border-radius:11px;
  border:1px solid rgba(66, 63, 27, 0.25);
  background:transparent;
  color:#423f1b;
  font-family:'Cairo',sans-serif;
  font-size:14px;
  font-weight:700;
  cursor:pointer;
  transition:all .15s;
  text-align:center;
}
.att:hover{border-color:#423f1b;background:rgba(66, 63, 27, 0.04);}
.att-y{background:rgba(70,200,110,0.15)!important;border-color:#38a858!important;color:#287d40!important;}
.att-n{background:rgba(255,80,80,0.12)!important;border-color:#e64545!important;color:#bd2222!important;}

.btn{
  width:100%;
  padding:16px;
  border-radius:12px;
  border:none;
  background:#423f1b;
  color:#f2e7dd;
  font-family:'Cairo',sans-serif;
  font-size:16px;
  font-weight:800;
  cursor:pointer;
  transition:all .2s;
  box-shadow:0 4px 15px rgba(66, 63, 27, 0.15);
  margin-top:8px;
}
.btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(66, 63, 27, 0.25);}
.btn:disabled{opacity:.6;cursor:not-allowed;transform:none;}

.ghost{
  background:transparent;
  border:2px solid #423f1b;
  color:#423f1b;
  border-radius:8px;
  padding:8px 16px;
  font-family:'Cairo',sans-serif;
  font-size:13px;
  font-weight:700;
  cursor:pointer;
  transition:all .15s;
}
.ghost:hover{background:#423f1b;color:#f2e7dd;}

.link{
  background:none;
  border:none;
  color:rgba(66, 63, 27, 0.65);
  font-family:'Cairo',sans-serif;
  font-size:13px;
  font-weight:700;
  cursor:pointer;
  text-decoration:underline;
  transition:color .15s;
}
.link:hover{color:#423f1b;}

.stats{display:flex;gap:10px;margin-bottom:22px;}
.stat{
  flex:1;
  background:rgba(66, 63, 27, 0.04);
  border:1px solid rgba(66, 63, 27, 0.12);
  border-radius:13px;
  padding:14px 8px;
  text-align:center;
}
.stat-n{font-size:28px;font-weight:900;}
.stat-l{font-size:12px;color:rgba(66, 63, 27, 0.7);margin-top:3px;font-weight:700;}

.gold-n{color:#423f1b;}
.green-n{color:#287d40;}
.red-n{color:#bd2222;}

.tabs{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;}
.tab{
  padding:6px 15px;
  border-radius:20px;
  border:1px solid rgba(66, 63, 27, 0.25);
  background:transparent;
  color:rgba(66, 63, 27, 0.75);
  font-family:'Cairo',sans-serif;
  font-size:13px;
  font-weight:700;
  cursor:pointer;
  transition:all .15s;
}
.tab.on{background:#423f1b;border-color:#423f1b;color:#f2e7dd;}

.row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding:13px 15px;
  border-radius:11px;
  background:#fff;
  border:1px solid rgba(66, 63, 27, 0.15);
  margin-bottom:9px;
}

.badge{
  display:inline-block;
  padding:4px 12px;
  border-radius:20px;
  font-size:12px;
  font-weight:700;
  white-space:nowrap;
}
.badge-y{background:rgba(70,200,110,0.15);color:#287d40;border:1px solid rgba(70,200,110,0.3);}
.badge-n{background:rgba(255,80,80,0.1);color:#bd2222;border:1px solid rgba(255,80,80,0.25);}

.scroll{max-height:360px;overflow-y:auto;padding-left:4px;}
.scroll::-webkit-scrollbar{width:5px;}
.scroll::-webkit-scrollbar-thumb{background:rgba(66, 63, 27, 0.25);border-radius:4px;}

.hdr{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px;gap:12px;}
.hdr-btns{display:flex;gap:8px;align-items:center;flex-shrink:0;}
`;

export default function App() {
  const [page, setPage] = useState("form");
  const [form, setForm] = useState({ name: "", phone: "", att: "" });
  const [errs, setErrs] = useState<any>({});
  const [busy, setBusy] = useState(false);
  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [filt, setFilt] = useState("all");

  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
    return () => {
      document.head.removeChild(s);
    };
  }, []);

  function set(k: string) {
    return (v: string) => setForm((f) => ({ ...f, [k]: v }));
  }

  function validate() {
    const e: any = {};
    const n = form.name.trim();
    const p = form.phone.replace(/[\s\-]/g, "");

    const isArabic = /^[\u0600-\u06FF\s]+$/.test(n);
    if (!n) {
      e.name = "الرجاء إدخال اسم المدعوة";
    } else if (n.length < 4) {
      e.name = "يجب ألا يقل الاسم عن 4 حروف";
    } else if (!isArabic) {
      e.name = "الرجاء إدخال الاسم بحروف عربية فقط";
    }

    if (!p) {
      e.phone = "الرجاء إدخال رقم الجوال";
    } else if (!/^05\d+$/.test(p)) {
      e.phone = "يجب أن يبدأ رقم الجوال بـ 05 ويحتوي على أرقام فقط";
    } else if (p.length !== 10) {
      e.phone = "يجب أن يتكون رقم الجوال من 10 أرقام (مثال: 05XXXXXXXX)";
    }

    if (!form.att) e.att = "الرجاء تحديد موقفكِ من الحضور";
    setErrs(e);
    return !Object.keys(e).length;
  }

  async function submit() {
    if (!validate()) return;
    setBusy(true);
    setErrs({});
    try {
      const ph = form.phone.replace(/[\s\-]/g, "");
      const time = new Date().toLocaleString("ar-SA", {
        dateStyle: "short",
        timeStyle: "short",
      });

      const params = new URLSearchParams({
        action: "add",
        name: form.name.trim(),
        phone: ph,
        att: form.att,
        time: time,
      });

      const res = await fetch(`${SCRIPT_URL}?${params.toString()}`);
      const result = await res.json();

      if (result.status === "error") {
        if (result.field === "name") {
          setErrs({ name: result.message });
        } else if (result.field === "phone") {
          setErrs({ phone: result.message });
        } else if (result.field === "capacity") {
          setErrs({ g: result.message });
        } else {
          setErrs({ g: result.message });
        }
        setBusy(false);
        return;
      }
      setPage("done");
    } catch {
      setErrs({ g: "حدث خطأ في الاتصال، يرجى المحاولة مجدداً" });
    }
    setBusy(false);
  }

  async function adminLogin() {
    if (pass !== PASS) {
      setPassErr("كلمة المرور غير صحيحة");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(`${SCRIPT_URL}?action=read`);
      const resultData = await res.json();
      setData(Array.isArray(resultData) ? resultData : []);
      setPage("admin");
      setPassErr("");
    } catch {
      setData([]);
      setPassErr("تعذر جلب البيانات من الخادم، حاول مجدداً.");
    }
    setBusy(false);
  }

  function exportCSV() {
    const bom = "\uFEFF";
    const hdr = "الاسم,رقم الجوال,الحضور,الوقت\n";
    const rows = data
      .map(
        (r) =>
          `"${r.name}","${r.phone}","${r.att === "y" ? "ستحضر" : "اعتذرت"}","${
            r.time
          }"`
      )
      .join("\n");
    const blob = new Blob([bom + hdr + rows], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "حفل_ملكة_RSVP.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  const yes = data.filter((x) => x.att === "y");
  const no = data.filter((x) => x.att === "n");
  const shown = filt === "y" ? yes : filt === "n" ? no : data;

  /* ── FORM ── */
  if (page === "form")
    return (
      <div className="root">
        <div className="card">
          <div className="title">تأكيد حضور</div>
          <div className="sub">السبت</div>
          <div className="sub">2026/06/06</div>
          <div className="deco" />

          <p
            style={{
              textAlign: "center",
              color: "rgba(66, 63, 27, 0.75)",
              fontSize: 14.5,
              marginBottom: 28,
              lineHeight: 1.8,
              fontWeight: 600,
            }}
          >
            يسعدنا دعوتكِ لهذه المناسبة الخاصة
            <br />
            يُرجى تأكيد حضوركِ من خلال النموذج أدناه
          </p>

          <div className="fg">
            <label className="lbl">اسم المدعوة</label>
            <input
              className={`inp${errs.name ? " inp-err" : ""}`}
              placeholder="أدخلي اسمكِ (بالعربية)"
              value={form.name}
              onChange={(e) => set("name")(e.target.value)}
            />
            {errs.name && <div className="err">{errs.name}</div>}
          </div>

          <div className="fg">
            <label className="lbl">رقم الجوال</label>
            <input
              className={`inp${errs.phone ? " inp-err" : ""}`}
              placeholder="05XXXXXXXX"
              value={form.phone}
              onChange={(e) => set("phone")(e.target.value)}
              dir="ltr"
              style={{ textAlign: "right" }}
            />
            {errs.phone && <div className="err">{errs.phone}</div>}
          </div>

          <div className="fg">
            <label className="lbl">هل ستكونين معنا؟</label>
            <div className="att-grid">
              <button
                className={`att${form.att === "y" ? " att-y" : ""}`}
                onClick={() => set("att")("y")}
              >
                ✓ نعم، سأحضر
              </button>
              <button
                className={`att${form.att === "n" ? " att-n" : ""}`}
                onClick={() => set("att")("n")}
              >
                ✗ أعتذر
              </button>
            </div>
            {errs.att && <div className="err">{errs.att}</div>}
          </div>

          {errs.g && (
            <div
              className="err"
              style={{ textAlign: "center", marginBottom: 14 }}
            >
              {errs.g}
            </div>
          )}

          <button className="btn" onClick={submit} disabled={busy}>
            {busy ? "جارٍ الإرسال…" : "إرسال ردي"}
          </button>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <button className="link" onClick={() => setPage("login")}>
              لوحة التحكم
            </button>
          </div>
        </div>
      </div>
    );

  /* ── SUCCESS ── */
  if (page === "done")
    return (
      <div className="root">
        <div className="card" style={{ textAlign: "center" }}>
          <span style={{ fontSize: 64, display: "block", marginBottom: 16 }}>
            {form.att === "y" ? "🎊" : "💌"}
          </span>
          <div className="title title-sm">
            {form.att === "y" ? "يسعدنا حضوركِ!" : "شكراً لردكِ!"}
          </div>
          <div className="deco" />
          <p
            style={{
              color: "rgba(66, 63, 27, 0.8)",
              lineHeight: 2.1,
              fontSize: 15,
              fontWeight: 600,
              whiteSpace: "pre-line",
            }}
          >
            {form.att === "y"
              ? "نتطلع إلى رؤيتكِ في حفل ملكة\nالسبت ٦ يونيو ٢٠٢٦"
              : "تم استلام اعتذاركِ 💌\nنتمنى لكِ أوقاتاً جميلة"}
          </p>
        </div>
      </div>
    );

  /* ── ADMIN LOGIN ── */
  if (page === "login")
    return (
      <div className="root">
        <div className="card">
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <span style={{ fontSize: 38, display: "block", marginBottom: 10 }}>
              🔐
            </span>
            <div className="title title-sm">لوحة التحكم</div>
            <div className="sub" style={{ letterSpacing: 2 }}>
              حفل ملكة — RSVP
            </div>
          </div>
          <div className="deco" />
          <div className="fg">
            <label className="lbl">كلمة المرور</label>
            <input
              className={`inp${passErr ? " inp-err" : ""}`}
              type="password"
              placeholder="أدخل كلمة المرور"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && adminLogin()}
            />
            {passErr && <div className="err">{passErr}</div>}
          </div>
          <button className="btn" onClick={adminLogin} disabled={busy}>
            {busy ? "جارٍ التحميل..." : "دخول"}
          </button>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button className="link" onClick={() => setPage("form")}>
              ← العودة للنموذج
            </button>
          </div>
        </div>
      </div>
    );

  /* ── ADMIN DASHBOARD ── */
  if (page === "admin")
    return (
      <div
        className="root"
        style={{ justifyContent: "flex-start", paddingTop: 36 }}
      >
        <div className="card wide">
          <div className="hdr">
            <div>
              <div className="title title-sm" style={{ textAlign: "right" }}>
                حفل ملكة
              </div>
              <div
                className="sub"
                style={{ textAlign: "right", letterSpacing: 2, marginTop: 4 }}
              >
                لوحة تحكم RSVP — ٦ يونيو ٢٠٢٦
              </div>
            </div>
            <div className="hdr-btns">
              {data.length > 0 && (
                <button className="ghost" onClick={exportCSV}>
                  📥 تصدير CSV
                </button>
              )}
              <button className="link" onClick={() => setPage("form")}>
                خروج
              </button>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-n gold-n">{data.length}</div>
              <div className="stat-l">إجمالي الردود</div>
            </div>
            <div className="stat">
              <div className="stat-n green-n">{yes.length}</div>
              <div className="stat-l">سيحضرون ✓</div>
            </div>
            <div className="stat">
              <div className="stat-n red-n">{no.length}</div>
              <div className="stat-l">اعتذروا ✗</div>
            </div>
          </div>

          <div className="deco" />

          <div className="tabs">
            {[
              ["all", `الكل (${data.length})`],
              ["y", `سيحضرون (${yes.length})`],
              ["n", `اعتذروا (${no.length})`],
            ].map(([k, v]) => (
              <button
                key={k}
                className={`tab${filt === k ? " on" : ""}`}
                onClick={() => setFilt(k)}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="scroll">
            {shown.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  color: "rgba(66, 63, 27, 0.4)",
                  padding: "44px 0",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                لا توجد ردود بعد
              </div>
            ) : (
              shown.map((r, i) => (
                <div key={i} className="row">
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: 15,
                        color: "#423f1b",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {r.name}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "rgba(66, 63, 27, 0.65)",
                        direction: "ltr",
                        textAlign: "right",
                        marginTop: 2,
                        fontWeight: 700,
                      }}
                    >
                      {r.phone}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(66, 63, 27, 0.45)",
                        marginTop: 2,
                        fontWeight: 600,
                      }}
                    >
                      {r.time}
                    </div>
                  </div>
                  <span
                    className={`badge ${r.att === "y" ? "badge-y" : "badge-n"}`}
                  >
                    {r.att === "y" ? "✓ ستحضر" : "✗ اعتذرت"}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );

  return null;
}
