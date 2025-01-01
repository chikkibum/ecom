// @ts-nocheck


import { useContext } from 'react'
import { motion } from 'framer-motion'
import { ShopContext } from '../context/ShopContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const Orders = () => {
  const { placedOrders, currency, products } = useContext(ShopContext)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-light text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Orders
      </motion.h1>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {placedOrders.length === 0 ? (
          <motion.p
            className="text-center text-lg text-gray-500"
            variants={itemVariants}
          >
            No orders placed yet.
          </motion.p>
        ) : (
          placedOrders.map((order) => (
            <motion.div key={order.id} variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Order ID: {order.id}</h2>
                      <p className="text-sm text-gray-500 mb-4">Date: {order.date}</p>
                      <div className="space-y-4">
                        {Object.keys(order.items).map((productId) => {
                          const product = order.items[productId]
                          const productInfo = products.find((p) => p._id === productId)

                          if (!productInfo) {
                            return (
                              <div key={productId} className="text-sm text-red-500">
                                Product not found
                              </div>
                            )
                          }

                          return (
                            <div key={productId} className="flex items-center gap-4">
                              <img
                                className="w-20 h-20 object-cover rounded-md"
                                src={productInfo.image[0]}
                                alt={productInfo.name}
                              />
                              <div>
                                <p className="font-medium">{productInfo.name}</p>
                                <p className="text-sm text-gray-500">
                                  Size: {Object.keys(product)[0]} | Quantity: {product[Object.keys(product)[0]]}
                                </p>
                                <p className="text-lg font-semibold mt-1">
                                  {currency}
                                  {productInfo.price}
                                </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                      <Badge variant="secondary" className="px-3 py-1">
                        Order Placed
                      </Badge>
                      <Button variant="outline">Track Order</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  )
}
