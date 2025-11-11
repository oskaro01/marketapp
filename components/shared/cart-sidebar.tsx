import useCartStore from '@/hooks/use-cart-store'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { Separator } from '../ui/separator'
import { ScrollArea } from '../ui/scroll-area'
import Image from 'next/image'
import { TrashIcon } from 'lucide-react'
import ProductPrice from './product/product-price'
import { FREE_SHIPPING_MIN_PRICE } from '@/lib/constants'

export default function CartSidebar() {
  const {
    cart: { items, itemsPrice },
    updateItem,
    removeItem,
  } = useCartStore()

  return (
    <div className='w-36 h-screen sticky top-0'> {/* Narrow width like your original */}
      <div className="border-l bg-background h-full flex flex-col">
        {/* Header - fixed height */}
        <div className="p-2 border-b flex-shrink-0"> {/* Reduced padding */}
          <div className="text-center space-y-2">
            <div className="text-sm">Subtotal</div> {/* Smaller text */}
            <div className="font-bold text-sm"> {/* Smaller text */}
              <ProductPrice price={itemsPrice} plain />
            </div>
            {itemsPrice > FREE_SHIPPING_MIN_PRICE && (
              <div className="text-center text-xs">
                FREE Shipping
              </div>
            )}
            <Link
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }), // Smaller button
                'rounded-full hover:no-underline w-full text-xs'
              )}
              href='/cart'
            >
              Go to Cart
            </Link>
            <Separator className="mt-2" /> {/* Reduced margin */}
          </div>
        </div>

        {/* Scrollable area */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full w-full">
            <div className="p-2 space-y-3"> {/* Reduced padding and spacing */}
              {items.map((item) => (
                <div key={item.clientId} className="space-y-2"> {/* Reduced spacing */}
                  <div className="my-2"> {/* Reduced margin */}
                    <Link href={`/product/${item.slug}`}>
                      <div className="relative h-20"> {/* Smaller image */}
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes='15vw'
                          className='object-contain'
                        />
                      </div>
                    </Link>
                    <div className="text-xs text-center font-bold"> {/* Smaller text */}
                      <ProductPrice price={item.price} plain />
                    </div>
                    <div className="flex gap-1 mt-1 justify-center items-center"> {/* Reduced gap and margin */}
                      {/* Native select - compact version */}
                      <select 
                        value={item.quantity}
                        onChange={(e) => {
                          updateItem(item, Number(e.target.value))
                        }}
                        className="text-xs w-10 h-6 border border-input bg-background rounded px-1 focus:outline-none focus:ring-1 focus:ring-ring appearance-none cursor-pointer bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0ibTQgNCAyIDIgMi0yIiBzdHJva2U9IiM2NzM3ODciIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] bg-no-repeat bg-[center_right_0.1rem] bg-[length:8px_8px] pr-4"
                      >
                        {Array.from({ length: item.countInStock }, (_, i) => (
                          <option value={i + 1} key={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      
                      <Button
                        variant={'outline'}
                        size={'sm'}
                        className="h-6 w-6" 
                        onClick={() => {
                          removeItem(item)
                        }}
                      >
                        <TrashIcon className="w-3 h-3" /> {/* Smaller icon */}
                      </Button>
                    </div>
                  </div>
                  <Separator />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}