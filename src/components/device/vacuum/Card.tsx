import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { TbPower } from 'react-icons/tb'

export type VacuumCardProps = {
  className?: string
  startVacuum: () => void
}

export const VacuumCard = ({ className, startVacuum }: VacuumCardProps) => {
  return (
    <Card className={cn('h-[280px]', className)}>
      <CardHeader className="p-4">
        <CardTitle className="z-40 flex w-fit items-center gap-2">
          <span>Robot vacuum</span>
        </CardTitle>
        <p className="text-sm text-text-sub first-letter:capitalize">Docked</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between">
        <Image
          src="/images/vacuum/roborock_s8.webp"
          alt="vacuum"
          height={150}
          width={150}
          className="opacity-50"
        />
        <Button variant="outline" onClick={startVacuum}>
          <TbPower className="mr-2" />
          Start clearning
        </Button>
      </CardContent>
    </Card>
  )
}
