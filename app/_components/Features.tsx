import Icons from "./UI/Icons/icons";

export default function Features() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 py-14 gap-7 sm:gap-5">
      <div className="flex gap-5">
        <Icons.shipping />
        <div>
          <p className="text-xl font-semibold">Free Shipping</p>
          <p className="text-sm font-medium">Above all Orders over $200</p>
        </div>
      </div>

      <div className="flex gap-5">
        <Icons.money />
        <div>
          <p className="text-xl font-semibold">Money Guarantee</p>
          <p className="text-sm font-medium">45 Days for Exchange</p>
        </div>
      </div>

      <div className="flex gap-5">
        <Icons.support />
        <div>
          <p className="text-xl font-semibold">Online Support</p>
          <p className="text-sm font-medium">24/7 Customer Care</p>
        </div>
      </div>

      <div className="flex gap-5">
        <Icons.payment />
        <div>
          <p className="text-xl font-semibold">Flexible Payment</p>
          <p className="text-sm font-medium">Play with multiple Credit card</p>
        </div>
      </div>
    </section>
  );
}
