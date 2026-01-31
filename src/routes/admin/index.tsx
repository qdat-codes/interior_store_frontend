import AdminPage from '@/pages/admin_page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/')({
  component: AdminPage,
})
