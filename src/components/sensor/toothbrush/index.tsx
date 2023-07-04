import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SensorCard } from '@/components/sensor/card'

export interface ToothBrushProps {
  brushing: boolean
}

export const ToothBrush = ({ brushing }: ToothBrushProps) => {
  return (
    <SensorCard
      icon={<FontAwesomeIcon icon={['fas', 'toothbrush']} />}
      name="Toothbrush"
    >
      <span className="first-letter:capitalize">
        {brushing ? 'brushing' : 'idle'}
      </span>
    </SensorCard>
  )
}
