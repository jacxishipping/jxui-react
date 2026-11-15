// @jxui/react v3.0.0 — AIApprovalCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ShieldAlert, CheckCircle2, XCircle, ChevronDown, Clock } from 'lucide-react';

// 8. AIApprovalCard — a human-in-the-loop approval: read the request, expand
// the details, approve it or reject it with a reason. The card reflects the
// decision and locks the actions afterwards.
export const AIApprovalCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [status, setStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [showDetails, setShowDetails] = useState(false);
  const [reason, setReason] = useState('');
  const [confirmReject, setConfirmReject] = useState(false);

  const approve = () => setStatus('approved');
  const reject = () => {
    if (!confirmReject) { setConfirmReject(true); return; }
    setStatus('rejected');
  };

  return (
    <div className={`p-3 border-2 rounded-xl text-xs flex flex-col gap-2 ${status === 'approved' ? 'border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20' : status === 'rejected' ? 'border-rose-500 bg-rose-50/40 dark:bg-rose-950/20' : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'}`}>
      <div className="flex items-center gap-2">
        <ShieldAlert className={`w-4 h-4 shrink-0 ${status === 'approved' ? 'text-emerald-500' : status === 'rejected' ? 'text-rose-500' : palette.text}`} />
        <span className="font-bold text-slate-900 dark:text-white">Human-in-the-Loop Approval Required</span>
        <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-slate-400"><Clock className="w-3 h-3" /> expires in 14:32</span>
      </div>
      <p className="text-[11px] text-slate-500">Deploy build #894 to production?</p>
      <button type="button" onClick={() => setShowDetails((s) => !s)} aria-expanded={showDetails} className="min-h-[36px] self-start inline-flex items-center gap-1 font-semibold text-slate-600 dark:text-slate-300 cursor-pointer">
        {showDetails ? 'Hide details' : 'Show details'}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
      </button>
      {showDetails && (
        <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-2 font-mono text-[11px] text-slate-600 dark:text-slate-300 space-y-0.5">
          <div>build: #894 · commit 6ba5830</div>
          <div>target: production · region us-east-1</div>
          <div>changes: 26 files, +668 / −249</div>
          <div>tests: 22/22 passing · build: ok</div>
        </div>
      )}
      {status === 'pending' && (
        <>
          {confirmReject && (
            <input
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Reason for rejection (optional)…"
              aria-label="Reason for rejection"
              className="min-h-[36px] px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200"
            />
          )}
          <div className="flex gap-2">
            <button type="button" onClick={approve} className="min-h-[44px] px-4 bg-emerald-600 text-white rounded-lg font-bold cursor-pointer">Approve</button>
            <button type="button" onClick={reject} className="min-h-[44px] px-4 bg-slate-200 dark:bg-slate-800 rounded-lg font-bold text-slate-700 dark:text-slate-200 cursor-pointer">
              {confirmReject ? 'Confirm reject' : 'Reject'}
            </button>
            {confirmReject && (
              <button type="button" onClick={() => setConfirmReject(false)} className="min-h-[44px] px-3 rounded-lg font-semibold text-slate-500 cursor-pointer">Cancel</button>
            )}
          </div>
        </>
      )}
      {status === 'approved' && (
        <div className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /> Approved — deployment started.</div>
      )}
      {status === 'rejected' && (
        <div className="flex items-center gap-1.5 font-semibold text-rose-600 dark:text-rose-400"><XCircle className="w-4 h-4" /> Rejected{reason ? ` — ${reason}` : ' — deployment blocked.'}</div>
      )}
    </div>
  );
};
