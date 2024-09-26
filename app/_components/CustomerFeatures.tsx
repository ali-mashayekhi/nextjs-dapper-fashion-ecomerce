export default function CustomerFeatures() {
  return (
    <section className="grid grid-cols-3 px-10 py-5 bg-primary-gray-200 mb-14">
      <div className="text-center">
        <p className="font-semibold text-4xl mb-3">1 Million+</p>
        <p className="text-xl font-normal text-primary-black-500">
          Yearly Sales
        </p>
      </div>
      <div className="text-center border-r-2 border-l-2 border-primary-black-500">
        <p className="font-semibold text-4xl mb-3">95%</p>
        <p className="text-xl font-normal text-primary-black-500">
          Happy Customers
        </p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-4xl mb-3">20k+</p>
        <p className="text-xl font-normal text-primary-black-500">
          Customer Rating
        </p>
      </div>
    </section>
  );
}
