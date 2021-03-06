import { EditPost } from '$/types/post'
import { BlancComponent, BlancElement } from '$/types/_element'
import { useState } from 'react'
import styled from 'styled-components'
import { Sidebar } from '~/components/elements/sidebar'
import { randomStr } from '~/utils/variable'
import { PostEditDisplay } from '../organisms/post-edit-display'
import { PostEditSide } from '../organisms/post-edit-side'

export const PostEdit = (props: { post: EditPost; height: string }) => {
  const [render, setRerender] = useState(false)
  const onAddElement = (component: BlancComponent) => {
    if (props.post.elements) {
      ;(props.post.elements as unknown as BlancElement[]).push({
        id: randomStr(),
        post: props.post,
        component: component,
        data: {}
      })
      setRerender(!render)
    }
  }

  return (
    <PostEditWrap height={props.height}>
      <Sidebar width={'100%'} height={'100%'} gap={'0em'} sideWidth={'34ch'} sidePosition={'right'}>
        <PostEditDisplay post={props.post} />
        <PostEditSide post={props.post} onAddElement={onAddElement} />
      </Sidebar>
    </PostEditWrap>
  )
}

const PostEditWrap = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  max-height: ${(props) => props.height};
  position: relative;
`
