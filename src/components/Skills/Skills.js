import { useState } from 'react'
import uniqid from 'uniqid'
import { skills, categoryLabels } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categoryKeys = Object.keys(skills)
  if (!categoryKeys.length) return null

  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return Object.values(skills).flat()
    }
    return skills[activeCategory]
  }

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <div className='skills__header-nav'>
        <button
          type='button' // Explicit type added here
          onClick={() => setActiveCategory('all')}
          className={`link link--nav ${activeCategory === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        {categoryKeys.map((key) => (
          <button
            key={uniqid()}
            type='button' // Explicit type added here
            onClick={() => setActiveCategory(key)}
            className={`link link--nav ${activeCategory === key ? 'active' : ''}`}
          >
            {categoryLabels[key]}
          </button>
        ))}
      </div>

      <ul className='skills__list'>
        {getSkillsToDisplay().map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills