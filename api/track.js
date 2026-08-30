export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ok:false});
  const b = typeof req.body === 'string' ? (()=>{try{return JSON.parse(req.body)}catch{return {raw:req.body}}})() : (req.body || {});
  const safe = {kind:'nuvora_demo_event', site:String(b.site||'unknown').slice(0,80), event:String(b.event||'unknown').slice(0,80), path:String(b.path||'').slice(0,200), target:String(b.target||'').slice(0,240), referrer:String(b.referrer||'').slice(0,240), ts:new Date().toISOString()};
  console.log(JSON.stringify(safe));
  res.status(204).end();
}
