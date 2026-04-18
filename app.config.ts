export default defineAppConfig({
  ui: {
    primary: 'lime',
    gray: 'neutral',
    input: {
      defaultVariants: {
        size: 'md',
      },
      slots: {
        base: 'bg-[#111111] text-[#F0EBE1] font-inter ring-1 ring-[#242424] focus:ring-2 focus:ring-[#C8F542] rounded-md placeholder:text-[#5C5248]',
      }
    },
    textarea: {
      defaultVariants: {
        size: 'md',
      },
      slots: {
        base: 'bg-[#111111] text-[#F0EBE1] font-inter ring-1 ring-[#242424] focus:ring-2 focus:ring-[#C8F542] rounded-md placeholder:text-[#5C5248]',
      }
    },
    button: {
      defaultVariants: {
        size: 'md',
      },
      slots: {
        base: 'font-inter rounded-md',
      }
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
  }
})
