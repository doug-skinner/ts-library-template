import logger from 'logophile'
import { config } from '~/config'

logger.setLogLevel(config.logLevel)

export default logger
