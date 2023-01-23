import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import useBackend from 'site/hooks/useBackend.js'
import Link from 'next/link'
import { Choice } from '../shared.js'

export const namespaces = ['units']

const welcomeSteps = {
  1: {
    href: '/docs/guide/',
    steps: 0,
  },
  2: {
    href: '/docs/guide/',
    steps: 3,
  },
  3: {
    href: '/welcome/compare',
    steps: 5,
  },
  4: {
    href: '/welcome/compare',
    steps: 7,
  },
  5: {
    href: '/',
    steps: 0,
  },
}

const UnitsSettings = ({ app, title = false, welcome = false }) => {
  const backend = useBackend(app)
  const { t } = useTranslation(namespaces)
  const [selection, setSelection] = useState(app.account?.imperial === true ? 'imperial' : 'metric')

  const update = async (val) => {
    if (val !== selection) {
      const result = await backend.updateAccount({ imperial: val === 'imperial' ? true : false })
      if (result) setSelection(val)
    }
  }

  return (
    <>
      {title ? <h1 className="text-4xl">{t('title')}</h1> : null}
      {['metric', 'imperial'].map((val) => (
        <Choice val={val} t={t} update={update} current={selection} bool>
          <span className="block text-lg leading-5">
            {selection === 1 && val === 2 ? t('showMore') : t(`${val}`)}
          </span>
          <span className="block text-xs font-light normal-case pt-1">{t(`${val}d`)}</span>
        </Choice>
      ))}
      {welcome ? (
        <>
          <Link
            href={welcomeSteps[app.account.control].href}
            className="btn btn-primary w-full mt-12"
          >
            {t('continue')}
          </Link>
          {welcomeSteps[app.account.control].steps ? (
            <>
              <progress
                className="progress progress-primary w-full mt-12"
                value={300 / welcomeSteps[app.account.control].steps}
                max="100"
              ></progress>
              <span className="pt-4 text-sm font-bold opacity-50">
                3 / {welcomeSteps[app.account.control].steps}
              </span>
            </>
          ) : null}
        </>
      ) : null}
    </>
  )
}

export default UnitsSettings
