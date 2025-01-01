import { motion } from 'framer-motion'

export default function Mission() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light mb-8 tracking-wide text-foreground">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            We are dedicated to redefining fashion through sustainability and elegance. Our mission is to create timeless pieces that not only elevate your style but also contribute to a healthier planet. We believe that true luxury lies in the harmony between exquisite design and environmental responsibility.
          </p>
          <motion.div 
            className="flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {['Sustainable', 'Ethical', 'Innovative'].map((value, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <p className="font-semibold text-foreground">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
