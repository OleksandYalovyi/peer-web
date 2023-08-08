export const envUrlsPeerClub = {
  dev: 'https://dev-peerclub.peerclub.com',
  stage: 'https://stage-peerclub.peerclub.com',
  prod: 'https://peerclub.com',
}

export const envUrls = {
  dev: 'https://dev.peer.inc',
  stage: 'https://stage.peer.inc',
  prod: 'https://peer.inc',
}

export const isDev = process.env.NODE_ENV == 'development'

export const isEnvDev =
  process.env.REACT_APP_STAGE === 'development' || window.location.origin === envUrls.dev

export const isEnvStage = window.location.origin === envUrls.stage

export const isEnvProd =
  process.env.REACT_APP_STAGE === 'production' || window.location.origin === envUrls.dev

const getPeerClubUrl = () => {
  if (isEnvDev || isDev) {
    return envUrlsPeerClub.dev
  }

  if (isEnvStage) {
    return envUrlsPeerClub.stage
  }

  return envUrlsPeerClub.prod
}

export const peerClubUrl = getPeerClubUrl()
