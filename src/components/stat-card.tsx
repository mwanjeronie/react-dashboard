import { ArrowDown, ArrowUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  description: string
  trend: "up" | "down"
}

export function StatCard({ title, value, description, trend }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn("rounded-full p-1", trend === "up" ? "bg-emerald-100" : "bg-rose-100")}>
          {trend === "up" ? (
            <ArrowUp className="h-4 w-4 text-emerald-600" />
          ) : (
            <ArrowDown className="h-4 w-4 text-rose-600" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={cn("text-xs", trend === "up" ? "text-emerald-600" : "text-rose-600")}>{description}</p>
      </CardContent>
    </Card>
  )
}

