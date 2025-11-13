'use client'
import { getMonthName } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductPrice from '@/components/shared/product/product-price'

type TableChartProps = {
  labelType: 'month' | 'product'
  data: {
    label: string
    image?: string
    value: number
    id?: string
  }[]
}

interface ProgressBarProps {
  value: number
  className?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const boundedValue = Math.min(100, Math.max(0, value))

  return (
    <div className='w-full h-2 bg-muted rounded-full overflow-hidden relative'>
      {/* Yellow bar starting from RIGHT */}
      <div
        className='bg-yellow-500 h-full rounded-full absolute right-0'
        style={{
          width: `${boundedValue}%`,
        }}
      />
    </div>
  )
}

export default function TableChart({
  labelType = 'month',
  data = [],
}: TableChartProps) {
  const max = Math.max(...data.map((item) => item.value))
  const dataWithPercentage = data.map((x) => ({
    ...x,
    label: labelType === 'month' ? getMonthName(x.label) : x.label,
    percentage: Math.round((x.value / max) * 100),
  }))
  
  return (
    <div className='space-y-4'>
      {dataWithPercentage.map(({ label, id, value, image, percentage }) => (
        <div
          key={label}
          className='flex items-center gap-4'
        >
          {/* Label with fixed width container */}
          <div className='flex items-center gap-2 flex-1 min-w-0'>
            {image ? (
              <Link 
                className='flex items-center gap-2 min-w-0' 
                href={`/admin/products/${id}`}
              >
                <Image
                  className='rounded border aspect-square object-cover w-8 h-8 flex-shrink-0'
                  src={image}
                  alt={label}
                  width={32}
                  height={32}
                />
                <span className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
                  {label}
                </span>
              </Link>
            ) : (
              <div className='flex items-center gap-2 min-w-0'>
                <div className='w-3 h-3 rounded-full flex-shrink-0 bg-primary' />
                <span className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
                  {label}
                </span>
              </div>
            )}
          </div>

          {/* Progress Bar & Amount - Combined container */}
          <div className='flex items-center gap-3 flex-1 min-w-0'>
            {/* Progress Bar that starts from right */}
            <div className='flex-1 min-w-0'>
              <ProgressBar value={percentage} />
            </div>
            
            {/* Amount - Fixed width to prevent shifting */}
            <div className='text-sm text-right font-medium whitespace-nowrap w-24'>
              <ProductPrice price={value} plain />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}