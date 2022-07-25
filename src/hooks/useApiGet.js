import { useState, useEffect } from 'react'
import apiClient, { setEndpoint } from 'utils/apiClient'

const useApiGet = ({ url, query, isRequest }) => {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState(null)

  const fetchData = async (queryParam) => {
    try {
      setStatus('fetching')
      const response = await apiClient.get(queryParam)

      setData(response.data)
      setStatus('fetched')
    } catch {
      setData([])
      setStatus('error')
    }
  }

  useEffect(() => {
    if (isRequest) {
      if (!query || !url) return

      setEndpoint(url)
      fetchData(query)
    }
  }, [query, url, isRequest])

  return { status, data }
}

export default useApiGet
