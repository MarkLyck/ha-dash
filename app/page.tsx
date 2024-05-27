import { AreasCard } from '@/components/dashboard/areas'
import { Climate } from '@/components/device/climate'

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <AreasCard className="col-span-4" />
      <Climate />
    </div>
  )
}

export default Home
