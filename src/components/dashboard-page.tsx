import { useState } from "react"

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { StatCard } from "@/components/stat-card"
import { RecentSales } from "@/components/recent-sales"
import { OverviewChart } from "@/components/overview-chart"

export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-muted/40">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex flex-col flex-1 overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="grid gap-4 md:gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <select className="h-9 w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 12 months</option>
            </select>
          </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Revenue" value="$45,231.89" description="+20.1% from last month" trend="up" />
          <StatCard title="Subscriptions" value="2,350" description="+180.1% from last month" trend="up" />
          <StatCard title="Active Users" value="1,247" description="+19% from last month" trend="up" />
          <StatCard title="Bounce Rate" value="12.83%" description="-5.4% from last month" trend="down" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-4 lg:col-span-5">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-lg font-semibold leading-none tracking-tight">Overview</h3>
            <p className="text-sm text-muted-foreground">Monthly revenue overview</p>
          </div>
          <div className="p-6 pt-0">
            <OverviewChart />
          </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-2">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-lg font-semibold leading-none tracking-tight">Recent Sales</h3>
            <p className="text-sm text-muted-foreground">You made 265 sales this month</p>
          </div>
          <div className="p-6 pt-0">
            <RecentSales />
          </div>
          </div>
        </div>
        </div>
      </main>
      </div>
    </div>
  )
}

