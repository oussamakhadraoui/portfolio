import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import { styles } from '@/utils/styes'


const StarWrapper = ({
  children,
  idName
}: {
  children: React.ReactNode
  idName: string
}) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {children}
      </motion.section>
    )
  }

export default StarWrapper
