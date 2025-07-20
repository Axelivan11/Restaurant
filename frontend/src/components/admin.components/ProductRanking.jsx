import {
  Card,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  Tab
} from "@material-tailwind/react";

import {
  FireIcon,
  CakeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const foodRanking = [
  { id: 1, name: "Pizza Margherita", sales: 1240, icon: <FireIcon className="h-6 w-6 text-red-500" /> },
  { id: 2, name: "Sushi Roll", sales: 980, icon: <CakeIcon className="h-6 w-6 text-blue-500" /> },
  { id: 3, name: "Tacos Al Pastor", sales: 860, icon: <ShoppingCartIcon className="h-6 w-6 text-green-500" /> },
  { id: 4, name: "Cheeseburger", sales: 790, icon: <FireIcon className="h-6 w-6 text-orange-500" /> },
  { id: 5, name: "Pasta Alfredo", sales: 620, icon: <CakeIcon className="h-6 w-6 text-yellow-500" /> },
];

export default function ProductRanking() {
  return (
    <Card className="shadow-xl border mt-6 rounded-3xl bg-gradient-to-tr from-white to-gray-50 w-full max-w-[500px] mx-auto">
      <CardBody>
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h5" color="blue-gray">
            Product Performance
          </Typography>

          <Tabs value="today">
            <TabsHeader className="bg-blue-gray-50 rounded-lg">
              <Tab value="today">Today</Tab>
              <Tab value="weekly">Weekly</Tab>
              <Tab value="monthly">Monthly</Tab>
              <Tab value="yearly">Yearly</Tab>
            </TabsHeader>
          </Tabs>
        </div>

        <div className="flex flex-col gap-3">
          {foodRanking.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between bg-white rounded-xl shadow p-3 hover:bg-gray-50 transition">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-blue-gray-700">{index + 1}</div>
                <div>{item.icon}</div>
                <Typography variant="small" color="blue-gray" className="font-medium">
                  {item.name}
                </Typography>
              </div>

              <Typography variant="small" color="gray" className="font-medium">
                {item.sales} ventas
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
