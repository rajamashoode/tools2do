'use client';

import React, { useState } from 'react';

type TaxSlab = {
  minUsd: number;
  maxUsd: number;
  label: string;
  passportTax: number;
  cnicTax: number;
  regulatoryDuty: number;
  notes?: string;
};

// IMPORTANT: Update these tax slab values after official FBR/PTA notification. Current values are editable placeholders for calculator structure and should not be treated as official rates.
const taxSlabs: TaxSlab[] = [
  {
    minUsd: 0,
    maxUsd: 30,
    label: "Up to $30",
    passportTax: 430,
    cnicTax: 550,
    regulatoryDuty: 0,
    notes: "Update after official notification",
  },
  {
    minUsd: 31,
    maxUsd: 100,
    label: "$31 to $100",
    passportTax: 3200,
    cnicTax: 4320,
    regulatoryDuty: 0,
    notes: "Update after official notification",
  },
  {
    minUsd: 101,
    maxUsd: 200,
    label: "$101 to $200",
    passportTax: 9580,
    cnicTax: 11500,
    regulatoryDuty: 0,
    notes: "Update after official notification",
  },
  {
    minUsd: 201,
    maxUsd: 350,
    label: "$201 to $350",
    passportTax: 12200,
    cnicTax: 14600,
    regulatoryDuty: 0,
    notes: "Update after official notification",
  },
  {
    minUsd: 351,
    maxUsd: 500,
    label: "$351 to $500",
    passportTax: 23500,
    cnicTax: 28000,
    regulatoryDuty: 0,
    notes: "Update after official notification",
  },
  {
    minUsd: 501,
    maxUsd: Infinity,
    label: "Above $500",
    passportTax: 37000,
    cnicTax: 44500,
    regulatoryDuty: 0,
    notes: "Update after official notification",
  },
];

