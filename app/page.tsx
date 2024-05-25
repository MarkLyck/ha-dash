import { AreasCard } from '@/components/dashboard/areas'
import { Climate } from '@/components/device/climate'

const Home = () => {
  return (
    <div className="p-4">
      <AreasCard />
      <div className="py-4">
        <Climate />
      </div>
    </div>
  )
}

export default Home
