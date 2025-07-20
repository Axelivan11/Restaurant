import {
  Card,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const stats = [
  {
    title: "Unique Visitors",
    value: "24.7K",
    change: "+20%",
    comparison: "Vs last month",
  },
  {
    title: "Page Views",
    value: "78.1K",
    change: "+15%",
    comparison: "Vs last month",
  },
  {
    title: "New Signups",
    value: "1.2K",
    change: "+8%",
    comparison: "Vs last month",
  },
  {
    title: "New Signups",
    value: "1.2K",
    change: "+8%",
    comparison: "Vs last month",
  },
];

export default function Overview() {
  return (
    <Card className="p-6 shadow-2xl border mt-6 rounded-3xl bg-gradient-to-tr from-blue-50 to-purple-50">
      <CardBody>
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h6" color="blue-gray">
            Overview
          </Typography>
          <Tabs value="today">
            <TabsHeader>
              <Tab value="today" className="text-sm text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                Today
              </Tab>
              <Tab value="weekly" className="text-sm text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                Weekly
              </Tab>
              <Tab value="monthly" className="text-sm text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                Monthly
              </Tab>
              <Tab value="yearly" className="text-sm text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                Yearly
              </Tab>
            </TabsHeader>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <Card
              key={item.title}
              className="shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl bg-gradient-to-tr from-white to-gray-200 transform hover:scale-105"
            >
              <CardBody>
                <Typography color="gray" className="text-sm mb-3">
                  {item.title}
                </Typography>
                <div className="flex items-center justify-between">
                  <div>
                    <Typography variant="h5" className="font-semibold text-gray-900">
                      {item.value}
                    </Typography>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-green-500 font-semibold">
                        <ArrowUpIcon className="h-4 w-4 inline-block mr-1" />
                        {item.change}
                      </span>
                      <Typography className="text-xs text-gray-400">
                        {item.comparison}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full">
                    <ArrowUpIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
