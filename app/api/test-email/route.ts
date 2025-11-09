// app/api/test-email/route.ts
import { sendPurchaseReceipt } from '@/emails'
import { IOrder } from '@/lib/db/models/order.model'
import { NextResponse } from 'next/server'

// Create a test type that matches what your email needs
type TestOrder = {
  _id: string
  user: { email: string; name: string }
  items: Array<{
    name: string
    price: number
    quantity: number
    clientId: string
    product: string
    slug: string
    category: string
    image: string
    countInStock: number
  }>
  totalPrice: number
  itemsPrice: number
  shippingPrice: number
  taxPrice: number
  shippingAddress: {
    fullName: string
    street: string
    city: string
    postalCode: string
    country: string
    province: string
    phone: string
  }
  expectedDeliveryDate: Date
  paymentMethod: string
  isPaid: boolean
  isDelivered: boolean
  createdAt: Date
  updatedAt: Date
}

export async function GET() {
  try {
    const testOrder: TestOrder = {
      _id: 'test123',
      user: { email: 'sabitalhasan404@gmail.com', name: 'Test User' },
      items: [{ 
        name: 'Test Product', 
        price: 99.99, 
        quantity: 1,
        clientId: 'test',
        product: 'test',
        slug: 'test-product',
        category: 'test',
        image: 'test.jpg',
        countInStock: 10
      }],
      totalPrice: 99.99,
      itemsPrice: 99.99,
      shippingPrice: 0,
      taxPrice: 0,
      shippingAddress: {
        fullName: 'Test User',
        street: '123 Test St',
        city: 'Test City',
        postalCode: '12345',
        country: 'Test Country',
        province: 'Test Province',
        phone: '123-456-7890'
      },
      expectedDeliveryDate: new Date(),
      paymentMethod: 'paypal',
      isPaid: true,
      isDelivered: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    await sendPurchaseReceipt({ order: testOrder as unknown as IOrder })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}