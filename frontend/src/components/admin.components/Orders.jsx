import React, { useState } from "react";
import { Card, CardBody, Typography, Button, IconButton, Input, Popover, PopoverHandler, Chip, PopoverContent } from "@material-tailwind/react";
import { CalendarDaysIcon, ArrowDownTrayIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function Orders() {
  const [selectedDate, setSelectedDate] = useState();
  const [search, setSearch] = useState("");

  const orders = [
    { orderId: "O001", customerName: "John Doe", orderDate: "2025-07-19", products: "agua y jabon", totalPrice: "$120.00", status: "Pending" },
    { orderId: "O002", customerName: "Jane Smith", orderDate: "2025-07-18", products: "agua y jabon", totalPrice: "$250.00", status: "Completed" },
    { orderId: "O003", customerName: "Sara Lee", orderDate: "2025-07-17", products: "agua y jabon", totalPrice: "$80.00", status: "Cancelled" },
  ];

  return (
    <Card className="shadow-xl border mt-6 rounded-3xl bg-gradient-to-tr from-white to-gray-50">
      <CardBody>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          {/* Título */}
          <div className="flex items-center gap-2">
            <Typography variant="h5" color="blue-gray" className="font-bold">
              Orders
            </Typography>
          </div>

          {/* Contenedor para el DatePicker y el input de búsqueda */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Input de Búsqueda */}
            <Input
              size="sm"
              label="Search id order"
              icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* Date Picker */}
            <Popover placement="bottom-start">
              <PopoverHandler>
                <IconButton size="sm" color="gray" variant="outlined" className="p-4">
                  <CalendarDaysIcon className="h-6 w-6 text-black" />
                </IconButton>
              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                />
              </PopoverContent>
            </Popover>


            <Button size="sm" className="flex items-center gap-2 px-4 py-2" color="green">
              <ArrowDownTrayIcon className="h-6 w-6 mb-0.5" />
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="">
                <th className="py-3 px-5 text-left">Order ID</th>
                <th className="py-3 px-5 text-left">Customer Name</th>
                <th className="py-3 px-5 text-left">Products</th>
                <th className="py-3 px-5 text-left">Order Date</th>
                <th className="py-3 px-5 text-left">Status</th>
                <th className="py-3 px-5 text-left">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-5">{order.orderId}</td>
                  <td className="py-3 px-5">{order.customerName}</td>
                  <td className="py-3 px-5">{order.products}</td>
                  <td className="py-3 px-5">{order.orderDate}</td>
                  <td className="py-3 px-5">
                    <Chip
                      size="sm"
                      color={
                        order.status === "Completed"
                          ? "green"
                          : order.status === "Pending"
                            ? "yellow"
                            : order.status === "Cancelled"
                              ? "red"
                              : "gray"
                      }
                      value={order.status}
                      className="w-fit"
                    />
                  </td>

                  <td className="py-3 px-5">{order.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
