

import { motion } from 'framer-motion'
import { assets } from '@/assets/assets'

const teamMembers = [
  { name: 'Jane Doe', role: 'Founder & CEO', image: assets.p_img12 },
  { name: 'John Smith', role: 'Head of Design', image: assets.p_img2_1 },
  { name: 'Emily Brown', role: 'Sustainability Officer', image: assets.p_img1 },
]

// export default function Team() {
//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-4xl font-light mb-16 text-center tracking-wide"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           Meet Our Team
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {teamMembers.map((member, index) => (
//             <motion.div 
//               key={member.name}
//               className="bg-white rounded-lg overflow-hidden shadow-lg"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <motion.img 
//                 src={member.image} 
//                 alt={member.name} 
//                 className="w-full h-80 object-cover"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
//                 <p className="text-gray-600">{member.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

export default function Team() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-light mb-16 text-center tracking-wide dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-80 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}