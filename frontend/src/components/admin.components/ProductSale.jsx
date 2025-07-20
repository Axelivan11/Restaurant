import React from "react";
import { Card, CardBody, CardFooter, Typography, Tabs, TabsHeader, Tab, Button } from "@material-tailwind/react";

export default function ProductSale() {
  const products = [
    { name: "Burger", priceToMake: "$2.50", priceToSell: "$5.00", soldProducts: 100, totalSales: "$500.00", totalGanancias: "$500.00" },
    { name: "Pizza", priceToMake: "$4.00", priceToSell: "$8.00", soldProducts: 75, totalSales: "$600.00", totalGanancias: "$500.00" },
    { name: "Taco", priceToMake: "$1.50", priceToSell: "$3.00", soldProducts: 200, totalSales: "$600.00", totalGanancias: "$500.00" },
    { name: "Burger", priceToMake: "$2.50", priceToSell: "$5.00", soldProducts: 100, totalSales: "$500.00", totalGanancias: "$500.00" },
    { name: "Pizza", priceToMake: "$4.00", priceToSell: "$8.00", soldProducts: 75, totalSales: "$600.00", totalGanancias: "$500.00" },
    { name: "Taco", priceToMake: "$1.50", priceToSell: "$3.00", soldProducts: 200, totalSales: "$600.00", totalGanancias: "$500.00" },
    { name: "Taco", priceToMake: "$1.50", priceToSell: "$3.00", soldProducts: 200, totalSales: "$600.00", totalGanancias: "$500.00" },
    { name: "Taco", priceToMake: "$1.50", priceToSell: "$3.00", soldProducts: 200, totalSales: "$600.00", totalGanancias: "$500.00" },
  ];

  return (
    <Card className="shadow-xl border mt-6 rounded-3xl bg-gradient-to-tr from-white to-gray-50">
      <CardBody>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Typography variant="h5" color="blue-gray" className="font-bold">
            Product Sale List
          </Typography>
          <Tabs value="today" className="w-full sm:w-72">
            <TabsHeader className="bg-blue-gray-50 rounded-lg">
              <Tab value="today">Today</Tab>
              <Tab value="weekly">Weekly</Tab>
              <Tab value="monthly">Monthly</Tab>
              <Tab value="yearly">Yearly</Tab>
            </TabsHeader>
          </Tabs>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="py-3 px-5 text-left">Product name</th>
                <th className="py-3 px-5 text-left">Price to make</th>
                <th className="py-3 px-5 text-left">Price to sell</th>
                <th className="py-3 px-5 text-left">Sold products</th>
                <th className="py-3 px-5 text-left">Total sales</th>
                <th className="py-3 px-5 text-left">Total ganancias</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-5">{product.name}</td>
                  <td className="py-3 px-5">{product.priceToMake}</td>
                  <td className="py-3 px-5">{product.priceToSell}</td>
                  <td className="py-3 px-5">{product.soldProducts}</td>
                  <td className="py-3 px-5">{product.totalSales}</td>
                  <td className="py-3 px-5">{product.totalGanancias}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>

      <CardFooter className="flex items-center justify-between">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Showing 1 to {products.length} of {products.length} results
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
