import { Pagination, ConfigProvider } from 'antd'

import { useWordStore } from '../store/WordStore'

const CUSTOM_PURPLE = '#a445ed'
const CUSTOM_PURPLE_DISABLED = '#9f6cc6'

const CustomPagination = () => {
  const wordFounded = useWordStore((state) => state.wordFounded)
  const current = useWordStore((state) => state.currentPage)
  const handleCurrent = useWordStore((state) => state.handleCurrentPage)

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemActiveBg: 'transparent'
          }
        },
        token: {
          colorPrimary: CUSTOM_PURPLE,
          colorText: CUSTOM_PURPLE,
          colorTextDisabled: CUSTOM_PURPLE_DISABLED,
          colorBorder: CUSTOM_PURPLE
        }
      }}
    >
      <Pagination
        current={current}
        onChange={handleCurrent}
        total={wordFounded.length * 10}
        hideOnSinglePage
        responsive
        showSizeChanger={false}
      />
    </ConfigProvider>
  )
}

export default CustomPagination
