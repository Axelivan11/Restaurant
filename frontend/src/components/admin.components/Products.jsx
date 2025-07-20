import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
  Chip,
  Select,
  Option,
  Input
} from "@material-tailwind/react";
import { PencilSquareIcon, TrashIcon, PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Products() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: "P001",
      name: "Product A",
      description: "High quality item",
      price: "$25.00",
      status: "Available",
      category: "Bebidas",
      imageUrl: "https://www.image.com"
    },
    {
      id: "P002",
      name: "Product B",
      description: "Limited edition",
      price: "$40.00",
      status: "Not available",
      category: "Comida",
      imageUrl: "https://www.image.com"
    },
    {
      id: "P003",
      name: "Product C",
      description: "Best seller",
      price: "$15.00",
      status: "Available",
      category: "Postres",
      imageUrl: "https://www.image.com"
    },
    {
      id: "P003",
      name: "Product C",
      description: "Best seller",
      price: "$15.00",
      status: "Available",
      category: "Postres",
      imageUrl: "https://www.image.com"
    },
    {
      id: "P003",
      name: "Product C",
      description: "Best seller",
      price: "$15.00",
      status: "Available",
      category: "Postres",
      imageUrl: "https://www.image.com"
    },
    
  ];

  return (
    <Card className="shadow-xl border mt-6 rounded-3xl bg-gradient-to-tr from-white to-gray-50">
      <CardBody>
        <div className="flex items-center justify-between mb-6 gap-4">
          <Typography variant="h5" color="blue-gray">
            Products
          </Typography>
         <Input
            size="sm"
            label="Search by ID"
            icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button size="sm" className="flex items-center gap-2" color="green">
            <PlusIcon className="h-6 w-6" />
            Add
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Product Id", "Name", "Description", "Image Url", "Status", "Price", "Category", "Actions"].map((header) => (
                  <th key={header} className="py-3 px-5 text-left">
                    <Typography variant="small" className="font-normal opacity-70">
                      {header}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-5">{product.id}</td>
                  <td className="py-3 px-5">{product.name}</td>
                  <td className="py-3 px-5">{product.description}</td>
                  <td className="py-3 px-5">{product.imageUrl}</td>
                  <td className="py-3 px-5">
                    <Chip
                      size="sm"
                      color={product.status === "Available" ? "green" : "red"}
                      value={product.status}
                      className="w-fit"
                    />
                  </td>
                  <td className="py-3 px-5">{product.price}</td>
                  <td className="py-3 px-5">
                    <Select label="Category" value={product.category}>
                      <Option value="Bebidas">Bebidas</Option>
                      <Option value="Comida">Comida</Option>
                      <Option value="Postres">Postres</Option>
                      <Option value="Entradas">Entradas</Option>
                    </Select>
                  </td>
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
