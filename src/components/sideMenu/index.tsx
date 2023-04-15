import { cva } from 'class-variance-authority'

const containerStyle = cva('bg-slate-100 dark:bg-slate-1200 p-2')

export const SideMenu = () => {
  return <div className={containerStyle()}>SideMenu</div>
}
