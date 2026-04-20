export type Categories = '2D Art' | '3D Art' | 'Other' | 'Blender 3D' | 'Substance Painter' | 'Substance Designer'

export type Post = {
    title: string
    slug: string
    preview: string
    description: string
    date: string
    categories: Categories[]
    published: boolean
}