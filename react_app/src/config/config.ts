import { IConfig } from "../interfaces/Config.intf"

const Config: IConfig = {
  API_HOST_PATH: process.env.REACT_APP_API_HOST || 'http://localhost:3000/',
  API_MOCK: process.env.REACT_APP_DEPLOY_MOCK === 'true'
}

export default Config