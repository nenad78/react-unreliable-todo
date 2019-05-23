import axios from 'axios'

const setSessionId = sessionid => {
  if (sessionid) {
    axios.defaults.headers.common['sessionid'] = sessionid
  } else {
    delete axios.defaults.headers.common['sessionid']
  }
}

export default setSessionId