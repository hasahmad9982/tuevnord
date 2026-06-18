import { certData, CertDataType } from "@/data/certData";

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const cert: CertDataType | undefined = certData.find(
    (c: CertDataType) => c._id == id,
  );

  if (!cert) {
    return (
      <main className="max-w-5xl mx-auto px-5 py-10 print:max-w-none print:px-0 print:py-0 min-h-screen">
        <h1 className="font-bold text-red-500 text-2xl">No result found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-5 py-10 print:max-w-none print:px-0 print:py-0 min-h-screen">
      <section className=" from-blue-100 to-blue-50 rounded-lg p-6 md:p-10 mb-8">
        {/* Details */}
        <div className="grid grid-cols-2  md:grid-cols-3 gap-5 mb-8 text-base">
          <Field label="ID No." value={cert.id} />

          <div className="lg:col-span-2">
            <Field label="Name" value={cert.name} />
          </div>

          <Field label="Iqama" value={cert.iqamaNo} />

          {/* <div className="lg:col-span-2">
            <Field label="S_Office" value="Yanbu" />
          </div> */}

          {/* <Field label="Company" value="Private" /> */}

          <Field label="Date of Issue" value={cert.issueDate} />

          <div className="lg:col-span-2">
            <Field label="Expiry Date" value={cert.validUpTo} />
          </div>

          <div className="lg:col-span-3">
            <Field label="Details" value={cert.trade} />
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-5 md:gap-7 max-w-xl">
        <img src={`/certs/crd/${cert._id}/f.jpg`} alt="card front view" />
        <img src={`/certs/crd/${cert._id}/b.jpg`} alt="card back view" />
      </div>
    </main>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <span className="font-semibold text-blue-900 text-sm mb-1">{label}</span>

      <span className="text-gray-800">{value}</span>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-2 mb-3 text-sm">
      <span className="font-semibold text-blue-900 min-w-[110px]">
        {label}:
      </span>

      <span className="text-gray-800">{value}</span>
    </div>
  );
}

function ContactRow({ text }: { text: string }) {
  return <div className="text-xs text-gray-800 mb-2">{text}</div>;
}
