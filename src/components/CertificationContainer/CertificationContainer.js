import './CertificationContainer.css'

const CertificationContainer = ({ certification }) => (
  <div className='certification'>
    <div className='certification__header'>
      <h3 className='certification__name'>{certification.name}</h3>
      {certification.issuer && (
        <p className='certification__issuer'>{certification.issuer}</p>
      )}
    </div>

    {certification.date && (
      <p className='certification__date'>{certification.date}</p>
    )}

    {certification.credentialId && (
      <p className='certification__credential'>
        Credential ID: {certification.credentialId}
      </p>
    )}

    {certification.link && (
      <a
        href={certification.link}
        target='_blank'
        rel='noopener noreferrer'
        className='link link--icon certification__link'
        aria-label='certification link'
      >
        View Credential
      </a>
    )}
  </div>
)

export default CertificationContainer