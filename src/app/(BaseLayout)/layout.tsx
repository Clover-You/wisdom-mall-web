// import { Inter } from 'next/font/google'
import BaseLayout from '#/layout/BaseLayout'

// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout(props: { children: React.ReactNode }) {
  return <BaseLayout>{props.children}</BaseLayout>
}
