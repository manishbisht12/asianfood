import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import StatsCard from "@/app/components/StatsCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">
            ☕ Chai Samosa Dashboard
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard title="Total Orders" value="1,240" />
            <StatsCard title="Chai Sold" value="3,560" />
            <StatsCard title="Samosa Sold" value="2,980" />
            <StatsCard title="Revenue" value="₹48,500" />
          </div>

          {/* Recent Orders */}
          <div className="mt-10 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Customer</th>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Rahul</td>
                  <td>Masala Chai</td>
                  <td>2</td>
                  <td>₹40</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Ankit</td>
                  <td>Samosa</td>
                  <td>4</td>
                  <td>₹80</td>
                </tr>
                <tr>
                  <td className="py-2">Pooja</td>
                  <td>Chai + Samosa</td>
                  <td>1</td>
                  <td>₹30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
