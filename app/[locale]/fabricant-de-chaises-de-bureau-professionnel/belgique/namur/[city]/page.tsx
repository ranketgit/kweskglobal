import BelgiqueCityPageContent, {
  makeGenerateStaticParams,
  makeGenerateMetadata,
  type CityPageProps,
} from '../../_shared-city-page'

export const dynamic = 'force-static'
export const dynamicParams = false

const PROVINCE_SLUG = 'namur'

export const generateStaticParams = makeGenerateStaticParams(PROVINCE_SLUG)
export const generateMetadata = makeGenerateMetadata(PROVINCE_SLUG)

export default function NamurCityPage({ params }: CityPageProps) {
  return <BelgiqueCityPageContent params={params} provinceSlug={PROVINCE_SLUG} />
}
