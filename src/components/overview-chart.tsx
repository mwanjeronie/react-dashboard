import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 1900 },
  { name: "Mar", total: 3000 },
  { name: "Apr", total: 2780 },
  { name: "May", total: 4890 },
  { name: "Jun", total: 3390 },
  { name: "Jul", total: 4490 },
  { name: "Aug", total: 5000 },
  { name: "Sep", total: 4300 },
  { name: "Oct", total: 4500 },
  { name: "Nov", total: 3800 },
  { name: "Dec", total: 4200 },
]

export function OverviewChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} fontSize={12} tickMargin={8} tickFormatter={(value) => `$${value}`} />
        <Tooltip
          cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="text-sm font-medium">{payload[0].payload.name}</div>
                  <div className="text-sm font-bold">${payload[0].value}</div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  )
}

