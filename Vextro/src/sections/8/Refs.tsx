import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const RefsSection: React.FC = () => {
  return (
    <>
      <Title
        bold
        variant="large"
        align="left"
        className="text-white font-ss02 font-ss01 font-ligatures font-ss02"
      >
        REFERÊNCIAS
      </Title>

      <div className="space-y-1">
        <ImageGrid
          variant={2}
          bgColors={['#D9D9D9', '#D9D9D9']}
          images={['test.svg', 'test.svg']}
        />
        <ImageGrid
          variant={2}
          bgColors={['#D9D9D9', '#D9D9D9']}
          images={['test.svg', 'test.svg']}
        />
      </div>
    </>
  )
}

export default RefsSection
