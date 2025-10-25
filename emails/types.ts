// Local type definitions for email development
export interface IOrder {
  _id: string
  user: {
    email: string
    name?: string
  }
  items: Array<{
    product: string
    clientId: string
    name: string
    slug: string
    image: string
    category: string
    price: number
    countInStock: number
    quantity: number
    size?: string
    color?: string
  }>
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
  paymentResult?: { id: string; status: string; email_address: string }
  itemsPrice: number
  shippingPrice: number
  taxPrice: number
  totalPrice: number
  isPaid: boolean
  paidAt?: Date
  isDelivered: boolean
  deliveredAt?: Date
  createdAt: Date
  updatedAt: Date
}