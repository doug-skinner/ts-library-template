import logger from '~/utils/logger'

export const hello = (name: string) => {
    logger.info(`Hello ${name}!`)
    return `Hello ${name}!`
}

hello('World')
