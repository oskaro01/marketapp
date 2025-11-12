/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'

export default function SalesCategoryPieChart({ data }: { data: any[] }) {
  const { theme } = useTheme()

  // Simple color definitions
  const CHART_COLORS = {
    light: [
      'hsl(142.1 76.2% 36.3%)', // Primary green
      'hsl(142.1 76.2% 46.3%)', // Lighter green
      'hsl(142.1 76.2% 26.3%)', // Darker green
      'hsl(142.1 76.2% 56.3%)', // Even lighter green
      'hsl(142.1 76.2% 16.3%)', // Even darker green
    ],
    dark: [
      'hsl(142.1 70.6% 45.3%)', // Brighter green for dark
      'hsl(142.1 70.6% 55.3%)', // Lighter
      'hsl(142.1 70.6% 35.3%)', // Darker
      'hsl(142.1 70.6% 65.3%)', // Even lighter
      'hsl(142.1 70.6% 25.3%)', // Even darker
    ]
  }

  const currentTheme = theme === 'dark' ? 'dark' : 'light'
  const colors = CHART_COLORS[currentTheme]

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
        className='text-xs fill-foreground'
      >
        {`${data[index]._id} ${data[index].totalSales} sales`}
      </text>
    )
  }

  return (
    <ResponsiveContainer width='100%' height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey='totalSales'
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]} // Cycle through colors
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}