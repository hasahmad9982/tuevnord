'use client';

export default function CertificationPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      {/* FRONT OF CERTIFICATE */}
      <div className="bg-gradient-to-b from-blue-100 to-blue-50 rounded-lg p-10 mb-8 shadow-lg">
        <div className="flex justify-between items-center mb-9 border-b-2 border-blue-900 pb-5">
          <div className="font-bold text-blue-900 text-2xl tracking-widest">TÜV NORD</div>
          <div className="text-center flex-1 -ml-12">
            <h2 className="text-blue-900 text-xl font-bold tracking-wide leading-tight">
              NATIONAL INSPECTION &<br />TECHNICAL TESTING CO., LTD.
            </h2>
          </div>
          <div className="w-16 h-16 bg-blue-50 border-2 border-blue-900 rounded-full flex items-center justify-center text-xs text-blue-900 text-center font-bold">
            TÜV<br />NORD
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-9 text-base md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col">
            <span className="font-bold text-blue-900 mb-1 text-sm">ID No.:</span>
            <span className="text-gray-800 text-base">4729</span>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <span className="font-bold text-blue-900 mb-1 text-sm">Name</span>
            <span className="text-gray-800 text-base">SARDAR ALI ALEEM KHAN</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-blue-900 mb-1 text-sm">Iqama</span>
            <span className="text-gray-800 text-base">2620826343</span>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <span className="font-bold text-blue-900 mb-1 text-sm">S_Office</span>
            <span className="text-gray-800 text-base">Yanbu</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-blue-900 mb-1 text-sm">Company</span>
            <span className="text-gray-800 text-base">Private</span>
          </div>
          <div></div>
          <div className="flex flex-col">
            <span className="font-bold text-blue-900 mb-1 text-sm">Date of Issue:</span>
            <span className="text-gray-800 text-base">16-11-2025</span>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <span className="font-bold text-blue-900 mb-1 text-sm">Expiry Date:</span>
            <span className="text-gray-800 text-base">15-11-2026</span>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-2">
            <span className="font-bold text-blue-900 mb-1 text-sm">Details</span>
            <span className="text-gray-800 text-base">
              -SCAFFOLD ERECTOR (TUBE & COUPLER)
            </span>
          </div>
        </div>

        {/* Card with Photo and QR */}
        <div className="bg-white rounded-lg p-8 mt-8 shadow-md grid grid-cols-4 gap-8 items-start md:grid-cols-1">
          <div className="col-span-3 md:col-span-1">
            <h3 className="text-blue-900 text-sm mb-5 flex items-center gap-2">
              <span className="text-red-600 font-bold text-base">ID No.: YN202504729</span>
            </h3>
            <div className="flex gap-2.5 mb-3 text-sm">
              <span className="font-bold text-blue-900 min-w-max">Name:</span>
              <span className="text-gray-800">SARDAR ALI ALEEM KHAN</span>
            </div>
            <div className="flex gap-2.5 mb-3 text-sm">
              <span className="font-bold text-blue-900 min-w-max">ID/Iqama No.:</span>
              <span className="text-gray-800">2620826343</span>
            </div>
            <div className="flex gap-2.5 mb-3 text-sm">
              <span className="font-bold text-blue-900 min-w-max">Issue on:</span>
              <span className="text-gray-800">16-11-2025</span>
            </div>
            <div className="flex gap-2.5 text-sm">
              <span className="font-bold text-blue-900 min-w-max">Valid up to:</span>
              <span className="text-gray-800">15-11-2026</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center col-span-1">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-300 to-blue-100 border-4 border-blue-900 rounded flex items-center justify-center text-xs text-blue-900 text-center font-bold">
              PHOTO
            </div>
            <div className="w-32 h-32 bg-white border-2 border-gray-300 rounded flex items-center justify-center text-xs text-gray-400">
              █ QR █<br />█ CODE █
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-5 py-3.75 rounded text-center font-bold text-base tracking-wide mt-8">
          Has successfully completed the assessment and examination
        </div>
      </div>

      {/* BACK OF CERTIFICATE */}
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <div className="flex justify-between items-center mb-8 pb-5 border-b-2 border-gray-200">
          <div className="text-red-600 font-bold text-base">ID No.: YN202504729</div>
          <div className="text-blue-900 font-bold text-lg">TÜV NORD</div>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-1">
          <div className="border-2 border-blue-900 p-7 rounded min-h-48 flex items-center justify-center">
            <div className="font-bold text-blue-900 text-base text-center leading-relaxed">
              -SCAFFOLD ERECTOR<br />(TUBE & COUPLER)
            </div>
          </div>

          <div>
            <h4 className="text-blue-900 text-sm font-bold mb-4">For Card Verification</h4>
            <div className="text-xs text-gray-800 mb-2 leading-relaxed">Tel Jubail. 013 340 7607</div>
            <div className="text-xs text-gray-800 mb-2 leading-relaxed">Fax Jubail. 013 340 7605</div>
            <div className="text-xs text-gray-800 mb-2 leading-relaxed">Tel Riyadh. 011 478 8214</div>
            <div className="text-xs text-gray-800 mb-2 leading-relaxed">Tel Jeddah. 012 610 9012</div>
            <div className="text-xs text-gray-800 mb-4 leading-relaxed">Tel Yanbu. v014 325 1475</div>
            <div className="text-xs text-gray-800 mb-2 leading-relaxed font-bold">
              website: www.fahstuv.com
            </div>
            <div className="text-xs text-gray-800 mb-8 leading-relaxed">
              email: info@fahstuv.com
            </div>
            <div className="text-xs text-gray-600 mt-8">
              ________________<br />
              Authorized Signature
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-5 py-3 rounded text-center font-bold text-sm mt-6">
          This card us issued by and remains the property of FAHSS/TUV
        </div>
      </div>
    </div>
  );
}
