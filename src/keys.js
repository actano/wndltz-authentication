import config from '@rplan/config'

export const JWT_PRIVATE_KEY = config.get('authentication:private-key')

export const JWT_PUBLIC_KEY = config.get('authentication:public-key')
