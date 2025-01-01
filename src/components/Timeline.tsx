import { motion } from 'framer-motion'

const timelineEvents = [
  { year: '2010', event: 'Company founded with a vision for sustainable fashion' },
  { year: '2015', event: 'Launched our first eco-friendly clothing line' },
  { year: '2018', event: 'Opened our flagship store in New York City' },
  { year: '2020', event: 'Achieved 100% carbon neutrality in our operations' },
  { year: '2023', event: 'Expanded to international markets across Europe and Asia' },
]

export default function Timeline() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-light mb-16 text-center tracking-wide text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.year}
              className="mb-12 flex items-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-24 text-right pr-8">
                <span className="font-light text-3xl text-muted-foreground">{event.year}</span>
              </div>
              <motion.div 
                className="w-4 h-4 bg-secondary rounded-full border-4 border-background"
                whileInView={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <div className="flex-grow pl-8">
                <p className="text-muted-foreground">{event.event}</p>
              </div>
            </motion.div>
          ))}
          <div className="absolute left-[7.5rem] top-2 bottom-2 w-px bg-border"></div>
        </div>
      </div>
    </section>
  )
}
