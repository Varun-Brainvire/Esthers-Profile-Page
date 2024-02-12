import Shop from '@/components/Shop/Shop'
import StyleBoards from '@/components/StyleBoards/StyleBoards'
import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
    const router = useRouter()

  return (
    <div>{router.query.slug == "shop" ? <Shop /> : (router.query.slug === "styleboards" ? <StyleBoards /> :"")
    }</div>

  )
}

export default slug