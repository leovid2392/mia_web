import Layout from '../../components/layout'
import useTranslation from 'next-translate/useTranslation'

// <<<<<<<<<components<<<<<<<<<<<<<<<<<<<
import Hero from '../../components/Hero'
import TitlePage from '../../components/TitlePage'
import Paragraph from '../../components/Paragraph'
import ArticlePortrait from '../../components/ArticlePortrait'
import ArticleFourImg from '../../components/ArticleFourImg'
import ArticleSquare from '../../components/ArticleSquare'
import ArticleSquareWhite from '../../components/ArticleSquareWhite'
import Layout2x2 from '../../components/Layout2x2'
import TitleSection from '../../components/TitleSection'
import Banner from '../../components/Banner'
import Layout1x1 from '../../components/Layout1x1'
import LinkBorder from '../../components/LinkBorder'
import ArticleThreeImg from '../../components/ArticleThreeImg'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import slide1 from '../../public/images/blog/cele1_small750x500.jpg'
import slide2 from '../../public/images/blog/mia-5750_small500x750.jpg'
import slide3 from '../../public/images/blog/cele3_small750x500.jpg'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default function Blog() {
  let { t } = useTranslation()
  return (
    <Layout title={t('blog:metaTitle')} description={t('blog:metaDescription')}>
      <Hero
        sliderData={[
          {
            id: 1,
            image: slide1,
          },
          {
            id: 2,
            image: slide2,
          },
          {
            id: 3,
            image: slide1,
          },
        ]}
      />
      <TitlePage text='blog' />
      <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
      <ArticlePortrait
        image={slide1}
        alt='image description'
        title='pablo fierro'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='ver post'
        linkHref='/blog/post/pabloFierro'
      />
      <ArticlePortrait
        image={slide3}
        alt='image description'
        title='oliver koletzky'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='ver post'
        linkHref='/blog/post/pabloFierro'
      />
    </Layout>
  )
}