export function PtaTaxCalculator() {
  const [brand, setBrand] = useState('Apple iPhone');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [currency, setCurrency] = useState<'USD' | 'PKR'>('USD');
  const [exchangeRate, setExchangeRate] = useState<number | ''>(280);
  const [regType, setRegType] = useState<'Passport' | 'CNIC'>('Passport');
  const [condition, setCondition] = useState('New');
  const [importType, setImportType] = useState('Brought from abroad');
  const [dutyScenario, setDutyScenario] = useState('Include regulatory duty');
  const [useManualOverride, setUseManualOverride] = useState(false);
  const [manualTax, setManualTax] = useState<number | ''>('');
  const [imei, setImei] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const p = Number(price) || 0;
    const rate = Number(exchangeRate) || 280;

    let phoneValuePkr = 0;
    let phoneValueUsd = 0;

    if (currency === 'USD') {
      phoneValuePkr = p * rate;
      phoneValueUsd = p;
    } else {
      phoneValuePkr = p;
      phoneValueUsd = p / rate;
    }

    const slab = taxSlabs.find((s) => phoneValueUsd >= s.minUsd && phoneValueUsd <= s.maxUsd) || taxSlabs[taxSlabs.length - 1];

    const baseTax = regType === 'Passport' ? slab.passportTax : slab.cnicTax;

    const dutyWith = slab.regulatoryDuty;
    const dutyWithout = 0;

    let selectedDuty = 0;
    if (dutyScenario === 'Include regulatory duty') {
      selectedDuty = dutyWith;
    } else if (dutyScenario === 'Remove regulatory duty') {
      selectedDuty = dutyWithout;
    }

    const estTaxWith = baseTax + dutyWith;
    const estTaxWithout = baseTax + dutyWithout;

    let currentEstTax = baseTax + selectedDuty;
    const isManual = useManualOverride && manualTax !== '';
    
    if (isManual) {
      currentEstTax = Number(manualTax);
    }

    const totalCost = phoneValuePkr + currentEstTax;
    const savings = estTaxWith - estTaxWithout;

    setResult({
      brand,
      model: model || 'Unknown Model',
      regType,
      phoneValuePkr,
      phoneValueUsd,
      slabLabel: slab.label,
      baseTax,
      selectedDuty,
      estTaxWith,
      estTaxWithout,
      currentEstTax,
      totalCost,
      savings,
      isManual,
      manualTax: Number(manualTax),
      dutyScenario,
    });
  };

  const reset = () => {
    setBrand('Apple iPhone');
    setModel('');
    setPrice('');
    setCurrency('USD');
    setExchangeRate(280);
    setRegType('Passport');
    setCondition('New');
    setImportType('Brought from abroad');
    setDutyScenario('Include regulatory duty');
    setUseManualOverride(false);
    setManualTax('');
    setImei('');
    setResult(null);
  };

  const formatPkr = (val: number) => {
    return new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits: 0 }).format(val);
  };

  const formatUsd = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(val);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-6 shadow-sm">
        <h2 className="text-xl font-bold">Phone Details</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold">Phone Brand</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
            >
              <option>Apple iPhone</option>
              <option>Samsung</option>
              <option>Vivo</option>
              <option>Oppo</option>
              <option>Xiaomi</option>
              <option>Redmi</option>
              <option>Infinix</option>
              <option>Tecno</option>
              <option>Realme</option>
              <option>OnePlus</option>
              <option>Google Pixel</option>
              <option>Huawei</option>
              <option>Motorola</option>
              <option>Nokia</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold">Phone Model</label>
            <input
              type="text"
              placeholder="e.g. iPhone 15 Pro Max"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold">Phone Value</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))}
              className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold">Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as 'USD' | 'PKR')}
              className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
            >
              <option value="USD">USD</option>
              <option value="PKR">PKR</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold">Editable USD to PKR Exchange Rate</label>
          <input
            type="number"
            value={exchangeRate}
            onChange={(e) => setExchangeRate(e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
          />
          <p className="mt-1 text-xs text-[var(--text-secondary)]">Change this rate if the official customs exchange rate differs.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold">Registration Type</label>
            <select
              value={regType}
              onChange={(e) => setRegType(e.target.value as 'Passport' | 'CNIC')}
              className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
            >
              <option>Passport</option>
              <option>CNIC</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold">Regulatory Duty Scenario</label>
            <select
              value={dutyScenario}
              onChange={(e) => setDutyScenario(e.target.value)}
              className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
            >
              <option>Include regulatory duty</option>
              <option>Remove regulatory duty</option>
              <option>Compare both</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold">Phone Condition</label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
            >
              <option>New</option>
              <option>Used</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold">Import Type</label>
            <select
              value={importType}
              onChange={(e) => setImportType(e.target.value)}
              className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
            >
              <option>Brought from abroad</option>
              <option>Gifted phone</option>
              <option>Local purchase</option>
              <option>Already imported</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
          <label className="flex items-center space-x-2 text-sm font-semibold cursor-pointer">
            <input
              type="checkbox"
              checked={useManualOverride}
              onChange={(e) => setUseManualOverride(e.target.checked)}
              className="h-4 w-4 rounded border-[var(--border-default)]"
            />
            <span>Enable Manual Tax Override</span>
          </label>
          {useManualOverride && (
            <div className="mt-3">
              <label className="mb-1 block text-xs font-semibold">Custom Estimated Tax (PKR)</label>
              <input
                type="number"
                placeholder="Enter manual tax amount"
                value={manualTax}
                onChange={(e) => setManualTax(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
              />
            </div>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold">IMEI Number (Optional - for your own note only)</label>
          <input
            type="text"
            placeholder="e.g. 3521... (Not verified or stored)"
            value={imei}
            onChange={(e) => setImei(e.target.value)}
            className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-sm focus:border-[var(--accent-action)] focus:outline-none"
          />
          <p className="mt-1 text-xs text-[var(--text-secondary)]">Do not enter private information unless necessary. This tool does not verify or store IMEI numbers.</p>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            onClick={calculate}
            disabled={price === ''}
            className="flex-1 rounded-xl bg-[var(--accent-action)] px-4 py-3 font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            Calculate PTA Tax
          </button>
          <button
            onClick={reset}
            className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-6 py-3 font-semibold hover:bg-[var(--bg-canvas)]"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {result ? (
          <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">Estimated Cost Results</h2>
            <div className="mb-6 grid gap-2 text-sm">
              <div className="flex justify-between border-b border-[var(--border-default)] pb-2">
                <span className="text-[var(--text-secondary)]">Phone</span>
                <span className="font-semibold">{result.brand} {result.model}</span>
              </div>
              <div className="flex justify-between border-b border-[var(--border-default)] pb-2">
                <span className="text-[var(--text-secondary)]">Registration Mode</span>
                <span className="font-semibold">{result.regType}</span>
              </div>
              <div className="flex justify-between border-b border-[var(--border-default)] pb-2">
                <span className="text-[var(--text-secondary)]">Phone Value</span>
                <span className="font-semibold">{formatUsd(result.phoneValueUsd)} ({formatPkr(result.phoneValuePkr)})</span>
              </div>
              <div className="flex justify-between border-b border-[var(--border-default)] pb-2">
                <span className="text-[var(--text-secondary)]">Tax Slab Applied</span>
                <span className="font-semibold">{result.slabLabel}</span>
              </div>
            </div>

            <div className="mb-6 rounded-2xl bg-[var(--bg-canvas)] p-5">
              <h3 className="mb-2 text-sm font-semibold text-[var(--text-secondary)]">Total Estimated PTA Payable</h3>
              <p className="text-4xl font-extrabold text-[var(--accent-action)]">
                {formatPkr(result.currentEstTax)}
              </p>
              {result.isManual && (
                <p className="mt-1 text-xs text-orange-500 font-semibold">* Includes manual override of {formatPkr(result.manualTax)}</p>
              )}
              
              <div className="mt-4 pt-4 border-t border-[var(--border-default)]">
                <h3 className="mb-1 text-sm font-semibold text-[var(--text-secondary)]">Total Estimated Phone Cost (Price + Tax)</h3>
                <p className="text-xl font-bold">
                  {formatPkr(result.totalCost)}
                </p>
              </div>
            </div>

            {result.dutyScenario === 'Compare both' && (
              <div className="mb-6 rounded-xl border border-[var(--border-default)] p-4 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-default)]">
                      <th className="pb-2 font-semibold">Scenario</th>
                      <th className="pb-2 font-semibold">Base Tax</th>
                      <th className="pb-2 font-semibold">Reg. Duty</th>
                      <th className="pb-2 font-semibold">Total Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-default)]">
                      <td className="py-2 text-[var(--text-secondary)]">With Reg. Duty</td>
                      <td className="py-2">{formatPkr(result.baseTax)}</td>
                      <td className="py-2">{formatPkr(result.selectedDuty || 0)}</td>
                      <td className="py-2 font-semibold">{formatPkr(result.estTaxWith)}</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[var(--text-secondary)]">Without Reg. Duty</td>
                      <td className="py-2">{formatPkr(result.baseTax)}</td>
                      <td className="py-2">{formatPkr(0)}</td>
                      <td className="py-2 font-semibold">{formatPkr(result.estTaxWithout)}</td>
                    </tr>
                  </tbody>
                </table>
                {result.savings > 0 && (
                  <p className="mt-3 text-sm font-semibold text-green-600">
                    Estimated Savings if duty is removed: {formatPkr(result.savings)}
                  </p>
                )}
              </div>
            )}

            <div className="rounded-xl bg-orange-50 p-4 text-sm text-orange-800 dark:bg-orange-950/30 dark:text-orange-200">
              <p className="font-semibold">Disclaimer:</p>
              <p className="mt-1 leading-relaxed">
                This is an estimate only. Final payable tax depends on official FBR/PTA/DIRBS rates, exchange rate, device category, and government notification.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--border-default)] p-8 text-center text-[var(--text-secondary)]">
            <svg
              className="mb-4 h-12 w-12 opacity-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <p>Enter your phone details and click Calculate to view estimated PTA tax.</p>
          </div>
        )}
      </div>
    </div>
  );
}
