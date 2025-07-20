import React from "react";
import { Card, CardBody, Typography, IconButton, Button } from "@material-tailwind/react";
import { PencilSquareIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Category() {
  const categories = [
    { name: "Beverages", description: "All types of drinks" },
    { name: "Comida", description: "Various types of food" },
    { name: "Postres", description: "Delicious desserts" },
  ];

  return (
    <Card className="shadow-xl border mt-6 rounded-3xl bg-gradient-to-tr from-white to-gray-50">
      <CardBody className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-bold">
            Category
          </Typography>
          <Button size="sm" className="flex items-center gap-2" color="green">
            <PlusIcon className="h-6 w-6" />
            Add
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto text-blue-gray-700">
            <thead>
              <tr className="">
                <th className="py-3 px-5 text-left">Name</th>
                <th className="py-3 px-5 text-left">Description</th>
                <th className="py-3 px-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-5">{category.name}</td>
                  <td className="py-3 px-5">{category.description}</td>
                  <td className="py-3 px-5 text-center">
                    <div className="flex justify-center gap-2">
                      <IconButton color="blue" size="sm" variant="outlined">
                        <PencilSquareIcon className="h-5 w-5" />
                      </IconButton>
                      <IconButton color="red" size="sm" variant="outlined">
                        <TrashIcon className="h-5 w-5" />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
