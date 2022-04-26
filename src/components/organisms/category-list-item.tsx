import { Category } from '$/node_modules/@prisma/client'
import { Cluster } from '../layout/cluster'
import { Stack } from '../layout/stack'
import { _LargeH } from '../atoms/text/_text'
import { LabelTextList } from '../atoms/text/label'
import { moduler } from '~/utils/styles'
import { AnimateHoverBorderBox } from '../animation/animate-hover-border-box'
import { useRecoilValue } from 'recoil'
import { themeColorState } from '~/states/atoms'
import { Link } from '../atoms/link/Link'
import { Box } from '../atoms/box/box'

export const CategoryListItem = (props: { category: Category }) => {
  const color = useRecoilValue(themeColorState)
  return (
    <Link
      width={'100%'}
      href={`/content/${props.category.contentId}/category/${props.category.id}`}
    >
      <Box width={'100%'}>
        <AnimateHoverBorderBox
          padding={`${moduler(3)} ${moduler(1)} ${moduler(3)} ${moduler(1)}`}
          unhoverWidth={'0em'}
          hoverWidth={'0.5em'}
          color={color.text}
        >
          <Cluster justifyContent="space-between" alignItem="center">
            <Stack margin={moduler(-3)}>
              <_LargeH weight={'700'} size={moduler(-1)} color={color.text}>
                {props.category.name}
              </_LargeH>
              <LabelTextList
                list={[{ label: '投稿数', value: '10' }]}
                color={color.text}
              />
            </Stack>
          </Cluster>
        </AnimateHoverBorderBox>
      </Box>
    </Link>
  )
}