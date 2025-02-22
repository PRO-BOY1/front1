import MoneyDisplay from '../components/MoneyDisplay';

function Money() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Money Overview</h2>
      <MoneyDisplay />
    </div>
  );
}

export default Money;
