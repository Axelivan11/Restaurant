import React, { useState, useMemo } from "react";
import {
  Card,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";

// Valores de escala del eje Y
const Y_AXIS_VALUES = [400, 300, 200, 100, 0];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("30days");

  // Genera datos solo una vez por render o cuando cambia el rango
  const chartData = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      day: i + 1,
      visitors: Math.floor(Math.random() * 100) + 300 - (i % 3 === 0 ? 50 : 0),
    }));
  }, [timeRange]);

  const maxValue = Math.max(...chartData.map(item => item.visitors), 400);

  return (
    <Card className="p-4 shadow-md border border-gray-100 mt-6">
      <CardBody>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <Typography variant="h5" color="blue-gray" className="font-bold">
            Visitor analytics of last 30 days
          </Typography>

          <Tabs value="today">
            <TabsHeader>
              <Tab value="today">Today</Tab>
              <Tab value="weekly">Weekly</Tab>
              <Tab value="monthly">Monthly</Tab>
              <Tab value="yearly">Yearly</Tab>
            </TabsHeader>
          </Tabs>
        </div>

        {/* Contenedor del gráfico */}
        <div className="relative">
          {/* Eje Y */}
          <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between">
            {Y_AXIS_VALUES.map(value => (
              <Typography
                key={value}
                variant="small"
                color="gray"
                className="text-xs"
              >
                {value}
              </Typography>
            ))}
          </div>

          {/* Gráfico de barras */}
          <div className="ml-10">
            <div className="h-48 flex items-end space-x-1">
              {chartData.map(({ day, visitors }) => (
                <div key={day} className="flex flex-col items-center flex-1">
                  <div
                    className="w-full bg-blue-500 rounded-t-md hover:bg-blue-600 transition-colors"
                    style={{
                      height: `${(visitors / maxValue) * 100}%`,
                      maxHeight: "100%",
                    }}
                  />
                  <Typography variant="small" color="gray" className="text-xs mt-1">
                    {day}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Línea de referencia */}
            <div className="border-t border-gray-200 mt-2"></div>
          </div>
        </div>

        {/* Leyenda */}
        <div className="flex justify-center mt-4">
          <Typography variant="small" color="gray" className="text-xs">
            Days
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
