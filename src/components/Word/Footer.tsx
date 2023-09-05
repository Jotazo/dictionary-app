import ExternalLinkIcon from '../icons/ExternalLinkIcon'

const SOURCE_TEXT = 'Source'

const Footer = ({ sourceUrl }: { sourceUrl: string }) => {
  return (
    <footer className="flex flex-col sm:flex-row gap-2 md:gap-6 sm:items-center mb-8">
      <span className="body-s text-primaryGrey underline">{SOURCE_TEXT}</span>
      <div className="flex gap-2 items-center">
        <a
          className="body-s text-primaryLightDark dark:text-custWhite"
          href={sourceUrl}
        >
          {sourceUrl}
        </a>
        <ExternalLinkIcon />
      </div>
    </footer>
  )
}

export default Footer
