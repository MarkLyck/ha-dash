export const SensorCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-block rounded-lg border border-slate-200 px-2 py-1 text-[14px] text-slate-500 hover:border-slate-900 hover:text-slate-900 dark:border-slate-500 dark:text-slate-300 dark:hover:border-slate-100 dark:hover:text-slate-100 [&>svg]:mr-2">
      {children}
    </div>
  )
}
