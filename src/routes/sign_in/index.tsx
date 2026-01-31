import { createFileRoute } from '@tanstack/react-router'
import SignInPage from '@/pages/sign_in_page'

export const Route = createFileRoute('/sign_in/')({
  component: SignInPage,
})

