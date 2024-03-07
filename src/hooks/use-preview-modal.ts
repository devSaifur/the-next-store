import { create } from 'zustand'
import { TProduct } from '../../types'

interface PreviewModalStore {
  isOpen: boolean
  data?: TProduct
  onOpen: (data: TProduct) => void
  onClose: () => void
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: TProduct) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
