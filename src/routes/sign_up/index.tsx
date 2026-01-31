import SignUpPage from '@/pages/sign_up_page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign_up/')({
  component: SignUpPage,
})

