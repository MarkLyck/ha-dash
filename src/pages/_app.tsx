import { type AppType } from 'next/app'
import { api } from '@/utils/api'

import '@/styles/globals.css'
import '@/lib/icons'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default api.withTRPC(MyApp)
