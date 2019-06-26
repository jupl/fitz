import {globalHistory} from '@reach/router'
import {Link as GatsbyLink} from 'gatsby'
import React, {ReactNode, useContext} from 'react'
import * as Common from '~/common/context'

interface LinkProps {
  className?: string
  children: ReactNode
  to: string
}

/**
 * i18n-focused link
 * @return React component
 */
export const Link = ({to, ...props}: LinkProps) => {
  const {language} = useContext(Common.Context)
  const newTo = language !== Common.DEFAULT_LANGUAGE
    ? `/${language}/${to}`
    : to
  return <GatsbyLink {...props} to={newTo} />
}

interface ChangeLanguageProps {
  autoHide?: boolean
  className?: string
  children: ReactNode
  language: Common.Language
}

/**
 * i18n-focused link to change language on current page
 * @return React component
 */
export const ChangeLanguageLink = ({
  language,
  autoHide = false,
  ...props
}: ChangeLanguageProps) => {
  const {language: current} = useContext(Common.Context)
  // TODO Use location context instead once supported
  const {location: {pathname}} = globalHistory
  if(autoHide && language === current) {
    return <></>
  }
  const oldPrefix = current === Common.DEFAULT_LANGUAGE
    ? /^\//
    : new RegExp(`^/${current}/`)
  const newPrefix = language === Common.DEFAULT_LANGUAGE
    ? '/'
    : `/${language}/`
  return <GatsbyLink {...props} to={pathname.replace(oldPrefix, newPrefix)} />
}
