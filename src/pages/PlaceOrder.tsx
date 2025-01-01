import { CartTotal } from '@/components/CartTotal'
import OrderForm from '../components/OrderForm'

export function PlaceOrder() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light text-gray-900 mb-8 text-center">Place Your Order</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <OrderForm />
          <CartTotal />
        </div>
      </div>
    </main>
  )
}




