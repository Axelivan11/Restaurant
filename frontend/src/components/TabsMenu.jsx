import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export const TabsMenu = () => {

  const data = [
    {
      label: "Desayunos",
      value: "desayunos",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Comidas",
      value: "comidas",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Cenas",
      value: "cenas",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Postres",
      value: "postres",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Retail",
      value: "retail",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  
  return (
    <Tabs value="html" className="font-bold">
      <TabsHeader className="text-[var(--color-red-950)]">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-[var(--color-red-950)]">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      {/* TabsBody se usara para poner los cards */}
      <TabsBody className="text-[var(--color-red-950)]" animate={{initial: { x: 250 }, mount: { y: 0 }, unmount: { x: 250 },
        }}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="text-[var(--color-red-950)]">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
