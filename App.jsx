import { useState } from 'react';

export default function App() {
  const [salary, setSalary] = useState(0);
  const [commitment, setCommitment] = useState(0);
  const [carPrice, setCarPrice] = useState(0);
  const [deposit, setDeposit] = useState(0);

  const calculateEligibility = () => {
    const availableIncome = salary - commitment;
    const maxInstallment = availableIncome * 0.3;
    const loanAmount = carPrice - (carPrice * deposit) / 100;
    const estimatedMonthly = loanAmount / 84;
    const status =
      availableIncome < 1000
        ? 'Merah - Tidak Layak'
        : estimatedMonthly < maxInstallment
        ? 'Hijau - Layak'
        : 'Kuning - Pertimbangan';

    return { estimatedMonthly, status };
  };

  const result = calculateEligibility();

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc2626', textAlign: 'center' }}>
        Semakan Kelayakan Pinjaman Kereta FRD
      </h1>
      <div style={{ marginTop: '1.5rem' }}>
        <input type="number" placeholder="Gaji Bersih (RM)" onChange={(e) => setSalary(Number(e.target.value))} />
        <input type="number" placeholder="Komitmen Bulanan (RM)" onChange={(e) => setCommitment(Number(e.target.value))} />
        <input type="number" placeholder="Harga Kereta (RM)" onChange={(e) => setCarPrice(Number(e.target.value))} />
        <input type="number" placeholder="Deposit (%)" onChange={(e) => setDeposit(Number(e.target.value))} />
      </div>
      <div style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
        <p><strong>Bayaran Bulanan Anggaran:</strong> RM{result.estimatedMonthly.toFixed(2)}</p>
        <p><strong>Status Kelayakan:</strong> {result.status}</p>
      </div>
      <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#dc2626', color: 'white', borderRadius: '0.25rem', border: 'none' }}>
        Teruskan ke Permohonan
      </button>
    </div>
  );
}
