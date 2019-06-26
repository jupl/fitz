import {createContext} from 'react'

/** Language types */
export type Language = 'en' // | 'es' | 'fr' | ...

/** Context information */
export interface Context {
  language: Language
}

/** Default language */
export const DEFAULT_LANGUAGE: Language = 'en'

/** Context implementation */
export const Context = createContext<Context>({
  language: DEFAULT_LANGUAGE,
})

// tslint:disable-next-line:no-object-mutation
Object.assign(Context, {displayName: 'Common'})
