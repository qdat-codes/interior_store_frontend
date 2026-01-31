import SignInPage from '@/pages/sign_in_page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign_in/$')({
  component: SignInPage,
})
