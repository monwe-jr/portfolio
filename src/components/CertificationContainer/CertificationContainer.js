import './CertificationContainer.css'

const CertificationContainer = ({ certification }) => (
  <div className='certification'>
    {certification.badge && (
      <img 
        src={process.env.PUBLIC_URL + certification.badge} 
        alt={`${certification.name} badge`} 
        className='certification__badge' 
      />
    )}

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
      <div className='certification__credential-box'>
        <span className='credential-label'>Credential ID:</span>
        <p className='certification__credential'>{certification.credentialId}</p>
      </div>
    )}

    {certification.link && (
      <a
        href={certification.link}
        target='_blank'
        rel='noopener noreferrer'
        className='certification__link'
      >
        Verify Credential
      </a>
    )}
  </div>
)

export default CertificationContainer